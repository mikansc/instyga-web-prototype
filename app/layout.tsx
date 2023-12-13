import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import Script from "next/script";

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
      <body className="h-100">
        <Navbar />
        {children}
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
        <Script
          strategy="afterInteractive"
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/fe74e9ac-8dac-4d7f-b51f-917437dbce26-loader.js"
        />
      </body>
    </html>
  );
}
