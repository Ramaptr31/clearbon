import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// @ts-ignore 
import Header from "../components/Header";
// @ts-ignore 
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Clearbon | Carbon Trading Information",
  description: "Information platform for carbon trading, educational content, and climate news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
