# README: Guía introductoria a Astro para la POC

## 1. Introducción

Este repositorio contiene una **Proof of Concept (POC)** construida con **Astro**, explorando sus capacidades de:

- **SSG (Static Site Generation)**
- **SSR (Server Side Rendering)**
- **CSR (Client Side Rendering / interactividad)**
- **Gestión de rutas dinámicas** y redirecciones.
- **Uso de componentes de frameworks (React)** y scripts nativos.

Astro es un framework moderno centrado en **contenido-first**, con una filosofía de **"Islands Architecture"**, lo que permite generar HTML estático optimizado y cargar JavaScript solo donde se necesita.

---

## 2. Estructura del proyecto

```text
src/
├─ components/
│  ├─ astro/
│  │  ├─ Counter.astro           # Counter Astro puro con script inline
│  │  ├─ Hero.astro              # Hero section con múltiples directivas React
│  │  ├─ RandomImageSSR.astro    # SSR con fetch a Dog CEO API
│  │  ├─ Navbar.astro            # Navbar con CSS Modules
│  │  ├─ Features.astro          # Features con estilos scopeados
│  │  ├─ CTA.astro               # Call to Action
│  │  └─ Footer.astro            # Footer con CSS externo
│  └─ react/
│     └─ CounterReact.tsx        # Counter React con hidratación
├─ layout/
│  └─ BaseLayout.astro           # Layout base reutilizable
├─ pages/
│  ├─ index.astro                # Landing page principal
│  ├─ about.astro                # SSG con fetch de clima
│  ├─ prerender.astro            # Ejemplo de SSR
│  └─ blog/
│     ├─ [slug].astro            # SSR dinámico tipo /blog/[slug]
│     └─ index.astro             # Redirección HTML a /blog/astro
astro.config.mjs
```

- `components/` → Contiene componentes reutilizables organizados por framework.
- `layout/` → Layouts reutilizables para páginas.
- `pages/` → Define rutas automáticamente. Cada archivo `.astro` se convierte en una URL.
- `astro.config.mjs` → Configuración global del proyecto (SSR o SSG).

---

## 3. Configuración de Astro

### a) Configuración global

```js
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";

export default defineConfig({
  output: "server", // 'static' para SSG puro, 'server' para SSR
  adapter: node({ mode: "standalone" }),
  integrations: [react()]
});
```

- `output: 'static'` → Todo el sitio se genera como HTML estático.
- `output: 'server'` → Permite SSR dinámico por request.
- `adapter: node()` → Configuración del adaptador Node para SSR.
- `integrations: [react()]` → Habilita componentes React en el proyecto.

### b) Prerender por página

```astro
export const prerender = true  // SSG
export const prerender = false // SSR dinámico
```

- **Prerender explícito en cada página** es buena práctica.
- Controla si la página se genera en **build** o **por request**.
- En `output: 'server'`, `prerender = false` permite SSR dinámico.
- En `output: 'static'`, `prerender = false` **no tiene efecto**, ya que no hay servidor activo.

---

## 4. Tipos de renderizado en Astro

| Tipo                         | Descripción                                         | Ejemplo en el proyecto                    |
| ---------------------------- | --------------------------------------------------- | ----------------------------------------- |
| **SSG**                      | HTML generado en build, TTFB mínimo                | `/about` con fetch de clima              |
| **SSR**                      | HTML generado en servidor por request              | `/blog/[slug]` y `/prerender`           |
| **CSR**                      | Componentes interactivos que se hidratan en cliente| `<CounterReact client:load />`           |
| **Astro puro con JS inline** | Scripts nativos dentro de componentes `.astro`     | `<Counter />` con script inline          |

### Directivas de hidratación (CSR)

- `client:load` → Hidrata inmediatamente en carga.
- `client:idle` → Hidrata cuando el navegador está libre.
- `client:visible` → Hidrata cuando el componente entra en viewport.
- `client:only="react"` → Renderiza solo en cliente, sin SSR.

**Ejemplo en Hero.astro:**

```astro
<CounterReact client:load/>      <!-- Hidrata inmediatamente -->
<CounterReact client:idle />     <!-- Hidrata cuando idle -->
<CounterReact client:visible />  <!-- Hidrata cuando visible -->
<CounterReact client:only="react" /> <!-- Solo en cliente -->
```

---

## 5. Ejemplos de componentes

### a) Counter Astro puro

```astro
<div>
  <p>Clicks: <span data-count>0</span></p>
  <button data-btn>Incrementar</button>
</div>

<script is:inline>
  const root = document.currentScript
    ? document.currentScript.closest("div")
    : null;
  const btn = root?.querySelector("[data-btn]");
  const span = root?.querySelector("[data-count]");
  let count = 0;

  btn?.addEventListener("click", () => {
    count++;
    if (span) {
      span.textContent = String(count);
    }
  });
</script>
```

- Uso de `is:inline` evita hoisting y scopea el script al componente.
- No requiere React y funciona en SSR y SSG.

### b) Counter React

```tsx
import { useState } from 'react';

export default function CounterReact() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-react">
      <p>Clicks: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Incrementar</button>
    </div>
  );
}
```

- Se hidrata en cliente con directivas `client:*`.

### c) SSR dinámico

```astro
---
// RandomImageSSR.astro
const response = await fetch('https://dog.ceo/api/breeds/image/random');
const data = await response.json();
const imageUrl = data.message;
---

<figure>
  <img src={imageUrl} alt="Perro aleatorio" style="max-width: 100%; height: auto;" />
  <figcaption>Imagen aleatoria de un perro</figcaption>
</figure>
```

- Fetch se ejecuta en el servidor en cada request.
- Cada recarga devuelve una imagen diferente.

---

## 6. Fetch en SSG

Se puede ejecutar en build (`await fetch(...)`) para obtener datos estáticos.

**Ejemplo en `/about.astro`:**

```astro
---
export const prerender = true;
const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=4.71&longitude=-74.07&current_weather=true&timezone=America/Bogota');
const data = await res.json();
const currentWeather = data.current_weather?.temperature ?? 'N/A';
---
<p>Clima actual en Bogotá: {currentWeather}°C</p>
```

- Ejecutado **solo una vez en build**.
- HTML resultante es completamente estático.

---

## 7. Rutas dinámicas y redirecciones

### a) Blog dinámico `/blog/[slug]`

```astro
---
export const prerender = false;
const { slug } = Astro.params;

const posts = {
  hello: { title: "Hola Mundo", body: "Este es el primer post." },
  astro: { title: "Astro SSR", body: "Este post se genera dinámicamente." },
};

const post = posts[slug as keyof typeof posts] || { title: "Post no encontrado", body: "" };
---
<h1>{post.title}</h1>
<p>{post.body}</p>
```

- Cada request genera HTML dinámicamente en servidor.

### b) Redirección `/blog` → `/blog/astro`

**En SSG (usando meta refresh):**
```astro
<html lang="es">
  <head>
    <meta http-equiv="refresh" content="0; url=/blog/astro" />
    <title>Redirigiendo…</title>
  </head>
  <body>
    <p>Redirigiendo a <a href="/blog/astro">/blog/astro</a></p>
  </body>
</html>
```

- Funciona en modo estático con `<meta http-equiv="refresh">`.
- Para SSR con Node, se puede usar `Response` redirects.

---

## 8. Estilos

### a) CSS Scopeado

```astro
<style>
  .cta {
    background: #2563eb;
    color: white;
  }
</style>
```
- `<style>` en `.astro` → **scoped automáticamente**.

### b) CSS Modules

```astro
---
import styles from './Navbar.module.css';
---
<nav class={styles.navbar}>
  <ul class={styles['nav-links']}>
```

### c) CSS/SCSS externos

```astro
---
import "./Footer.css";
import styles from './Hero.module.scss';
---
```
- SCSS requiere `npm install -D sass`.

---

## 9. Layout System

**BaseLayout.astro:**
```astro
---
const { title } = Astro.props;
---
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body>
    <slot />  <!-- Aquí se inyecta el contenido -->
  </body>
</html>
```

**Uso en páginas:**
```astro
---
import BaseLayout from "../layout/BaseLayout.astro";
---
<BaseLayout title="Mi Página">
  <h1>Contenido de la página</h1>
</BaseLayout>
```

---

## 10. Buenas prácticas

1. Siempre declarar `prerender` explícitamente por página.
2. Usar `<meta charset="UTF-8">` y `<meta name="viewport">` en layouts.
3. Para interactividad ligera: scripts inline con `is:inline`.
4. Para UI compleja: React/Vue/Svelte + directivas `client:*`.
5. Fetch en SSG → build time, fetch en SSR → request time.
6. Organizar componentes por framework en carpetas separadas.
7. Usar CSS Modules para estilos específicos de componentes.

---

## 11. Comandos útiles

```bash
npm install        # Instalar dependencias
npm run dev        # Servidor de desarrollo
npm run build      # Generar build
npm run preview    # Probar build en producción
```

---

Este README resume todo lo explorado en la POC, con ejemplos **actuales y verificados** de SSG, SSR, CSR, fetchs, componentes React/Astro, estilos y redirecciones basados en el código real del proyecto.
