# Business Tech - Professional News Website

A modern, production-ready Next.js news website for **business-tech.co.za** featuring enterprise technology news, AI innovation, and business strategy insights.

## Features

- **Next.js 14+ App Router** - Modern React framework with static generation
- **Professional News Layout** - Inspired by News24, Bloomberg, and TechCrunch
- **9 Real Articles** - Professional journalism-quality content about:
  - AI in business strategy
  - SME automation strategies
  - Digital transformation trends
  - AI-powered customer service
  - Cybersecurity in the age of AI
  - South African tech startup ecosystem
  - Cloud computing strategies
  - The future of work with AI
  - Building AI strategy for business leaders

- **Fully Responsive** - Mobile-first design with hamburger menu
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Static Site Generation** - All pages pre-rendered for optimal performance
- **Category Navigation** - AI, Strategy, Innovation, Startups, Digital Transformation
- **Article Detail Pages** - Full articles with author bios and related content
- **Trending Sidebar** - Featured trending articles
- **Professional Design** - Dark navy header/footer, clean typography, blue accents

## Tech Stack

- Next.js 16.2.1
- React 19
- TypeScript
- Tailwind CSS
- Static Export (no server required)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

## Build & Deploy

```bash
# Build for production
npm run build

# The build outputs to the `out` directory for static hosting
```

## Deploy to Vercel

1. Push this repository to GitHub
2. Import the project in Vercel
3. Set the domain to **business-tech.co.za**
4. Deploy

Vercel will automatically detect Next.js and use the correct build settings.

## Project Structure

```
business-tech/
├── app/
│   ├── article/[slug]/     # Dynamic article pages
│   ├── category/[slug]/    # Dynamic category pages
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── ArticleCard.tsx     # Article preview cards
│   └── TrendingSidebar.tsx # Trending articles sidebar
├── data/
│   └── articles.ts         # All article content and metadata
└── public/                 # Static assets
```

## Article Management

All articles are stored in `data/articles.ts` as TypeScript objects. To add a new article:

1. Add a new article object to the `articles` array
2. Include: id, title, slug, excerpt, content, category, author, publishedAt, imageUrl
3. Run `npm run build` to regenerate static pages

## Authors

All articles credited to fictional professional journalists:
- Sarah Chen - Tech Editor
- James Molefe - Business Correspondent
- Naledi Khumalo - Digital Strategy Analyst
- Lindiwe Mthembu - CX Technology Reporter
- Dr. Anwar Patel - Cybersecurity Specialist
- Zinhle Ngcobo - Startup Ecosystem Reporter
- Pieter van Zyl - Cloud Infrastructure Specialist
- Dr. Themba Mthethwa - Labor Economics Researcher
- Ravi Chetty - AI Strategy Consultant

## Color Scheme

- **Primary Navy:** #0F172A (header/footer background)
- **Accent Blue:** #2563EB (links, category badges, highlights)
- **White/Gray:** Clean content areas with subtle gray backgrounds
- **Typography:** Inter font family, professional hierarchy

## Content Quality

All articles are 400-600 words of professional journalism-quality writing covering:
- Enterprise technology trends
- AI implementation strategies
- South African business technology landscape
- Digital transformation best practices
- Cybersecurity insights
- Startup ecosystem analysis

## License

Copyright 2026 Business Tech. All rights reserved.
