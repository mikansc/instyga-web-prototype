import type { Metadata } from "next";
// import { Inter as FontInter } from "next/font/google";
import { Montserrat } from "next/font/google";
import React from "react";

import "@/assets/styles/globals.scss";
import { Container } from "@/components/atoms/Container";
import { Appbar } from "@/components/molecules/Appbar";
import { cn } from "@/lib/utils";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

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
  const data = await getSession();

  if (!data?.user) {
    redirect("/");
  }
  return (
    <html lang="pt-BR" style={{ height: "100%" }}>
      <body
        className={cn("h-100 bg-white", fontSans.className)}
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
