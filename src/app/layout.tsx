import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DLC - Elden - Ring",
  description: "Generated by ludo le dingo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={twMerge(inter.className,'h-auto bg-chadground bg-center bg-cover')}>{children}</body>
    </html>
  );
}
