import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Mycard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
    <body>
    <div className="min-h-screen bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#2a1a12] text-white">
      <div className="flex min-h-screen">
        
        {/* Left - MyCard */}
        <div>
          <Mycard />
        </div>

        {/* Center - Content */}
        <div className="flex-1 p-10">
          {children}
        </div>

        {/* Right - SideMenu */}
        <div className="w-[80px] flex items-center justify-center">
          <SideMenu />
        </div>

      </div>
    </div>
    </body>
    </html>
  );
}