"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    // Check for token in cookies
    const token = cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear token cookie and redirect to home
    cookies.remove("token");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <header className="bg-black z-50 text-white py-4 px-[2.5%] relative">
      <Toaster />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span>Drivee</span>
          </Link>
        </div>

        {/* Menu Button for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-white"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full lg:static lg:block lg:w-auto bg-black lg:bg-transparent z-20 lg:flex lg:items-center`}
        >
          {/* Mobile Links */}
          <div className="lg:hidden flex flex-col items-center py-4">
            <Link href="/bikes">
              <span
                className="block py-2 px-4 text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Bikes
              </span>
            </Link>
            <Link href="/cars">
              <span
                className="block py-2 px-4 text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Cars
              </span>
            </Link>
            <Link href="/contact">
              <span
                className="block py-2 px-4 text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </span>
            </Link>
            {isLoggedIn ? (
              <span
                className="block py-2 px-4 text-white hover:text-gray-300 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </span>
            ) : (
              <>
                <Link href="/login">
                  <span
                    className="block py-2 px-4 text-white hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </span>
                </Link>
                <Link href="/signup">
                  <span
                    className="block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </span>
                </Link>
              </>
            )}
          </div>

          {/* Links for Larger Screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link href="/bikes">
              <span className="block py-2 px-4 text-white hover:text-gray-300">
                Bikes
              </span>
            </Link>
            <Link href="/cars">
              <span className="block py-2 px-4 text-white hover:text-gray-300">
                Cars
              </span>
            </Link>
            <Link href="/contact">
              <span className="block py-2 px-4 text-white hover:text-gray-300">
                Contact
              </span>
            </Link>
            {isLoggedIn ? (
              <span
                className="block py-2 px-4 text-white hover:text-gray-300 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </span>
            ) : (
              <>
                <Link href="/login">
                  <span className="block py-2 px-4 text-white hover:text-gray-300">
                    Sign In
                  </span>
                </Link>
                <Link href="/signup">
                  <span className="block py-2 px-4 bg-white text-black rounded-md hover:bg-gray-200">
                    Sign Up
                  </span>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
