import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ubaid Quazi | CS (Data Science) Student & Full-Stack Developer",
  description:
    "Portfolio of Ubaid Quazi — a Computer Science – Data Science Engineering student and developer building modern web applications, AI-powered systems, and computer vision projects.",
  keywords: [
    "Ubaid Quazi",
    "Computer Science Data Science",
    "Data Science Engineering Student",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Computer Vision",
    "Next.js",
    "TypeScript",
    "React",
    "Python",
    "WebGPU",
    "ONNX",
    "Supabase",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Ubaid Quazi", url: "https://github.com/ubaidq01" }],
  creator: "Ubaid Quazi",
  openGraph: {
    title: "Ubaid Quazi | CS (Data Science) Student & Full-Stack Developer",
    description:
      "Portfolio of Ubaid Quazi — a Computer Science – Data Science Engineering student and developer building modern web applications, AI-powered systems, and computer vision projects.",
    url: "https://github.com/ubaidq01",
    siteName: "Ubaid Quazi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubaid Quazi | CS (Data Science) Student & Full-Stack Developer",
    description:
      "Portfolio of Ubaid Quazi — a Computer Science – Data Science Engineering student and developer building modern web applications, AI-powered systems, and computer vision projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#070707] text-[#F5F5F5] antialiased">
        {children}
      </body>
    </html>
  );
}
