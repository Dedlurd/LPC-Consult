LPC Careers
LPC Careers is a React + Vite marketing website for a career consultancy focused on professional positioning, resume support, LinkedIn optimization, executive profiles, and career transition guidance. The site is structured as a multi-page brochure and lead-generation experience for individual service offerings.

Overview
This repository contains the front-end implementation for the LPC Careers website. The app is built with React and rendered as a single-page application with client-side routing. It includes a home page, service pages, portfolio and resources pages, about content, and a contact page that prepares an email enquiry instead of submitting form data to a backend.

The codebase currently presents a polished static marketing site rather than a full customer platform. There is no server-side application, database, authentication flow, or external API integration in the repository.

Verified features
The following features are present in the implemented code and are reflected in the routed pages and components:

Home landing page with hero section, service highlights, results, resources, and final call-to-action
Services page with service categories and tiered pricing blocks
About page describing the consultancy’s approach and positioning philosophy
Portfolio page with case-study and outcome sections
Resources page with articles, stages, and tools content
Contact page with a guided enquiry form and a mailto-based submission flow
Responsive navigation with a mobile menu
Email-based contact flow using the default mail client, targeting support@lpccareers.com
Vercel SPA rewrite configuration for client-side routing
Notable gaps and limits
The repository does not currently include evidence of the following:

A backend service or API server
User accounts or authentication
Database models or persistence layer
CMS or content-management integration
Payment processing or checkout flow
Form submission to a hosted endpoint
Environment variable-driven configuration for runtime secrets
The contact form does not submit to a server; it opens a pre-filled email draft in the user’s email client.

Tech stack
React 19
Vite 8
React Router 7
Tailwind CSS 4
Motion animation library
lucide-react icon set
Project structure
Text
.
├── frontend/
│   ├── public/
│   │   └── images/
│   │       └── testimonials/
│   ├── src/
│   │   ├── components/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── home/
│   │   │   ├── portfolio/
│   │   │   ├── resources/
│   │   │   └── services/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vercel.json
│   └── vite.config.js
├── package-lock.json
└── README.md
Notes:

The application code lives under frontend/.
The root repository is effectively a wrapper around the front-end app.
There is no application server or backend code in the repo root.
Architecture and runtime flow
The app is a front-end-only React application:

frontend/src/main.jsx mounts the app into the root DOM element.
frontend/src/App.jsx defines the client-side routes for /, /services, /about, /portfolio, /resources, and /contact.
frontend/src/layouts/Layout.jsx renders the shared Header and Footer around routed page content.
Each page component composes section-level React components from src/components/*.
The contact submission path is a mailto: workflow created in ContactForm.jsx; it does not send data to any backend endpoint.
frontend/vercel.json includes a rewrite rule so paths fall back to index.html, which is appropriate for a Vite single-page app served via Vercel.
Frontend technologies
The project uses the following technologies and libraries that are visible in frontend/package.json:

react and react-dom for UI rendering
react-router-dom for route handling
tailwindcss and @tailwindcss/vite for styling
motion for animation effects
lucide-react for iconography
vite as the build and dev server tool
@vitejs/plugin-react for Vite React support
Dependencies and integrations
The repository does not include a backend or service integration layer. Verified dependencies are front-end-only:

UI and styling packages
React routing
Animation and icon libraries
Vite tooling
No database client, REST client, GraphQL client, or environment-based API configuration is present in the codebase.

Environment variables
No .env.example, .env, or code referencing process.env or import.meta.env was found in the repository.

This repository does not require any secret or environment variables for the current implementation.

Local development
Because the runnable app lives under frontend/, install dependencies and run the dev server from that directory.

bash
cd frontend
npm install
npm run dev
The Vite dev server will start locally, typically on a local port such as http://localhost:5173.

Production build
bash
cd frontend
npm install
npm run build
To preview a production build locally:

bash
cd frontend
npm run preview
Deployment
The project includes frontend/vercel.json, which configures single-page-app rewrites and is consistent with Vercel hosting.

Known deployment characteristics from the repository:

Front-end only application
Static client-side routing via Vercel rewrite
No build-time or runtime API secrets currently configured
Project is likely intended to be deployed as a Vercel app with the project root set to frontend/
Notes for maintainers
This repository currently functions as a marketing website and lead-generation landing site. If future functionality is added, the repository will need a dedicated backend, form endpoint, and environment configuration for any production service integrations.
