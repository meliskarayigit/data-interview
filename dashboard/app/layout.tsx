import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Papcorns — Interview dashboard",
  description: "Starter dashboard for the technical assessment (task 7).",
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
