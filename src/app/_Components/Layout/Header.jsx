"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Toaster } from "react-hot-toast";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-[2.5%]">
      <Toaster />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span>Drivee</span>
          </Link>
        </div>

        {/* Menu Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-1 left-0 w-full lg:relative lg:w-auto lg:flex lg:items-center lg:space-x-8 bg-black lg:bg-transparent z-20`}
        >
          <Link href="/bikes">
            <span className="block py-2 px-4 lg:px-0 text-white hover:text-gray-300">
              Bikes
            </span>
          </Link>
          <Link href="/cars">
            <span className="block py-2 px-4 lg:px-0 text-white hover:text-gray-300">
              Cars
            </span>
          </Link>
          <Link href="/contact">
            <span className="block py-2 px-4 lg:px-0 text-white hover:text-gray-300">
              Contact
            </span>
          </Link>
          <Link href="/login">
            <span className="block py-2 px-4 lg:px-0 text-white hover:text-gray-300">
              Sign In
            </span>
          </Link>
          <Link href="/signup">
            <span className="block py-2 px-4 lg:px-0 bg-white text-black rounded-md lg:rounded-lg  hover:bg-gray-200">
              Sign Up
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
