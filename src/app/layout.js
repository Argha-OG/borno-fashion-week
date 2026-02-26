import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Borneo Fashion Week | Digital Runway",
  description: "A leading regional fashion platform by OneMediaGroup, connecting ASEAN designers to the global market.",
  icons: {
    icon: '/bfw-logo.svg',
    apple: '/bfw-logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
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
