import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "The platform for a seamless online education experience",
  // description: "",
  icons: "klosanow-logo.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative w-full flex flex-col justify-center max-w-[2024px] overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
