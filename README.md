## 🚀 Getting Started

```bash
npm install
npm run prepare
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying [./src/pages/index.tsx](./src/pages/index.tsx). The page auto-updates as you edit the file.

---

## 🗂️ Project Folder Structure

- `locales`: Contains translation files or scripts related to internationalization and localization, allowing the application to be used in multiple languages.
- `public`: This directory contains assets that should be accessible by the public in the built application, such as favicon, and other public assets.
- `src`: The source directory where all the project's source code resides.
    - `modules`: Contains modules that pages consist of. Each folder has same name as page.
    - `context`: Contains React context providers and consumers that allow sharing state and data between components.
    - `pages`: Houses the individual pages of the application (typically used in web applications for routing).
    - `shared`: Includes shared resources and utilities that can be used across the entire application.
        - `assets`: Holds static files like images, fonts, and other media that are used throughout the application.
        - `components`: Contains reusable UI components such as buttons, input fields, and modals that can be shared across different parts of the application.
        - `config`: Stores configuration files and constants that define various settings and parameters for the application.
        - `utils`: Includes utility functions and helper scripts that provide common functionality needed by various modules of the application.
        - `hooks`: Contains custom React hooks that encapsulate logic and state management for components.
        - `mocks`: Contains mock data and API responses that can be used for testing and development purposes.
        - `types`: Contains TypeScript type definitions and interfaces that are used throughout the application.

Each folder is intended to organize the codebase for ease of navigation and maintenance. Please ensure that any new code is placed in the appropriate directory according to its function.

---

## 🚦 CI/CD

This project is using [husky](https://typicode.github.io/husky/) to run lint and test before push.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## 📦 Versions

- node: `>=20`
- npm: `>=10`

---
