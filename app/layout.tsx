import type { Metadata } from "next";
import "./globals.css";
import { bricolageGrotesque } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";

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
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
