"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaCalendarAlt, FaTag, FaTimesCircle } from "react-icons/fa";
import Cookies from "universal-cookie";

export default function Dashboard() {
  const cookies = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      router.push("/login");
    }
  }, [router, cookies]);

  const handleLogout = () => {
    cookies.remove("token");
    router.push("/login");
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Drivee</h1>
          <div className="flex space-x-8">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              Hosting
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
              Account
            </Link>
          </div>
        </div>
      </header>

      {/* Dashboard Header */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold text-white">My Dashboard</h2>
          <div className="relative w-48 h-48">
            <Image
              src="/path-to-dashboard-illustration.png"
              alt="Dashboard"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="bg-white p-6 shadow rounded-lg">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/path-to-user-image.jpg"
                  alt="User"
                  width={64}
                  height={64}
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Rovan Reels</h3>
                <p className="text-sm text-gray-500">rovanreels@gmail.com</p>
              </div>
            </div>
            <nav className="space-y-4">
              <Link
                href="#"
                className="flex items-center text-gray-900 font-bold"
              >
                <svg
                  className="mr-3 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="mr-3 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5.121 17.804l-1.415-1.414a9 9 0 1112.728 0l-1.415 1.414a7 7 0 10-9.9 0z" />
                  <path d="M9 17a3 3 0 106 0H9z" />
                </svg>
                My Profile
              </Link>
              <Link
                href="#"
                className="flex items-center text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="mr-3 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                My Order
              </Link>
              <Link
                href="#"
                className="flex items-center text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="mr-3 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 11.5V7a4 4 0 118 0v4.5" />
                  <path d="M5 15.5h14M5 18.5h14" />
                </svg>
                Insurance & Policy
              </Link>
              <div
                onClick={() => handleLogout()}
                className="flex items-center text-gray-500 hover:text-gray-900"
              >
                <svg
                  className="mr-3 h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18l12-12" />
                </svg>
                Sign Out
              </div>
            </nav>
          </aside>

          {/* Stats and Orders */}
          <main className="col-span-3 space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow rounded-lg flex items-center space-x-4">
                <FaCalendarAlt className="text-2xl text-gray-500" />
                <div>
                  <h4 className="text-2xl font-bold">03</h4>
                  <p className="text-sm text-gray-500">Total Order</p>
                </div>
              </div>
              <div className="bg-white p-6 shadow rounded-lg flex items-center space-x-4">
                <FaTag className="text-2xl text-gray-500" />
                <div>
                  <h4 className="text-2xl font-bold">12</h4>
                  <p className="text-sm text-gray-500">Coupons</p>
                </div>
              </div>
              <div className="bg-white p-6 shadow rounded-lg flex items-center space-x-4">
                <FaTimesCircle className="text-2xl text-gray-500" />
                <div>
                  <h4 className="text-2xl font-bold">24</h4>
                  <p className="text-sm text-gray-500">Cancel Order</p>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-bold mb-4">My Recent Order</h3>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left text-gray-500 font-medium">
                      Booking No
                    </th>
                    <th className="text-left text-gray-500 font-medium">
                      Vehicle
                    </th>
                    <th className="text-left text-gray-500 font-medium">
                      Pick Up Location
                    </th>
                    <th className="text-left text-gray-500 font-medium">
                      Date
                    </th>
                    <th className="text-left text-gray-500 font-medium">
                      Return Date
                    </th>
                    <th className="text-left text-gray-500 font-medium">
                      Payment
                    </th>
                    <th className="text-left text-gray-500 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-2 text-gray-700">#02345</td>
                    <td className="py-2 text-gray-700">Jeep Renegade</td>
                    <td className="py-2 text-gray-700">
                      Amborkhana Point, Sylhet
                    </td>
                    <td className="py-2 text-gray-700">22/1/2019</td>
                    <td className="py-2 text-gray-700">24/1/2019</td>
                    <td className="py-2 text-gray-700">$500</td>
                    <td className="py-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">#02346</td>
                    <td className="py-2 text-gray-700">R15 Bike</td>
                    <td className="py-2 text-gray-700">
                      Housing Estate, Sylhet
                    </td>
                    <td className="py-2 text-gray-700">29/4/2019</td>
                    <td className="py-2 text-gray-700">6/5/2019</td>
                    <td className="py-2 text-gray-700">$500</td>
                    <td className="py-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-red-800 bg-red-200 rounded-full">
                        Cancelled
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">#02347</td>
                    <td className="py-2 text-gray-700">Jeep Renegade</td>
                    <td className="py-2 text-gray-700">
                      Shubid Bazar Point, Sylhet
                    </td>
                    <td className="py-2 text-gray-700">12/6/2019</td>
                    <td className="py-2 text-gray-700">12/6/2019</td>
                    <td className="py-2 text-gray-700">$300</td>
                    <td className="py-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-700">#02348</td>
                    <td className="py-2 text-gray-700">Jeep</td>
                    <td className="py-2 text-gray-700">
                      Lama Bazar Point, Sylhet
                    </td>
                    <td className="py-2 text-gray-700">22/7/2019</td>
                    <td className="py-2 text-gray-700">24/7/2019</td>
                    <td className="py-2 text-gray-700">$900</td>
                    <td className="py-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                        Booking
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Drivee</h3>
              <p>
                Is Just A Drivee Ride Away. Take Control Of Your Journey Today
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-white hover:text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.833.656-2.828.775a4.918 4.918 0 0 0 2.165-2.724 9.842 9.842 0 0 1-3.127 1.195 4.904 4.904 0 0 0-8.36 4.471 13.918 13.918 0 0 1-10.11-5.137 4.903 4.903 0 0 0 1.518 6.544 4.886 4.886 0 0 1-2.224-.615c-.053 2.281 1.581 4.415 3.905 4.886a4.936 4.936 0 0 1-2.212.084c.623 1.947 2.433 3.366 4.576 3.404a9.88 9.88 0 0 1-6.105 2.105c-.395 0-.787-.023-1.175-.067a13.921 13.921 0 0 0 7.548 2.211c9.056 0 14.002-7.512 14.002-14.002 0-.213-.004-.426-.015-.637A10.012 10.012 0 0 0 24 4.557z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.833.656-2.828.775a4.918 4.918 0 0 0 2.165-2.724 9.842 9.842 0 0 1-3.127 1.195 4.904 4.904 0 0 0-8.36 4.471 13.918 13.918 0 0 1-10.11-5.137 4.903 4.903 0 0 0 1.518 6.544 4.886 4.886 0 0 1-2.224-.615c-.053 2.281 1.581 4.415 3.905 4.886a4.936 4.936 0 0 1-2.212.084c.623 1.947 2.433 3.366 4.576 3.404a9.88 9.88 0 0 1-6.105 2.105c-.395 0-.787-.023-1.175-.067a13.921 13.921 0 0 0 7.548 2.211c9.056 0 14.002-7.512 14.002-14.002 0-.213-.004-.426-.015-.637A10.012 10.012 0 0 0 24 4.557z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.833.656-2.828.775a4.918 4.918 0 0 0 2.165-2.724 9.842 9.842 0 0 1-3.127 1.195 4.904 4.904 0 0 0-8.36 4.471 13.918 13.918 0 0 1-10.11-5.137 4.903 4.903 0 0 0 1.518 6.544 4.886 4.886 0 0 1-2.224-.615c-.053 2.281 1.581 4.415 3.905 4.886a4.936 4.936 0 0 1-2.212.084c.623 1.947 2.433 3.366 4.576 3.404a9.88 9.88 0 0 1-6.105 2.105c-.395 0-.787-.023-1.175-.067a13.921 13.921 0 0 0 7.548 2.211c9.056 0 14.002-7.512 14.002-14.002 0-.213-.004-.426-.015-.637A10.012 10.012 0 0 0 24 4.557z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">About Company</h3>
              <ul>
                <li>
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Fee Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">City</h3>
              <ul>
                <li>
                  <Link href="#" className="hover:underline">
                    Dhaka
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Chittagong
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sylhet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Khulna
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Barishal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Rajshahi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Rangpur
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
