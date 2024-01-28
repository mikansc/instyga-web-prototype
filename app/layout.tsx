import type { Metadata } from "next";
// import { Inter as FontInter } from "next/font/google";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import React from "react";

import { cn } from "@/lib/utils";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../assets/styles/globals.scss";

const fontSans = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instyga",
  description: "Prototype for Instyga",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR" style={{ height: "100%" }}>
      <UserProvider>
        <body
          className={cn("h-100 bg-black", fontSans.className)}
          style={{
            height: "100%",
          }}
        >
          {children}
        </body>
      </UserProvider>

      <Script
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/fe74e9ac-8dac-4d7f-b51f-917437dbce26-loader.js"
      />
    </html>
  );
}
