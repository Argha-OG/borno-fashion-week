export const metadata = {
  title: "About Us | Borneo Fashion Week",
  description:
    "Discover the legacy of Borneo Fashion Week - connecting ASEAN designers to the global stage since its inception. Learn about our mission, vision, and the cultural heritage we celebrate.",
  keywords:
    "about Borneo Fashion Week, fashion event Malaysia, ASEAN fashion platform, BFW mission, OneMediaGroup, fashion week history",
  authors: [{ name: "OneMediaGroup" }],
  creator: "OneMediaGroup",
  openGraph: {
    title: "About Borneo Fashion Week",
    description:
      "Connecting ASEAN designers to the world. Discover our legacy and mission.",
    url: "https://borneofashionweek.com/about",
    type: "website",
    images: [
      {
        url: "/fwb.png",
        width: 1200,
        height: 630,
        alt: "Borneo Fashion Week About",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "About Borneo Fashion Week",
    description: "Connecting ASEAN designers to the world.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://borneofashionweek.com/about",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
