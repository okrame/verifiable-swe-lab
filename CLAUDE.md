# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single page application about trustless technology and decentralized systems, developed at PoliMi.

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React
- **Styling**: PostCSS + Tailwind CSS
- **Deployment**: GitHub Pages (automatic deployment on push via GitHub Actions)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Deployment

The project uses GitHub Actions for continuous deployment to GitHub Pages. Any changes pushed to the main branch automatically trigger a deployment workflow (`.github/workflows/deploy.yml`).

## Architecture Notes

- Single page application structure
- All commits to main branch should automatically reflect on the hosted GitHub Pages site
- Vite handles build optimization and asset bundling
- Tailwind CSS for utility-first styling with PostCSS processing
