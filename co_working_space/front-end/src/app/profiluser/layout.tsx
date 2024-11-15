// src/app/profiluser/layout.tsx

import { Inter } from "next/font/google";
import "../globals.css";
import NavbarProfile from "@/components/profil/NavbarProfile";

const inter = Inter({ subsets: ["latin"] });

export default function UserProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-100">
      <div className="w-full">
        <NavbarProfile />
      </div>
      <main className="flex-grow flex flex-col justify-center items-center w-full">
        {children}
      </main>
    </div>
  );
}
