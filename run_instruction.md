# Build and Run Instructions

## Prerequisites

- Node.js 12 is recommended because this repository uses an older Create React App / `node-sass` dependency stack
- npm
- MongoDB and any environment variables referenced by the server

## Install

```bash
git clone https://github.com/Niravpatel129/React-Employees-DB.git
cd React-Employees-DB
npm install
```

Configure any required `.env` values, including the database connection used by the server.

## Run the full application in development

```bash
npm start
```

This starts the Node server and React development application together.

To run only the React application:

```bash
npm run start:react-app
```

## Build the frontend

```bash
npm run build
```

The optimized React application is written to `build/`.

## Tests

```bash
npm test
```

If dependency installation fails on a modern Node version, switch to the recommended legacy Node runtime with a version manager and reinstall dependencies.