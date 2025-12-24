import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/share/header";
import { bricolageGrotesque } from "@/lib/fonts";
import { Footer } from "@/components/share/footer";
import { MainWrapper } from "@/components/share/main-wrapper";

export const metadata: Metadata = {
  title: "VGM Durango",
  description: "VGM Durango website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} antialiased bg-main`}>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </body>
    </html>
  );
}
