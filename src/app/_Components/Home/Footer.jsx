import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-[2.5%]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand and Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Drivee</h3>
          <p className="text-gray-400 mb-4">
            Is Just A Drivee Ride Away. Take Control Of Your Journey Today.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
        {/* About Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Help
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Fee Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Terms And Conditions
              </Link>
            </li>
          </ul>
        </div>
        {/* City */}
        <div>
          <h4 className="text-lg font-semibold mb-4">City</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Dhaka
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Chittagong
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Sylhet
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Khulna
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Barishal
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Rajshahi
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Rongpur
              </Link>
            </li>
          </ul>
        </div>
        {/* Vehicle Types */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Vehicle Types</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Car
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:underline">
                Bike
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-gray-500">
        <p>© 2024 NSRGFX. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
