import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aditya Garg",
  description: "I build things that run fast. On courts and in production.",
  openGraph: {
    title: "Aditya Garg",
    description: "I build things that run fast. On courts and in production.",
    url: "https://adityagarg.vercel.app",
    siteName: "Aditya Garg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
