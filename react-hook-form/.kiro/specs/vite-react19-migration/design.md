# Design Document: Vite + React 19 Migration

## Overview

This design describes the migration from Create React App (CRA) with React 17 to Vite with React 19. The migration involves updating dependencies, restructuring the project to match Vite conventions, and updating the React rendering API to use the new createRoot method.

## Architecture

The application architecture remains a single-page React application. The key change is the build tooling layer:

```
┌─────────────────────────────────────────┐
│           Application Layer             │
│  (App.js, Formulario.jsx, validators)   │
├─────────────────────────────────────────┤
│           React 19 Runtime              │
│     (createRoot API, react-hook-form)   │
├─────────────────────────────────────────┤
│           Vite Build System             │
│  (vite.config.js, @vitejs/plugin-react) │
└─────────────────────────────────────────┘
```

## Components and Interfaces

### Entry Point Changes

**Before (CRA - src/index.js):**
```javascript
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));
```

**After (Vite - src/main.jsx):**
```javascript
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

### Vite Configuration

New file `vite.config.js` at project root:
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### HTML Entry Point

Move `public/index.html` to project root as `index.html` with:
- Remove `%PUBLIC_URL%` placeholders (use `/` instead)
- Add script module tag: `<script type="module" src="/src/main.jsx"></script>`

## Data Models

No data model changes required. The existing form data structures and validation logic remain unchanged.

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

This migration is primarily a configuration and tooling change. The acceptance criteria are all example-based verifications (checking specific configurations exist) rather than universal properties that would benefit from property-based testing.

**Property Reflection:** After analyzing all acceptance criteria, none qualify as properties suitable for PBT:
- All criteria are configuration/structure checks (file existence, dependency versions, script commands)
- No runtime behaviors that vary across input spaces
- Verification is binary (correct config or not) rather than property-based

**No testable properties identified** - all requirements are verified through example-based tests and build verification.

## Error Handling

### Migration Errors

| Error Scenario | Handling |
|----------------|----------|
| Missing Vite dependencies | npm install will fail with clear error message |
| Invalid vite.config.js | Vite dev server will report configuration errors |
| React 19 API mismatch | Build will fail with deprecation warnings |
| Missing entry point | Vite will report missing src/main.jsx |

### Runtime Errors

Existing error handling in the application remains unchanged. React 19's error boundaries continue to work as expected.

## Testing Strategy

### Build Verification
- Run `npm run dev` to verify development server starts
- Run `npm run build` to verify production build succeeds
- Run `npm run preview` to verify production build serves correctly

### Manual Verification
- Verify the Formulario component renders
- Verify form validation works with react-hook-form
- Verify styles are applied correctly

### Unit Tests (Optional)
Since this is a tooling migration with no logic changes, unit tests focus on verifying the app still renders:
- Test that App component renders without crashing
- Test that Formulario component mounts correctly

**Testing Framework:** Vitest (Vite's native test runner) with @testing-library/react for component tests.
