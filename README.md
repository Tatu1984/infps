# Infinititech Partners - Corporate Website

A modern, professional corporate website built with Next.js 14.

## Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Responsive Design** for all devices
- **SEO Optimized**
- **Performance Focused**
- **Static Generation** for fast loading

## Pages

- Home - Main landing page with animations
- About - Company information
- Services - Service offerings
- Portfolio - Project showcase
- Team - Team members
- Contact - Contact form and information
- Particles - Visual effects demo

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd infps
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

See [QUICK_START.md](./QUICK_START.md) for a 15-minute deployment guide.

## Project Structure

```
infps/
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── particles/      # Particles demo
│   ├── portfolio/      # Portfolio showcase
│   ├── services/       # Services pages
│   ├── team/           # Team page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── layout/         # Layout components
│   └── ui/             # UI components
├── lib/                # Utility functions
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── vercel.json         # Vercel configuration
```

## Technologies

- **Framework:** Next.js 14.2.5
- **Language:** TypeScript 5.5.4
- **Styling:** Tailwind CSS 3.4.1
- **UI Components:** Radix UI, shadcn/ui
- **Icons:** Lucide React

## Support

For issues and questions:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- Visit [Next.js Documentation](https://nextjs.org/docs)

## License

Copyright © 2024 Infinititech Partners. All rights reserved.
