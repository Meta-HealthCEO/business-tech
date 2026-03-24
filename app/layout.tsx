import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Tech | Enterprise Technology & AI Innovation News",
  description: "Your source for enterprise technology news, AI innovation, business strategy insights, and digital transformation trends across South Africa and beyond.",
  keywords: ["business technology", "AI", "enterprise", "innovation", "South Africa", "digital transformation", "startups"],
  authors: [{ name: "Business Tech Editorial Team" }],
  openGraph: {
    title: "Business Tech | Enterprise Technology & AI Innovation News",
    description: "Your source for enterprise technology news, AI innovation, business strategy insights, and digital transformation trends.",
    url: "https://business-tech.co.za",
    siteName: "Business Tech",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Tech | Enterprise Technology & AI Innovation News",
    description: "Your source for enterprise technology news, AI innovation, business strategy insights, and digital transformation trends.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
