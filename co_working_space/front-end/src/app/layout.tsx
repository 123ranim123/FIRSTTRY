"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/profiluser";

  return (
    <html lang="en">
    <body className={inter.className}>
      <div className="flex flex-col min-h-screen bg-slate-100   ">
        {showNavbar && <Navbar />}

        <main className=" flex flex-col bg-slate-100 justify-center items-center">
          {children}
          <Footer />

        </main>

      </div>
    </body>
  </html>
  );
}
