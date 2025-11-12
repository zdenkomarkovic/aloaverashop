import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { CartProvider } from "@/contexts/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aloe Vera Shop - Prirodni proizvodi za zdravlje i lepotu",
    template: "%s | Aloe Vera Shop",
  },
  description:
    "Otkrijte snagu prirode sa našom premium kolekcijom Aloe Vera proizvoda. 100% prirodni proizvodi za vaše zdravlje, lepotu i dobrobit. Besplatna dostava širom Srbije.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "aloe vera",
    "prirodni proizvodi",
    "zdravlje",
    "lepota",
    "prirodna nega",
    "aloe vera gel",
    "suplementi",
    "kozmetika",
    "med",
    "propolis",
    "natural products",
    "wellness",
    "beauty",
    "skincare",
  ],
  authors: [{ name: "Aloe Vera Shop" }],
  creator: "Aloe Vera Shop",
  publisher: "Aloe Vera Shop",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    siteName: "Aloe Vera Shop",
    title: "Aloe Vera Shop - Prirodni proizvodi za zdravlje i lepotu",
    description:
      "Otkrijte snagu prirode sa našom premium kolekcijom Aloe Vera proizvoda.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className="antialiased text-gray-900 bg-white text-base font-sans"
      >
        <CartProvider>
          <Header />
          {children}
          <ButtonToTop />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
