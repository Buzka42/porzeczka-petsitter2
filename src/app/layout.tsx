import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Porzeczka Petsitter | Premium Pet Care",
  description: "Exclusive and dedicated pet care services for dogs, cats, exotics, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${lora.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen relative flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
