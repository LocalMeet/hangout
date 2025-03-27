# Hangout - React + TypeScript + Vite

This project is a modern React application built with TypeScript, Vite, and styled-components. It's configured for deployment to GitHub Pages.

## Features

- React 19 with TypeScript
- Vite for fast builds and development
- styled-components for CSS-in-JS styling
- GitHub Actions workflow for automatic deployment to GitHub Pages

## Development

### Prerequisites

- Node.js 20 or later
- npm 10 or later

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hangout.git
cd hangout

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

This will start the development server at http://localhost:5173/

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

To manually deploy to GitHub Pages:

1. Ensure your repository is set up for GitHub Pages in the repository settings.
2. Push your changes to the main branch.
3. The GitHub Actions workflow will automatically build and deploy your application.

## Project Structure

- `src/` - Source code
  - `assets/` - Static assets like images
  - `styles/` - Styled components
    - `GlobalStyles.ts` - Global styles using styled-components
    - `AppStyles.ts` - Styled components for the App component
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point

## Customization

### Changing the Base URL

If you need to deploy to a different base URL, update the `base` option in `vite.config.ts`:

```ts
export default defineConfig({
  // ...
  base: '/your-repo-name/',
})
```

## License

MIT
