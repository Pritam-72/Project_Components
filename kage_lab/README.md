# Kage Lab

An interactive collection of animation and creative UI experiments built with
Next.js, React, TypeScript, Tailwind CSS, Motion, and Three.js.

## Features

- **MSD hero** - A full-screen Mahendra Singh Dhoni landing experience with a
  Three.js smoke-reveal transition between images.
- **Interactive stamps** - Explore, shuffle, zoom, and magnify location stamps
  from Delhi, Chennai, Mumbai, and Kerala.
- **Trace drawing** - Draw over selectable images with smooth strokes, undo and
  redo controls, image upload, and export support.
- **Window shutter** - Drag a shutter open and closed to reveal a video scene,
  with responsive lighting and shutter sound effects.

## Routes

| Route | Experience |
| --- | --- |
| `/hero/msd` | Mahendra Singh Dhoni smoke-reveal hero |
| `/stamps` | Interactive location stamps |
| `/trace-drawing` | Image tracing and drawing canvas |
| `/window-shutter` | Draggable window shutter animation |

The root route (`/`) is currently a minimal placeholder.

## Tech stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Motion](https://motion.dev/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Three.js](https://threejs.org/)
- [GSAP](https://gsap.com/)
- [html2canvas-pro](https://github.com/niklasvh/html2canvas-pro)

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

From the `kage_lab` directory, install the dependencies:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```


### Production build

Create and run an optimized production build:

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Project structure

```text
kage_lab/
├── public/
│   └── image/                 # Images, videos, and audio used by the demos
├── src/
│   ├── app/                  # App Router pages and global styles
│   └── components/           # Reusable interactive components
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Assets

Demo assets are served from `public/image/` and referenced with paths such as
`/image/msd/msd.webp`. Keep new static images, videos, and audio in `public/`
so they can be loaded directly by the browser.
