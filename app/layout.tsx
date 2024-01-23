import type { Metadata } from "next";
import { Inter as FontInter } from "next/font/google";
import Script from "next/script";
import React from "react";

import { cn } from "@/lib/utils";
import "../assets/styles/globals.scss";

const fontSans = FontInter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Instyga",
  description: "Prototype for Instyga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" style={{ height: "100%" }}>
      <body className={cn("h-100", fontSans.variable)}>{children}</body>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
      <Script
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/fe74e9ac-8dac-4d7f-b51f-917437dbce26-loader.js"
      />
    </html>
  );
}
