import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nobody Knows What — Questionable Ideas, Shipped",
  description:
    "A collection of random experiments, unfinished ideas, and tiny disasters that somehow work.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
