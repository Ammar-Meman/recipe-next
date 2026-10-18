import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Everyday Recipes",
  description: "A simple recipe app built with Next.js App Router and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
