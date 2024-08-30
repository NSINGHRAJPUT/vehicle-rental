import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-black text-white px-[2.5%]">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-16 px-6 md:px-12">
        {/* Text Section */}
        <div className="z-10 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Endless Driving With Drivee
          </h1>
          <p className="text-lg mb-6">
            To contribute to positive change and achieve our sustainability
            goals with many extraordinary
          </p>
          <div className="flex space-x-4">
            <Link
              href="/cars"
              className="bg-white text-black py-2 px-6 rounded-md font-semibold"
            >
              Rent Car
            </Link>
            <Link
              href="/bikes"
              className="bg-transparent border-2 border-white py-2 px-6 rounded-md font-semibold"
            >
              Rent Bike
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute inset-0 flex items-center justify-end opacity-50 md:opacity-100">
          <div className="relative w-full max-w-2xl h-72 md:h-96">
            <Image
              src="/car-image.png" // Replace with your actual car image path
              alt="Car"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-full max-w-xs h-48 md:h-64">
            <Image
              src="/bike-image.png" // Replace with your actual bike image path
              alt="Bike"
              layout="fill"
              objectFit="contain"
              className="absolute top-0 right-0"
            />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <label className="block text-sm font-semibold mb-2">Location</label>
            <select className="w-full p-3 border border-gray-300 rounded-md">
              <option>Select Location</option>
            </select>
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <label className="block text-sm font-semibold mb-2">Pick-UP</label>
            <select className="w-full p-3 border border-gray-300 rounded-md">
              <option>Select Location</option>
            </select>
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <label className="block text-sm font-semibold mb-2">Date</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="10/9/2020 - 14/9/2023"
            />
          </div>
          <div className="flex-none">
            <button className="w-full bg-black text-white py-3 px-6 rounded-md mt-6 md:mt-0">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
