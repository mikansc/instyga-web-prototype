import type { Metadata } from "next";
// import { Inter as FontInter } from "next/font/google";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import React from "react";

import { cn } from "@/lib/utils";
import "../assets/styles/globals.scss";

const fontSans = Montserrat({
  subsets: ["latin"],
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
      <body
        className={cn("h-100", fontSans.className)}
        style={{
          height: "100%",
        }}
      >
        {children}
      </body>
      <Script
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/fe74e9ac-8dac-4d7f-b51f-917437dbce26-loader.js"
      />
    </html>
  );
}
