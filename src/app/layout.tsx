import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "500", "600"],
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  weight: ["600"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pietro Rhyan",
  description:
    "Pietro Rhyan is a software engineer specializing in frontend development, with a passion for creating intuitive and engaging user interfaces. With expertise in React, Next.js, and TypeScript, Pietro has a proven track record of delivering high-quality web applications. He is dedicated to continuous learning and staying up-to-date with the latest industry trends to ensure his work remains innovative and effective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${outfit.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <Providers>
            <Navbar />
            <div className="mx-4">{children}</div>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
