// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Se debe cambiar a static para que las páginas se generen como archivos HTML estáticos.
  adapter: node({
    mode: 'standalone'
    /* 
    mode: 'standalone': El servidor se ejecuta de forma independiente, manejando tanto las rutas como los archivos estáticos.
    mode: 'middleware': El servidor se integra como middleware en un servidor HTTP existente, como Express.
 */
  }),
  integrations: [react()]
});
