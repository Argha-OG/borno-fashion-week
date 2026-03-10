export const metadata = {
  title: "Media Gallery & Coverage | Borneo Fashion Week",
  description:
    "Explore behind-the-scenes highlights, press coverage, designer features, and exclusive media from Borneo Fashion Week events. Browse our cinematic archives and gallery collections.",
  keywords:
    "Borneo Fashion Week media, fashion week gallery, designer interviews, fashion press coverage, BFW videos, ASEAN fashion highlights",
  authors: [{ name: "OneMediaGroup" }],
  creator: "OneMediaGroup",
  openGraph: {
    title: "Media Gallery | Borneo Fashion Week",
    description:
      "Explore highlights, press coverage, and designer features from Borneo Fashion Week.",
    url: "https://borneofashionweek.com/media",
    type: "website",
    images: [
      {
        url: "/fwb.png",
        width: 1200,
        height: 630,
        alt: "Borneo Fashion Week Media Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Gallery | Borneo Fashion Week",
    description: "Explore highlights, press coverage, and designer features.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://borneofashionweek.com/media",
  },
};

export default function MediaLayout({ children }) {
  return children;
}
