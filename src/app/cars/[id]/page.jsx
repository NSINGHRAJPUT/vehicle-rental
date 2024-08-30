"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/app/_Components/Layout/Header";
import Footer from "@/app/_Components/Layout/Footer";
import toast from "react-hot-toast";

export default function CarDetailsPage() {
  const router = useRouter();
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    // Retrieve car data from localStorage
    const storedCar = localStorage.getItem("selectedCar");

    if (storedCar) {
      setCarDetails(JSON.parse(storedCar));
    } else {
      // Redirect to car list page if no car is found
      router.push("/cars");
    }
  }, [router]);

  if (!carDetails) {
    return <p>Loading...</p>;
  }

  const handleBookNow = () => {
    toast.success(`Booking car with ID: ${carDetails.id}`);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2">
            <Image
              src={carDetails.image}
              alt={`${carDetails.make} ${carDetails.model}`}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-2xl font-bold">
              {carDetails.year} {carDetails.make} {carDetails.model}
            </h2>
            <p className="text-gray-700 mt-2">Color: {carDetails.color}</p>
            <p className="text-gray-700 mt-2">
              Mileage: {carDetails.mileage} miles
            </p>
            <p className="text-gray-700 mt-2">Price: ₹{carDetails.price}</p>
            <p className="text-gray-700 mt-2">
              Fuel Type: {carDetails.fuelType}
            </p>
            <p className="text-gray-700 mt-2">
              Transmission: {carDetails.transmission}
            </p>
            <p className="text-gray-700 mt-2">Engine: {carDetails.engine}</p>
            <p className="text-gray-700 mt-2">
              Horsepower: {carDetails.horsepower} HP
            </p>
            <p className="text-gray-700 mt-2">Owners: {carDetails.owners}</p>
            <h3 className="text-xl font-semibold mt-4">Features:</h3>
            <ul className="list-disc ml-5 mt-2">
              {carDetails.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={handleBookNow}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
