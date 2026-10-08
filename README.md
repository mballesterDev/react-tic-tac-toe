# Tres en raya

Juego del tres en raya (Tic Tac Toe) en React con turnos, detección de ganador, empate y reinicio.

**Demo:** https://mballesterdev.github.io/react-tic-tac-toe/

## Funcionalidades

- Tablero inmutable con `useState`
- Detección de ganador y de empate
- Botón de reinicio

## Tecnologías

React 19 · Vite · TypeScript · Tailwind CSS 4

## Uso en local

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

El proyecto ya está configurado para GitHub Pages:

- `vite.config.ts` define `base: '/react-tic-tac-toe/'` (el nombre del repositorio).
- `package.json` incluye `homepage` y los scripts `predeploy` y `deploy` (paquete `gh-pages`).

Para publicar una nueva versión:

```bash
npm run deploy
```

Esto genera `dist/` y lo sube a la rama `gh-pages`. En el repositorio, **Settings → Pages** debe tener como origen la rama `gh-pages` y la carpeta `/ (root)`.
