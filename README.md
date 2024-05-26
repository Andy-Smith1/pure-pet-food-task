# Pure Pet Food Developer Assessment 🐶

## Prerequisites

This project was developed using **Node version 20.12.2 (LTS)**. It has not been tested on other versions.

## To run

Install dependencies

```bash
npm install
```

Run the dev server

```bash
npm run dev
```

Navigate to http://localhost:3000/ to view the application. If required, the port can be configured in `/src/server/index.ts`


To run unit tests, use the following command:

```bash
npm run test
```

## Tech stack choices

- Tailwind CSS - entirely styled with tw utilities, no CSS has been lifted from Pure's live site as requested, other than the hex values for the colors to remain on theme. 
- Vite Express - used to generate React SPA and server to simplify dev experience, single server.
- React Router - used for client side routing between home and offer pages.
- React/Tanstack Query - data fetching/async state management library.
- TypeScript - basic tsconfig included with Vite setup.
- Jest & React Testing Library - few examples of unit tests to demonstrate understanding. Test files are found within component directories.