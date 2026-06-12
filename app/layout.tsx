import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/app/components/PageTransition";
import SiteFooter from "@/app/components/SiteFooter";

export const metadata: Metadata = {
  title: "Emily & Daniel — September 5, 2026",
  description: "Join us to celebrate the wedding of Emily and Daniel on September 5, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
