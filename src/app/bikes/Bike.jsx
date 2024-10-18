"use client"; // This directive tells Next.js that this is a client component

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BikeProductsClient({ bikes }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const bikesPerPage = 10;
  const router = useRouter();
  
console.log(bikes)
  // Pagination logic
  const indexOfLastBike = currentPage * bikesPerPage;
  const indexOfFirstBike = indexOfLastBike - bikesPerPage;

  // Handle sorting logic
  const sortBikes = (bikeList) => {
    if (sortOption === "Low to High") {
      return bikeList.sort((a, b) => a.price - b.price);
    } else if (sortOption === "High to Low") {
      return bikeList.sort((a, b) => b.price - a.price);
    }
    return bikeList;
  };

  // Handle filtering by brand and search
  const filteredBikes = bikes
    .filter((bike) => {
      const matchesBrand =
        selectedBrand === "" ||
        bike.make.toLowerCase() === selectedBrand.toLowerCase();
      const matchesSearch =
        searchTerm === "" ||
        `${bike.make} ${bike.model}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      return matchesBrand && matchesSearch;
    })
    .slice(indexOfFirstBike, indexOfLastBike);

  // Handle booking button click
  const handleBookNow = (bike) => {
    console.log(bike);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedBike", JSON.stringify(bike));
    }
    router.push(`/bikes/${bike.id}`);
  };

  // Pagination function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Filters Section */}
      <div className="py-8 px-4 bg-gray-100">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search by name..."
            className="border p-2 rounded w-full md:w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border p-2 rounded w-full md:w-1/3"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
          <select
            className="border p-2 rounded w-full md:w-1/3"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">Filter by Brand</option>
            <option value="Kawasaki">Kawasaki</option>
            <option value="Yamaha">Yamaha</option>
            <option value="Honda">Honda</option>
            <option value="Royal Enfield">Royal Enfield</option>
            <option value="Jawa">Jawa</option>
            <option value="BMW">BMW</option>
          </select>
        </div>
      </div>

      {/* Bike Cards Section */}
      <div className="max-w-screen-xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortBikes(filteredBikes).map((bike, index) => (
          <div
            key={index}
            className="relative border rounded shadow-md p-4 flex flex-col"
          >
            {/* Status Badge */}
            <div
              className={`absolute top-2 right-2 px-2 py-1 rounded text-white text-xs font-bold ${
                bike.rented ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {bike.rented ? "Rented" : "Available"}
            </div>

            <Image
              src={`${bike.image}`}
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
            <p className="text-gray-600">Transmission: {bike.transmission}</p>
            <p className="text-gray-600">Model: {bike.model}</p>
            <div className="flex justify-between items-center mt-auto pt-4">
              <span className="text-lg font-bold">{`₹${bike.price}/day`}</span>
              <button
                onClick={() => handleBookNow(bike)}
                className="bg-gray-800 text-white px-4 py-2 rounded"
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
                  ? "bg-gray-600 text-white"
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
