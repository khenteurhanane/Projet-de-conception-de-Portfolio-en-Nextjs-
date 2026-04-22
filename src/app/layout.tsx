import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projet de conception de Portfolio en Nextjs",
  description: "Portfolio professionnel de Hanane Khenteur, Concepteuse Web spécialisée en Next.js.",
};

import AuthGuard from "@/components/AuthGuard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <Providers>
          <AuthGuard>
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </AuthGuard>
        </Providers>
      </body>
    </html>
  );
}
