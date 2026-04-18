# CHUN-LIN HSIEH Portfolio

This project is a maintainable React + Vite static portfolio site prepared for GitHub backup and future deployment.

## Project Structure

```text
.
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
└─ src
   ├─ App.jsx
   ├─ main.jsx
   ├─ styles.css
   ├─ components
   │  ├─ AboutSection.jsx
   │  ├─ ContactSection.jsx
   │  ├─ Footer.jsx
   │  ├─ Navigation.jsx
   │  ├─ ProjectDetail.jsx
   │  ├─ ProjectGrid.jsx
   │  ├─ ProjectHero3D.jsx
   │  ├─ ResumeSection.jsx
   │  └─ SectionHeader.jsx
   └─ data
      └─ siteData.js
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Image Rules

Use consistent file naming from the start. This makes GitHub backup, bulk replacement, and future expansion much easier.

### General Rules

- Use lowercase English only.
- Separate words with `-`.
- Do not use spaces, Chinese characters, or brackets in file names.
- Keep numbering fixed with two digits such as `01`, `02`, `03`.
- Use suffixes to describe usage.

### Folder Layout

```text
public/
└─ images/
   ├─ portfolio/
   ├─ personal/
   └─ profile/
```

### Portfolio Naming

```text
portfolio-01-cover.jpg
portfolio-01-hero-01.jpg
portfolio-01-hero-02.jpg
portfolio-01-hero-03.jpg
```

### Personal Project Naming

```text
personal-01-cover.jpg
personal-01-hero-01.jpg
personal-01-hero-02.jpg
```

### Profile Naming

```text
profile-about.jpg
profile-og.jpg
```

## Data Shape

Project images now follow this structure inside `src/data/siteData.js`:

```js
{
  coverImage: '/images/portfolio/portfolio-01-cover.jpg',
  heroImages: [
    '/images/portfolio/portfolio-01-hero-01.jpg',
    '/images/portfolio/portfolio-01-hero-02.jpg',
    '/images/portfolio/portfolio-01-hero-03.jpg',
  ],
}
```

### Meaning

- `coverImage`: used for the project list card.
- `heroImages`: used for the project detail hero flip/slider area.

If `heroImages` is not ready yet, you can temporarily point them to placeholder files with the same naming convention.

## Recommended Next Steps

- Replace placeholder image paths with real project assets in `public/images/`.
- Replace the placeholder email and LinkedIn URL.
- Replace the About image with a real profile photo.
- Add GitHub Pages deployment settings when ready to publish.
