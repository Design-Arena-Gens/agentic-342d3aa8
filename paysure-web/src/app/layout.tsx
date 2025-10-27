import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainHeader } from "@/components/layout/main-header";
import { MainFooter } from "@/components/layout/main-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | PaySure",
    default: "PaySure — Trusted B2B Payments & Smart Accounting",
  },
  description:
    "PaySure unifies B2B payments, accounting automation, legal escalation, and intelligence into one secure platform.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 antialiased`}
      >
        <MainHeader />
        <main className="min-h-[calc(100vh-160px)] pb-24 pt-12">{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
