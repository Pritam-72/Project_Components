# Kage Lab · Interactive Creative UI Components

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Motion](https://img.shields.io/badge/Motion-13.3-FF0055?style=flat-square)](https://motion.dev/)

An interactive laboratory of high-fidelity animation and creative UI experiments exploring WebGL shaders, tactile physics simulations, smooth canvas drawing engines, and reactive environmental lighting.

---

## 🎨 Experiments Showcase

| Route | Experience | Tech Highlights |
|---|---|---|
| [`/hero/msd`](file:///kage_lab/src/app/hero/msd/page.tsx) | **Mahendra Singh Dhoni Smoke-Reveal Hero** | React Three Fiber, Custom GLSL shaders, procedural curl noise, aspect-cover UV math, difference-blend typography |
| [`/stamps`](file:///kage_lab/src/app/stamps/page.tsx) | **Interactive Postal Desk & Magnifier** | Vintage Indian stamp collection (Delhi, Chennai, Mumbai, Kerala), deck shuffle physics, dual-layer optical loupe |
| [`/trace-drawing`](file:///kage_lab/src/app/trace-drawing/page.tsx) | **Pressure-Sensitive Trace Studio** | HTML5 Canvas, Catmull-Rom & Bezier stroke smoothing, multi-level undo/redo, template selector, PNG export |
| [`/window-shutter`](file:///kage_lab/src/app/window-shutter/page.tsx) | **Kinematic Train Window Shutter** | Motion vertical drag bounds, real-time exposure brightness filter, audio playback cues, spring-snap kinematics |
| [`/`](file:///kage_lab/src/app/page.tsx) | **Interactive Component Lab Hub** | Central showcase gallery with live navigation switcher, technical tags, and experiment summaries |

---

## 🛠️ Architecture & Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Runtime:** React 19
- **Languages:** TypeScript 5, GLSL (OpenGL Shading Language)
- **Styling:** Tailwind CSS v4, PostCSS
- **Animation & Physics:** Motion (Framer Motion v13), GSAP
- **3D & WebGL:** Three.js, React Three Fiber (R3F), Drei
- **Export Utility:** `html2canvas-pro`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or pnpm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Pritam-72/Project_Components.git

# Navigate into the project directory
cd Project_Components/kage_lab

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the interactive showcase hub.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Repository Layout

```text
kage_lab/
├── public/
│   └── image/                 # High-resolution textures, videos, and sound effects
│       ├── msd/               # Mahendra Singh Dhoni portraits
│       ├── stamp/             # Delhi, Chennai, Mumbai, Kerala stamp artwork
│       ├── trace-images/      # Architectural line-art tracing templates
│       └── window-shutter/    # Shutter textures and ambient train footage
├── src/
│   ├── app/                   # App Router pages and route handlers
│   │   ├── hero/msd/          # 3D WebGL smoke-reveal hero
│   │   ├── stamps/            # Postal desk simulation
│   │   ├── trace-drawing/     # Canvas drawing studio
│   │   ├── window-shutter/    # Kinematic shutter experience
│   │   ├── globals.css        # Core stylesheet and design tokens
│   │   └── page.tsx           # Showcase gallery index
│   ├── components/            # Reusable components
│   │   ├── common/            # Loading spinners & UI primitives
│   │   ├── herosection/       # SmokeRevealEffect shader mesh
│   │   ├── navigation/        # LabNavbar quick switcher
│   │   └── stamps/            # MagnifierGlass dual-layer loupe
│   ├── types/                 # Shared TypeScript interfaces
│   └── utils/                 # Motion presets and Web Audio utilities
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 📄 License

MIT © [Preetimohan Pratihari](https://github.com/Pritam-72)
