import type { Metadata } from "next";
// import { Inter as FontInter } from "next/font/google";
import { Montserrat } from "next/font/google";
import React from "react";

import "@/assets/styles/globals.scss";
import { Container } from "@/components/atoms/Container";
import { Appbar } from "@/components/molecules/Appbar";
import { cn } from "@/lib/utils";

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
        <Container>
          <Appbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
