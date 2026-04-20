import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
