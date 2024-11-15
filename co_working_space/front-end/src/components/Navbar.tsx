"use client";

import Link from "next/link";
import { Handshake, User, MoreVertical } from "lucide-react";
import LanguageMenu from "./LanguageMenu";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import SignInDialog from "./form/SignInDialog";
import SignUpDialog from "./form/SignUpDialog";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openSignInDialog = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  };

  const openSignUpDialog = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  };

  return (
    <>
      <div className="navbar static top-0 left-0 right-0 bg-base-100 bg-opacity-5 shadow-lg backdrop-filter backdrop-blur-lg z-50">
        <div className="flex">
          <Link href="/" aria-label="Home">
            <Handshake className="w-6 h-6 mx-2" />
          </Link>
        </div>

        <div className="flex-1 flex justify-center items-center space-x-4">
          <Link href="/" className="btn btn-ghost text-black">
            About
          </Link>

          <Link href="/contact_us" className="btn btn-ghost text-black">
            Contact
          </Link>

          <div className="relative group">
            <Link href="/" className="btn btn-ghost text-black">
              Espace
            </Link>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="p-2">
                <li>
                  <Link
                    href="/salle_reunion"
                    className="block px-4 py-2  hover:text-chic-pink rounded transition-colors duration-300"
                  >
                    Salle de réunion
                  </Link>
                </li>

                <li>
                  <Link
                    href="/bureaux_prive"
                    className="block px-4 py-2 hover:text-chic-pink rounded"
                  >
                    Bureau privé
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bureaux_partager"
                    className="block px-4 py-2 hover:text-chic-pink rounded"
                  >
                    Bureau partagé
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <Link href="/services" className="btn btn-ghost text-black">
              Service
            </Link>
            <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="p-2">
                <li>
                  <Link
                    href="/services/option1"
                    className="block px-4 py-2 hover:text-chic-pink rounded"
                  >
                    Domiciliation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap--1">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModeToggle />
          </ThemeProvider>
          <LanguageMenu />

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              aria-label="User menu"
            >
              <User className="w-6 h-6 text-black" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a
                  onClick={() => {
                    openSignUpDialog();
                  }}
                  className="cursor-pointer"
                >
                  Sign Up{" "}
                </a>{" "}
              </li>
              <li>
                <a onClick={openSignInDialog} className="cursor-pointer">
                  Login
                </a>{" "}
              </li>
            </ul>
          </div>

         
        </div>
      </div>

      {/* Dialogs */}
      {isSignInOpen && (
        <SignInDialog isOpen={isSignInOpen} onOpenChange={setIsSignInOpen} />
      )}
      {isSignUpOpen && (
        <SignUpDialog isOpen={isSignUpOpen} onOpenChange={setIsSignUpOpen} />
      )}
    </>
  );
};

export default Navbar;
