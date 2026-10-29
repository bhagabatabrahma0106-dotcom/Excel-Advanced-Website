# Excel Intermediate Skills | Interactive Visual Reference

A **React + TypeScript** learning website presenting Excel skills through illustrated interface mockups, guided steps and topic navigation. The project is an educational reference—not a browser version of Microsoft Excel.

## Features

- Seven sections covering workbook navigation, multiple sheets, data handling, charts, lists, auditing and printing.
- Side navigation, course overview and structured step-by-step instruction cards.
- Visual mockups of Excel UI actions and practical explanations.
- Topic timestamps shown as **reference metadata**; no video player or bundled source video is part of the application.

## Stack

| Layer | Technology |
|---|---|
| UI | React 19 + TypeScript |
| Build system | Vite 8 |
| Linting | ESLint |
| Package management | npm with committed lockfile |
| Automation | GitHub Actions (Node 22, install, lint, build) |

## Run locally

**Node.js 22.12+** and npm are recommended for the current Vite toolchain.

```bash
npm ci
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

### Quality checks

```bash
npm run lint
npm run build
npm run preview
```

The `build` command runs TypeScript project compilation and Vite production build. GitHub Actions runs dependency installation, lint and build on each push/PR; **deployment is not configured**.

## Source guide

- [src/App.tsx](src/App.tsx): page composition.
- [src/components/Sidebar.tsx](src/components/Sidebar.tsx): topic navigation.
- [src/components/Hero.tsx](src/components/Hero.tsx): course overview.
- [src/components/OverviewTable.tsx](src/components/OverviewTable.tsx): topic index.
- `src/components/Section1.tsx`–`Section7.tsx`: instructional content.
- [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md): maintenance and QA guidance.

## Limitations

Screenshots and visual controls inside the educational mockups are not actual Excel application controls. Skill counts and timestamps in the UI are authored reference content and should be checked against the underlying learning material before quoting. No learning analytics backend, account system or deployment URL is claimed here.

This is an independent educational work, **not endorsed by Microsoft**.

Maintained by [bhagabatabrahma0106-dotcom](https://github.com/bhagabatabrahma0106-dotcom).
