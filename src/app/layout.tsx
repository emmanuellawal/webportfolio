import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/Footer";
import { PersonJsonLd, WebSiteJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://emmanuellawal.dev'),
  title: {
    default: "Emmanuel Lawal | Full Stack Developer",
    template: "%s | Emmanuel Lawal",
  },
  description: "Full Stack Developer specializing in building exceptional digital experiences with modern technologies. Expert in React, Next.js, Node.js, and AI integration. NJIT Information Systems student with a focus on scalable, user-centric solutions.",
  authors: [{ name: "Emmanuel Lawal", url: "https://emmanuellawal.dev" }],
  keywords: ["Full Stack Developer", "Web Development", "Software Engineer", "React Developer", "Next.js Developer", "Node.js", "JavaScript", "TypeScript", "AI Integration", "Frontend Developer", "Backend Developer", "NJIT", "New Jersey Developer"],
  creator: "Emmanuel Lawal",
  publisher: "Emmanuel Lawal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emmanuellawal.dev",
    siteName: "Emmanuel Lawal Portfolio",
    title: "Emmanuel Lawal | Full Stack Developer",
    description: "Full Stack Developer specializing in building exceptional digital experiences with modern technologies.",
    images: [
      {
        url: "/celestial-gear.svg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Lawal - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Lawal | Full Stack Developer",
    description: "Full Stack Developer specializing in building exceptional digital experiences with modern technologies.",
    images: ["/celestial-gear.svg"],
    creator: "@emmanuellawal",
  },
  alternates: {
    canonical: "https://emmanuellawal.dev",
  },
  icons: {
    icon: [
      { url: "/celestial-gear.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/celestial-gear.svg", type: "image/svg+xml" }
    ]
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonJsonLd />
        <WebSiteJsonLd />
        <BreadcrumbJsonLd />
      </head>
      <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased bg-gradient-to-b from-background to-background/80 min-h-screen flex flex-col`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-md">
          Skip to main content
        </a>
        <MainNav />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
