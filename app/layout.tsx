import type { Metadata } from "next";
// import localFont from "next/font/local";
import { inter } from '@/app/ui/fonts/fonts';
import "./ui/globals.css";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// const geistSans = localFont({
//   src: "./ui/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./ui/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "GameTrees",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${inter.className} subpixel-antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
