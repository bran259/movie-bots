# movie-bots

A small React + Vite demo app ("movie-bots") that displays bots from a local JSON server and lets you enlist/release them. This project uses Vite for fast development, a JSON server (db.json) for local API data, and simple React components under src/.

## Quick overview
- Main entry: src/main.jsx
- Root component: src/App.jsx
- Local JSON API data: db.json (served by json-server)
- Components: src/components/*.jsx
- NPM scripts and project metadata: package.json

## Requirements
- Node.js (recommended v16+)
- npm

## Getting started (development)
1. Install dependencies:
   npm install

2. Start the JSON API server:
   npm run server
   - Serves bots at: http://localhost:4000/bots

3. Start the Vite dev server:
   npm run dev
   - Open the app in the browser at the printed dev server URL (usually http://localhost:5173).

## Scripts
Common scripts defined in package.json (examples):
- npm run dev — start Vite dev server
- npm run build — build production bundle
- npm run preview — preview the production build locally
- npm run server — start json-server reading db.json (API on port 4000)
- npm run deploy — deploy to gh-pages (if configured)

## Project structure
- src/
  - main.jsx — app entry
  - App.jsx — root component; loads bot data and wires components
  - components/
    - Bot.jsx — small card for a bot in the collection
    - BotCard.jsx — detailed view for a selected bot
    - YourBotArmy.jsx — enlisted bots and actions (release/discharge)
    - (other components: BotCollection, FilterBar, SortBar — if present)
- db.json — sample data for json-server
- package.json — scripts & deps
- README.md — this file

## Components (brief)
- Bot — presentational card used in the bot collection grid.
- BotCard — detailed specs and actions for a selected bot.
- BotCollection — grid list of available bots (composed in App).
- FilterBar — class filter checkboxes.
- SortBar — sort dropdown for health/damage/armor.
- YourBotArmy — shows your enlisted bots and allows release/discharge.

See src/App.jsx to understand how components are composed and how props/callbacks are wired.

## Build & deploy
- Build: npm run build
- Preview build locally: npm run preview
- Deploy: npm run deploy (if gh-pages or other deploy script is configured)

## Notes for contributors
- Use the Vite dev server and json-server concurrently during development.
- Component logic and state lives primarily in App.jsx and child components.
- If adding new components, follow existing naming and props patterns in src/components.

## References
- Vite + React template and plugins:
  - @vitejs/plugin-react
  - @vitejs/plugin-react-swc

