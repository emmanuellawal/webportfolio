import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Emmanuel Lawal | Full Stack Developer",
    template: "%s | Emmanuel Lawal",
  },
  description: "Full Stack Developer specializing in building exceptional digital experiences",
  authors: [{ name: "Emmanuel Lawal" }],
  keywords: ["Full Stack Developer", "Web Development", "Software Engineer", "React", "Node.js", "JavaScript", "TypeScript"],
  icons: {
    icon: [
      { url: "/celestial-gear.svg" }
    ],
    apple: [
      { url: "/celestial-gear.svg" }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased bg-gradient-to-b from-background to-background/80 min-h-screen flex flex-col`}>
        <MainNav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
