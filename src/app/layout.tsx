import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Players Men's Hairstylists",
  description: "Players Baldivis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
