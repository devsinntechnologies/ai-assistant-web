import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "../components/layout/Logo";
import Header from "../components/layout/Header";
import FooterBottom from "../components/layout/footer/FooterBottom";
import FooterTop from "../components/layout/footer/FooterTop";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ai-Assistant",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <Header/>
       {children}
       <FooterTop/>
       <FooterBottom/>
      </body>
    </html>
  );
}
