import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSRV — Clinician-Directed Optimization",
  description:
    "Clinician-directed optimization protocols engineered for high-performing professionals. US 503A compounded, tested, verified.",
  icons: {
    icon: "/logos/favicon.svg",
    shortcut: "/logos/favicon.ico",
  },
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
