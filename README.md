# Borneo Fashion Week

Borneo Fashion Week (BFW) is the premier regional fashion digital runway, organized by OneMediaGroup. This Next.js application serves as the official platform designed to seamlessly connect ASEAN designers to the global market while celebrating the untamed creativity of Borneo heritage.
        
## 🌟 Core Features

-   **High-End Responsive Design**: Fully responsive, mobile-first design leveraging `TailwindCSS` with custom glassmorphism components, hover interactions, and vibrant modern typography that adapts seamlessly to phones, tablets, and desktops.
-   **Dynamic Media Gallery**: 
    -   **Masonry Image Grid:** Displays the official 100+ photo collection of "Runway Moments" utilizing a beautiful staggered layout. 
    -   **Lightbox Integration:** Users can click on any gallery image to trigger a smooth full-screen, high-resolution modal zoom (powered by `framer-motion`), providing a detailed view of the couture.
-   **Intelligent Social Media Embeds**: A sophisticated 120-item Pre-Event Articles timeline.
    -   Automatically fetches and securely embeds viewable Facebook Posts, Instagram Reels, and YouTube shorts without breaking layout grids.
    -   Includes custom fallback gradients for platforms locking Open Graph data—preventing broken layouts and maintaining grid aesthetics.
-   **Client-Side Pagination**: Cleanly handles over 100 Media articles and photo blocks without suffering performance overhead, leveraging a custom, reusable React Pagination component across the Media Page.
-   **Sleek Navigation Framework**: 
    -   A floating glassmorphism sticky Navbar that transforms on-scroll for a cleaner viewport.
    -   An interactive Hamburger mobile menu drawer that reveals intuitive routing paths across all subpages (`/about`, `/designers`, `/media`, `/contact`).
-   **Animation & Micro-Interactions**: Next-level UX integrated with `framer-motion` to handle section-by-section fade-ins, cursor-tracking 3D tilts on Designer Cards, and elegant active states for buttons and CTAs.
-   **Search Engine Optimization (SEO)**:
    -   Implemented a full meta-tag architecture using the Next.js Metadata API.
    -   Tailored OpenGraph and Twitter Cards for premium social media sharing.
    -   Semantic keyword injection and robot indexing optimization for high performance on search engines.

## 🛠️ Technology Stack

-   **Framework:** [Next.js (App Router)](https://nextjs.org/)
-   **Library:** React 19
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **Icons:** [Lucide-React](https://lucide.dev/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 🚀 Getting Started

First, ensure you have Node.js installed on your machine. Then, run the development server:

```bash
# install dependencies
npm install

# run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live site.

## 📁 Project Structure

-   `src/app/page.js`: The Landing Page (Hero, Event Highlights, The Legacy, Partners).
-   `src/app/about`: Brand mission statement and conceptual imagery.
-   `src/app/designers`: 3D interactive talent application and showcase cards.
-   `src/app/media`: Paginated Articles Timeline, Social Embeds, and the interactive Masonry Gallery.
-   `src/app/contact`: Inquiry funnel and contact forms.
-   `src/components`: Reusable frontend elements including `Navbar`, `Footer`, and `Pagination`.

*Developed for OneMediaGroup. © 2026 Borneo Fashion Week. All Rights Reserved.*
