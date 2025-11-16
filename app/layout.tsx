import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SplashCursor from "@/components/effects/SplashCursor";
import LiquidEther from "@/components/effects/LiquidEther";
import SmoothScroll from "@/components/effects/SmoothScroll";
import FestivePopup from "@/components/cms/FestivePopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinititech Partners - Transform Your Digital Future",
  description: "Data Center Management, Custom Software Development, Smart City Solutions, CRM, ERP, POS, Web & Mobile Apps, Digital Marketing",
  keywords: "data center, MDC software, smart city, CRM, ERP, POS, web development, mobile apps, digital marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Festive Popup */}
        <FestivePopup />

        {/* Scroll Progress Line */}
        <ScrollProgress />

        {/* Custom Cursor Effects */}
        <SplashCursor />
        <LiquidEther />
        <SmoothScroll />

        {/* Content */}
        <div className="relative">
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}