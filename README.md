# Urban-Culture-Site-

Short description

Meugadim is a full-stack project containing a client-side React application built with Vite and a server-side Node.js/Express backend. The repository includes Dockerfiles and a docker-compose configuration for running the services in isolated containers.

Languages & Technologies

- JavaScript (ES6+) — source code for both client and server
- React (JSX) and Vite — fast frontend development environment
- CSS — static styling in component and page CSS files
- Node.js + Express — backend, routers and services
- Docker & Docker Compose — containerized development and deployment
- ESLint — code style and linting (client contains an ESLint config)
- Jest / Supertest (or similar testing libraries) — server contains `test/` and router tests

Project structure (high level)

- client/ — frontend application
  - src/ — React source code
  - components/, pages/ — UI components and pages
  - package.json, vite.config.js, dockerfile
- server/ — backend application
  - routers/, services/, utils/, public/
  - app.js / server.js, package.json, dockerfile
- docker-compose.yml — combined setup for client and server

Local development

Quick options:

1) Using Docker Compose (recommended if Docker is installed):

   docker-compose up --build

This will build and run both the client and server containers together.

2) Running manually (separate client and server):

   - Server side:
     cd server; npm install; npm start  (or `node server.js` / `node app.js` if `start` script is not defined)

   - Client side:
     cd client; npm install; npm run dev  (Vite typically runs the dev server with the `dev` script)

Tests

- The server contains a `test/` directory. Run tests if a test script is defined in `server/package.json`:

  cd server; npm test

Notes

- Important configuration files: `docker-compose.yml`, `vite.config.js`, `client/eslint.config.js`.
- Example component and page code can be found under `client/src/components` and `client/src/pages`.
- If you want the README updated with exact npm scripts from `package.json` (or additional setup instructions), tell me and I will update it accordingly.

Key files to check

- server/app.js, server/server.js
- client/src/main.jsx, client/package.json

