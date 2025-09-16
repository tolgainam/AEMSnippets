# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript library called `aem-snippets` that provides a collection of reusable AEM snippets and components. Each snippet has two usage modes:
1. **npm package**: Import as a React component in other projects
2. **iframe embed**: Standalone embeddable widget for any website

### Available Snippets
- **gradientTypography**: Gradient text effects with brand tokens, shadows, glow, and animation

## Development Commands

- `npm run dev` - Start development server for demo/testing (always use this for development)
- `npm run build` - Build the demo application
- `npm run build:lib` - Build the library for npm distribution
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## Architecture

### Core Structure
- `src/index.ts` - Main library entry point for npm package exports
- `src/snippets/` - Directory containing all snippets

### Gradient Typography Snippet (`src/snippets/gradientTypography/`)
- `components/GradientText.tsx` - Main React component with TypeScript props interface
- `demo/DemoApp.tsx` - Interactive demo with live configuration and embed code generation
- `embed/EmbedApp.tsx` - Standalone app that reads URL parameters for configuration
- `embed/embed.tsx` - Embed app entry point
- `tokens/designTokens.ts` - Brand design tokens and typography scales
- `styles/fonts.css` - Custom font declarations
- `index.ts` - Snippet exports

### Build Structure
- `index.html` - Main demo app HTML
- `gradientTypography/embed.html` - Embed HTML page for iframe usage

### Build Configuration
- Uses Vite for development and building
- Rollup for library packaging (dual CJS/ESM output)
- TypeScript for type safety

## Key Features

### GradientText Component Props
- `colors`: Array of gradient colors
- `direction`: CSS gradient direction
- `fontSize`, `fontWeight`, `fontFamily`: Typography settings
- `animate`: Enable gradient animation
- `animationDuration`: Animation timing

### URL Parameters for Embed
The embed application parses these URL parameters:
- `text` - Display text (URL encoded)
- `colors` - JSON array of colors (URL encoded)
- `direction`, `fontSize`, `fontWeight`, `fontFamily` - Styling
- `animate`, `animationDuration` - Animation settings

## Publishing

The library is configured for npm publishing with:
- TypeScript declarations generated
- Both CommonJS and ESM builds
- Proper peer dependencies for React
- do not include Claude in the commit messages. Or anything related to Claude. Do not include Claude as a conributer as well.