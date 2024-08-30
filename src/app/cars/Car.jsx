"use client"; // This directive tells Next.js that this is a client component

import { useState } from "react";
import Image from "next/image";

export default function CarProductsClient({ cars }) {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 20;

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white text-center">
          Rent A Car <br /> Rent Your Freedom
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
            <option>Toyota</option>
            <option>BMW</option>
            <option>Mercedes</option>
          </select>
        </div>
      </div>

      {/* Car Cards Section */}
      <div className="max-w-screen-xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCars.map((car, index) => (
          <div
            key={index}
            className="border rounded shadow-md p-4 flex flex-col"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}`}
              alt={`${car.make} ${car.model}`}
              width={400}
              height={300}
              className="h-48 w-full object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">
              {car.make} {car.model}
            </h2>
            <p className="text-gray-600">Year: {car.year}</p>
            <p className="text-gray-600">Type: {car.type}</p>
            <p className="text-gray-600">Power: {car.power}</p>
            <p className="text-gray-600">Engine: {car.engine}</p>
            <div className="flex justify-between items-center mt-auto pt-4">
              <span className="text-lg font-bold">{`$${car.price}/day`}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="max-w-screen-xl mx-auto py-8 flex justify-center space-x-4">
        {[...Array(Math.ceil(cars.length / carsPerPage)).keys()].map(
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
    </div>
  );
}
