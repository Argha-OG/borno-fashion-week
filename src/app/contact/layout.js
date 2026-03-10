export const metadata = {
  title: "Contact Us | Borneo Fashion Week",
  description:
    "Get in touch with Borneo Fashion Week for designer inquiries, sponsorships, media partnerships, and event information. Connect with our management team directly.",
  keywords:
    "contact Borneo Fashion Week, fashion event inquiries, designer application, sponsorship inquiries, BFW contact",
  authors: [{ name: "OneMediaGroup" }],
  creator: "OneMediaGroup",
  openGraph: {
    title: "Contact Borneo Fashion Week",
    description:
      "Get in touch with Borneo Fashion Week for designer inquiries, sponsorships, and partnerships.",
    url: "https://borneofashionweek.com/contact",
    type: "website",
    images: [
      {
        url: "/fwb.png",
        width: 1200,
        height: 630,
        alt: "Borneo Fashion Week",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Contact Borneo Fashion Week",
    description:
      "Get in touch for designer inquiries, sponsorships, and partnerships.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://borneofashionweek.com/contact",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
