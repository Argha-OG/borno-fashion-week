export const metadata = {
  title: "Featured Designers | Borneo Fashion Week",
  description:
    "Meet the visionary designers at Borneo Fashion Week. Explore emerging talent and established creative visionaries from ASEAN bringing cultural heritage to the global fashion stage.",
  keywords:
    "fashion designers, ASEAN designers, Borneo fashion designers, emerging fashion talent, designer portfolio, BFW designers",
  authors: [{ name: "OneMediaGroup" }],
  creator: "OneMediaGroup",
  openGraph: {
    title: "Featured Designers | Borneo Fashion Week",
    description:
      "Meet visionary designers from ASEAN. Emerging talent and established creatives united by innovation and craftsmanship.",
    url: "https://borneofashionweek.com/designers",
    type: "website",
    images: [
      {
        url: "/fwb.png",
        width: 1200,
        height: 630,
        alt: "Borneo Fashion Week Designers",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Featured Designers | Borneo Fashion Week",
    description: "Meet visionary designers from ASEAN.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://borneofashionweek.com/designers",
  },
};

export default function DesignersLayout({ children }) {
  return children;
}
