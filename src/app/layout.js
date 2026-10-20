import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/shaders/threeui.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kage — Where stillness reveals the unseen",
  description: "The complete authored Kage temple experience, preserved as an interactive full-page document with its original navigation, scroll scenes, and local Three.js world.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
