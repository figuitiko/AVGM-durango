import type { Metadata } from "next";
import "./globals.css";
import { bricolageGrotesque } from "@/lib/fonts";

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
      <body className={`${bricolageGrotesque.className} antialiased bg-main`}>
        {children}
      </body>
    </html>
  );
}
