# Momentum Build - Gym Spark Landing Page

AI-powered fitness platform landing page built with modern web technologies.

## About This Project

This is the marketing and landing page for Gym Spark, the AI-powered fitness companion that helps users build momentum in their fitness journey.

**Live URL**: https://www.momentumbuild.co

## Development Setup

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd momentum-build

# Install dependencies
npm install

# Start the development server with auto-reloading
npm run dev
```

The development server will start at `http://localhost:8080`.

### Newsletter Configuration

The newsletter signup form requires configuration to connect to Google Sheets:

1. Copy `.env.example` to `.env`:
   ```sh
   cp .env.example .env
   ```

2. Follow the complete setup guide in [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) to:
   - Create a Google Sheet for storing signups
   - Deploy a Google Apps Script web app
   - Get your newsletter endpoint URL

3. Add your endpoint URL to the `.env` file:
   ```
   VITE_NEWSLETTER_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

4. Restart the development server to apply the changes

**Note**: Don't forget to also configure the environment variable in your hosting platform (Netlify/Vercel) for production deployments. See [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md) Step 5 for details.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Deployment

This project can be deployed to any static hosting platform. The repository includes configuration files for popular platforms:

### Netlify

The project includes `netlify.toml` and `public/_redirects` for seamless deployment:

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

The project includes `vercel.json` for deployment:

1. Connect your repository to Vercel
2. Build command: `npm run build`
3. Output directory: `dist`

### Other Platforms

Any static hosting service that supports single-page applications (SPAs) will work. Make sure to configure your hosting to redirect all routes to `index.html` for client-side routing to work properly.

## Contributing

This is a private project for Momentum Build Ltd. For questions or issues, please contact the development team.

## License

Copyright © 2025 Momentum Build Ltd. All rights reserved.
