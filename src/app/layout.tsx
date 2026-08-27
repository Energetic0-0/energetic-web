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

  const icons: Metadata["icons"] = {};

  if (flat['favicon_16'] || flat['favicon_32']) {
    icons.icon = [];
    if (flat['favicon_16']) icons.icon.push({ url: flat['favicon_16'], sizes: '16x16', type: 'image/png' });
    if (flat['favicon_32']) icons.icon.push({ url: flat['favicon_32'], sizes: '32x32', type: 'image/png' });
  }
  
  if (flat['favicon_32']) icons.shortcut = flat['favicon_32'];
  if (flat['favicon_180']) icons.apple = flat['favicon_180'];
  
  if (flat['favicon_192'] || flat['favicon_512']) {
    icons.other = [];
    if (flat['favicon_192']) icons.other.push({ rel: 'icon', url: flat['favicon_192'], sizes: '192x192' });
    if (flat['favicon_512']) icons.other.push({ rel: 'icon', url: flat['favicon_512'], sizes: '512x512' });
  }

  return {
    title: "Energetic | Renewable Energy Solutions",
    description:
      "Energetic makes renewable energy simple, accessible, measurable, and intelligent for homes, communities, and businesses.",
    icons,
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
