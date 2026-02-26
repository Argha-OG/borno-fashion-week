import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: {
    default: "Borneo Fashion Week | Digital Runway",
    template: "%s | Borneo Fashion Week"
  },
  description: "A leading regional fashion platform by OneMediaGroup, connecting ASEAN designers to the global market. Celebrating the heritage and innovation of Borneo fashion.",
  keywords: ["Borneo Fashion Week", "BFW", "ASEAN Fashion", "Digital Runway", "Malaysian Designers", "Cultural Heritage", "Couture", "Fashion Event"],
  authors: [{ name: "OneMediaGroup" }],
  creator: "OneMediaGroup",
  publisher: "OneMediaGroup",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/bfw-logo.svg',
    apple: '/bfw-logo.svg',
  },
  openGraph: {
    title: "Borneo Fashion Week | Digital Runway",
    description: "Connecting ASEAN designers to the global market. A leading regional fashion platform.",
    url: 'https://borneofashionweek.com', // Placeholder URL
    siteName: 'Borneo Fashion Week',
    images: [
      {
        url: '/fwb.png',
        width: 1200,
        height: 630,
        alt: 'Borneo Fashion Week Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Borneo Fashion Week | Digital Runway",
    description: "Connecting ASEAN designers to the global market.",
    images: ['/fwb.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased bg-black text-gold">
        <Navbar />
        <main className="min-vh-100 pt-20">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
