import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { FooterGate } from "./components/FooterGate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foundect - Halal SME Investing for Bangladesh",
  description: "Shari'ah-aligned digital platform connecting SMEs with micro-investors in a halal way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-gradient-to-b from-[#e8f2ff]/70 via-[#f7fbff]/40 to-[#e8f2ff]/70 backdrop-blur-2xl min-h-screen text-slate-900")}>
        {children}
        <FooterGate />
      </body>
    </html>
  );
}

