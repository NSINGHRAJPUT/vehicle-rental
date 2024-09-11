"use client"; // This directive tells Next.js that this is a client component

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CarProductsClient({ cars }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // Sort by price: "low-to-high" or "high-to-low"
  const [selectedBrand, setSelectedBrand] = useState(""); // Filter by brand
  const [filteredCars, setFilteredCars] = useState(cars); // List of filtered and sorted cars
  const carsPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    let updatedCars = [...cars];

    // Filtering logic
    if (searchTerm) {
      updatedCars = updatedCars.filter((car) =>
        `${car.make} ${car.model}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBrand) {
      updatedCars = updatedCars.filter((car) => car.make === selectedBrand);
    }

    // Sorting logic
    if (sortOrder === "low-to-high") {
      updatedCars.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      updatedCars.sort((a, b) => b.price - a.price);
    }

    setFilteredCars(updatedCars);
  }, [searchTerm, sortOrder, selectedBrand, cars]);

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars?.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleViewDetails = (car) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedCar", JSON.stringify(car));
    }
    router.push(`/cars/${car.id}`);
  };

  return (
    <div>
      {/* Filters Section */}
      <div className="py-8 px-4 bg-gray-100">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search by name */}
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          />

          {/* Sort by price */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          >
            <option value="">Sort by Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>

          {/* Filter by brand */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          >
            <option value="">Filter by Brand</option>
            <option value="Toyota">Toyota</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
          </select>
        </div>
      </div>

      {/* Car Cards Section */}
      <div className="max-w-screen-xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCars?.map((car, index) => (
          <div
            key={index}
            className="border rounded shadow-md p-4 flex flex-col relative"
          >
            {/* Availability Badge */}
            <div
              className={`absolute top-2 right-2 px-3 py-1 rounded-full text-white text-sm font-semibold ${
                car.rented ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {car.rented ? "Rented" : "Available"}
            </div>

            <Image
              src={car.image || ""}
              alt={`${car.make} ${car.model}`}
              width={400}
              height={300}
              className="h-48 w-full object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">
              {car.make} {car.model}
            </h2>
            <p className="text-gray-600">Year: {car.year}</p>
            <p className="text-gray-600">Type: {car.fuelType}</p>
            <p className="text-gray-600">Power: {car.horsepower}HP</p>
            <p className="text-gray-600">Engine: {car.engine}</p>
            <div className="flex justify-between items-center mt-auto pt-4">
              <span className="text-lg font-bold">{`₹${car.price}/day`}</span>
              <button
                onClick={() => handleViewDetails(car)}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="max-w-screen-xl mx-auto py-8 flex justify-center space-x-4">
        {[
          ...Array(Math.ceil(filteredCars?.length / carsPerPage || 1)).keys(),
        ].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === number + 1
                ? "bg-gray-800 text-white"
                : "bg-gray-200"
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
