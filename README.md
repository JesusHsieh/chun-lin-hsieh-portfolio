# CHUN-LIN HSIEH Portfolio

React + Vite static portfolio site for CHUN-LIN HSIEH. The site presents selected landscape design projects, professional background, contact information, and the LANDWEAVER AI platform as the primary personal digital project.

Live site:

- https://clhsieh.com

LANDWEAVER AI:

- https://land-weaver-ai.vercel.app

## Project Structure

```text
.
|- index.html
|- package.json
|- postcss.config.js
|- tailwind.config.js
|- vite.config.js
|- public/
|  `- images/
|     |- portfolio/
|     |- personal/
|     `- profile/
`- src/
   |- App.jsx
   |- main.jsx
   |- styles.css
   |- components/
   |  |- AboutSection.jsx
   |  |- CityEvolutionBackground.jsx
   |  |- ContactSection.jsx
   |  |- Footer.jsx
   |  |- Navigation.jsx
   |  |- ProjectDetail.jsx
   |  |- ProjectGrid.jsx
   |  |- ProjectHero3D.jsx
   |  |- ResumeSection.jsx
   |  `- SectionHeader.jsx
   `- data/
      `- siteData.js
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

Production files are generated in `dist/`.

## Deployment

The site is deployed with GitHub Pages through the workflow in:

```text
.github/workflows/deploy-pages.yml
```

The repository should remain public for GitHub Pages publishing under the current setup. The custom domain is:

```text
clhsieh.com
```

## Content Strategy

### Participated Projects

The portfolio projects are presented as participated and led design work from past professional experience. This wording is intentional because many projects were contracted under former employers, even when the design role was substantial.

### Personal Projects

The personal project section currently focuses on LANDWEAVER AI as the primary platform. Earlier standalone tools, such as greenery regulation calculation and planting data workflows, are treated as functions or modules that inform the larger LANDWEAVER AI direction rather than separate live projects.

The portfolio does not embed LANDWEAVER AI with an iframe. Instead, it explains the project value inside the portfolio and links to the official platform with an external button.

## Image Rules

Use consistent file naming from the start. This makes GitHub backup, bulk replacement, and future expansion easier.

### General Rules

- Use lowercase English where possible.
- Separate words with `-`.
- Avoid spaces, Chinese characters, and brackets in file names.
- Keep numbering fixed with two digits such as `01`, `02`, `03`.
- Use suffixes to describe usage.

### Portfolio Naming

```text
portfolio-01-cover.jpg
portfolio-01-hero-01.jpg
portfolio-01-hero-02.jpg
portfolio-01-hero-03.jpg
```

### Personal Project Naming

```text
personal-03-cover.jpg
personal-03-hero-01.jpg
personal-03-hero-02.jpg
personal-03-hero-03.jpg
```

### Profile Naming

```text
my.png
profile-about.png
```

## Data Shape

Project images follow this structure in `src/data/siteData.js`:

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

Meaning:

- `coverImage`: used for the project list card.
- `heroImages`: used for the project detail hero flip area.
- `projectUrl`: optional external link for live projects.
- `projectLinkLabel`: optional label for the external project button.

Some projects also use `heroImagePositions` to fine tune image cropping per slide.
