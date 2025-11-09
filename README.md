# Infinititech Partners - Corporate Website

A modern, professional corporate website built with Next.js 14 and Sanity CMS.

## Features

- **Next.js 14** with App Router
- **Sanity CMS** for content management
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Responsive Design** for all devices
- **SEO Optimized**
- **Performance Focused**

## Pages

- Home - Main landing page with animations
- About - Company information
- Services - Service offerings
- Portfolio - Project showcase
- Team - Team members
- Blog - Latest news and updates
- Contact - Contact form and information
- CMS Pages - Dynamic pages via Sanity

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

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=nwa9weet
NEXT_PUBLIC_SANITY_DATASET=production
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

See [QUICK_START.md](./QUICK_START.md) for a 15-minute deployment guide.

## Project Structure

```
infps/
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── blog/           # Blog section
│   ├── cms-page/       # Dynamic CMS pages
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio showcase
│   ├── services/       # Services pages
│   ├── studio/         # Sanity Studio
│   ├── team/           # Team page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/          # React components
│   ├── layout/         # Layout components
│   └── ui/             # UI components
├── lib/                # Utility functions
├── public/             # Static assets
├── sanity.config.ts    # Sanity configuration
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── vercel.json         # Vercel configuration
```

## Sanity CMS

Access the Sanity Studio at `/studio` to manage content:

- Blog posts
- Portfolio items
- Team members
- Pages
- And more...

## Technologies

- **Framework:** Next.js 14.2.5
- **Language:** TypeScript 5.5.4
- **Styling:** Tailwind CSS 3.4.1
- **CMS:** Sanity 4.12.0
- **UI Components:** Radix UI, shadcn/ui
- **Icons:** Lucide React

## Support

For issues and questions:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- Visit [Next.js Documentation](https://nextjs.org/docs)
- Visit [Sanity Documentation](https://www.sanity.io/docs)

## License

Copyright © 2024 Infinititech Partners. All rights reserved.
