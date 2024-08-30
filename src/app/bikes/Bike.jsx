"use client"; // This directive tells Next.js that this is a client component

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "../_Components/Layout/Header";
import Footer from "../_Components/Layout/Footer";

export default function BikeProductsClient({ bikes }) {
  const [currentPage, setCurrentPage] = useState(1);
  const bikesPerPage = 20;
  const router = useRouter();

  // Pagination logic
  const indexOfLastBike = currentPage * bikesPerPage;
  const indexOfFirstBike = indexOfLastBike - bikesPerPage;
  const currentBikes = bikes.slice(indexOfFirstBike, indexOfLastBike);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleBookNow = (bike) => {
    // Store bike data in local storage
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedBike", JSON.stringify(bike));
    }
    router.push(`/bikes/${bike.id}`);
  };

  console.log(bikes);

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white text-center">
          Rent A Bike <br /> Rent Your Freedom
        </h1>
      </div>

      {/* Filters Section */}
      <div className="py-8 px-4 bg-gray-100">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search by name..."
            className="border p-2 rounded w-full md:w-1/3"
          />
          <select className="border p-2 rounded w-full md:w-1/3">
            <option>Sort by Price</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
          <select className="border p-2 rounded w-full md:w-1/3">
            <option>Filter by Brand</option>
            <option>Kawasaki</option>
            <option>Yamaha</option>
            <option>Honda</option>
          </select>
        </div>
      </div>

      {/* Bike Cards Section */}
      <div className="max-w-screen-xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBikes.map((bike, index) => (
          <div
            key={index}
            className="border rounded shadow-md p-4 flex flex-col"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}`}
              alt={`${bike.make} ${bike.model}`}
              width={400}
              height={300}
              className="h-48 w-full object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">
              {bike.make} {bike.model}
            </h2>
            <p className="text-gray-600">Year: {bike.year}</p>
            <p className="text-gray-600">Type: {bike.type}</p>
            <p className="text-gray-600">Power: {bike.power}</p>
            <p className="text-gray-600">Engine: {bike.engine}</p>
            <div className="flex justify-between items-center mt-auto pt-4">
              <span className="text-lg font-bold">{`₹${bike.price}/day`}</span>
              <button
                onClick={() => handleBookNow(bike)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="max-w-screen-xl mx-auto py-8 flex justify-center space-x-4">
        {[...Array(Math.ceil(bikes.length / bikesPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === number + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {number + 1}
            </button>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}
