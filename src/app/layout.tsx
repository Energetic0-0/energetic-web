import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSiteImages } from "@/lib/images";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { flat } = await getSiteImages();

  const icon16  = flat['favicon_16']  || '/img/energetic.png';
  const icon32  = flat['favicon_32']  || '/img/energetic.png';
  const apple   = flat['favicon_180'] || '/img/energetic.png';
  const pwa192  = flat['favicon_192'] || '/img/energetic.png';
  const pwa512  = flat['favicon_512'] || '/img/energetic.png';

  return {
    title: "Energetic | Renewable Energy Solutions",
    description:
      "Energetic makes renewable energy simple, accessible, measurable, and intelligent for homes, communities, and businesses.",
    icons: {
      icon: [
        { url: icon16, sizes: '16x16', type: 'image/png' },
        { url: icon32, sizes: '32x32', type: 'image/png' },
      ],
      shortcut: icon32,
      apple:    apple,
      other: [
        { rel: 'icon', url: pwa192, sizes: '192x192' },
        { rel: 'icon', url: pwa512, sizes: '512x512' },
      ],
    },
    manifest: "/img/favicon/site.webmanifest",
  };
}

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/providers/language-provider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { flat } = await getSiteImages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header
              logoLight={flat['logo_light']}
              logoDark={flat['logo_dark']}
            />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
