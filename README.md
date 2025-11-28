# Durgasantosh G — Portfolio

React + Vite portfolio showcasing skills, projects, and experience with a light/dark theme toggle.

## Stack
- Vite + React
- Tailwind CSS (with CSS variable theming)
- Framer Motion for animations
- React Icons

## Getting Started
```bash
npm install
npm run dev
```
Then open the shown localhost URL (default: http://localhost:5173/).

## Build
```bash
npm run build
```
Output is in `dist/`.

## Content Sources
- `src/data/portfolioData.jsx`: personal info, skills, projects, leadership.
- `src/components/`: UI sections (Hero, Skills, Projects, Experience, Contact, etc.).

## Theming
- Navbar toggle switches between `.theme-dark` and `.theme-light` (stored in `localStorage`).

## Assets
- Resume: place your PDF in `public/` and update `personalInfo.resumeLink` in `src/data/portfolioData.jsx`.
