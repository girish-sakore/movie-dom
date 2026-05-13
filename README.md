# MovieDom

MovieDom is a React movie-search app powered by the OMDb API. This version has been moved from Create React App to Vite and reorganized into a modern component, hook, and service structure so the UI and feature set can evolve more easily.

## Features

- Search movies, series, and games through OMDb
- View full movie details and ratings
- Loading, empty, and error states
- Paginated search results
- Responsive, poster-first layout

## Tech Stack

- React 18
- Vite
- Vitest
- Testing Library
- OMDb API

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

3. Add your OMDb API key:

   ```env
   VITE_OMDB_API_KEY=your_omdb_api_key
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates a production build in `dist`
- `npm run preview` previews the production build
- `npm run test` runs Vitest
- `npm run deploy` deploys `dist` to GitHub Pages

## Project Structure

```text
src/
  components/       Reusable UI components
  hooks/            App-specific React hooks
  services/         OMDb API client
  images/           Existing visual assets
  App.jsx           App composition
  main.jsx          Vite entrypoint
```
