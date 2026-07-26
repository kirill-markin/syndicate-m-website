import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { teamMembers } from "@/data/team-members";
import { siteConfig } from "@/data/site-config";
import { siteUrl } from "@/lib/site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Meet Kirill, Katerina, Andrey, and Alex Markin—a family working across AI engineering, operations, coaching, and visual arts in Europe.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "SYNDICATE_M — The Markin family",
    template: "%s | SYNDICATE_M",
  },
  description,
  applicationName: "SYNDICATE_M",
  authors: [{ name: "The Markin family" }],
  creator: "The Markin family",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SYNDICATE_M",
    title: "SYNDICATE_M — The Markin family",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNDICATE_M — The Markin family",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer teamData={teamMembers} siteConfig={siteConfig} />
      </body>
    </html>
  );
}
