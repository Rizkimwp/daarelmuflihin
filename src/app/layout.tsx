import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daar El Muflihin",
  description: "Membentuk generasi Qur'an Berakhlak Mulia yang menghafal Al-Qur'an', Memahami hadist, dan Meneladani Nabi Muhammad SAW, Menguasai ilmu Fiqh serta unggul dalam akademik untuk kehidupan Dunia Akhirat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
