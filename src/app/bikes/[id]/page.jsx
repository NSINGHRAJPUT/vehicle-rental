"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/app/_Components/Layout/Header";
import Footer from "@/app/_Components/Layout/Footer";

export default function BikeDetailsPage() {
  const router = useRouter();
  const [bikeDetails, setBikeDetails] = useState(null);

  useEffect(() => {
    // Retrieve bike data from local storage
    const storedBike = localStorage.getItem("selectedBike");

    if (storedBike) {
      setBikeDetails(JSON.parse(storedBike));
    } else {
      // Redirect to bike list page if no bike is found
      router.push("/bikes");
    }
  }, [router]);

  if (!bikeDetails) {
    return <p>Loading...</p>;
  }

  // Extract horsepower and convert it to a number
  const horsepower = parseFloat(bikeDetails.power);

  const handleBookNow = () => {
    alert(`Booking bike with ID: ${bikeDetails.id}`);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}`}
              alt={`${bikeDetails.make} ${bikeDetails.model}`}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-2xl font-bold">
              {bikeDetails.year} {bikeDetails.make} {bikeDetails.model}
            </h2>
            <p className="text-gray-700 mt-2">Type: {bikeDetails.type}</p>
            <p className="text-gray-700 mt-2">Engine: {bikeDetails.engine}</p>
            <p className="text-gray-700 mt-2">Power: {bikeDetails.power}</p>
            <p className="text-gray-700 mt-2">Torque: {bikeDetails.torque}</p>
            <p className="text-gray-700 mt-2">
              Displacement: {bikeDetails.displacement}
            </p>
            <p className="text-gray-700 mt-2">Cooling: {bikeDetails.cooling}</p>
            <p className="text-gray-700 mt-2">
              Fuel System: {bikeDetails.fuel_system}
            </p>
            <p className="text-gray-700 mt-2">
              Fuel Capacity: {bikeDetails.fuel_capacity}
            </p>
            <p className="text-gray-700 mt-2">
              Transmission: {bikeDetails.transmission}
            </p>
            <p className="text-gray-700 mt-2">Gearbox: {bikeDetails.gearbox}</p>
            <p className="text-gray-700 mt-2">
              Front Brakes: {bikeDetails.front_brakes}
            </p>
            <p className="text-gray-700 mt-2">
              Rear Brakes: {bikeDetails.rear_brakes}
            </p>
            <p className="text-gray-700 mt-2">
              Front Suspension: {bikeDetails.front_suspension}
            </p>
            <p className="text-gray-700 mt-2">
              Rear Suspension: {bikeDetails.rear_suspension}
            </p>
            <p className="text-gray-700 mt-2">
              Front Tire: {bikeDetails.front_tire}
            </p>
            <p className="text-gray-700 mt-2">
              Rear Tire: {bikeDetails.rear_tire}
            </p>
            <p className="text-gray-700 mt-2">
              Seat Height: {bikeDetails.seat_height}
            </p>
            <p className="text-gray-700 mt-2">
              Ground Clearance: {bikeDetails.ground_clearance}
            </p>
            <p className="text-gray-700 mt-2">
              Total Length: {bikeDetails.total_length}
            </p>
            <p className="text-gray-700 mt-2">
              Total Width: {bikeDetails.total_width}
            </p>
            <p className="text-gray-700 mt-2">
              Total Height: {bikeDetails.total_height}
            </p>
            <p className="text-gray-700 mt-2">
              Wheelbase: {bikeDetails.wheelbase}
            </p>
            <p className="text-gray-700 mt-2">
              Bore x Stroke: {bikeDetails.bore_stroke}
            </p>
            <p className="text-gray-700 mt-2">
              Compression: {bikeDetails.compression}
            </p>
            <p className="text-gray-700 mt-2">Frame: {bikeDetails.frame}</p>
            <p className="text-gray-700 mt-2">Clutch: {bikeDetails.clutch}</p>
            <p className="text-gray-700 mt-2">
              Ignition: {bikeDetails.ignition}
            </p>
            <p className="text-gray-700 mt-2">
              Lubrication: {bikeDetails.lubrication}
            </p>
            <p className="text-gray-700 mt-2">
              Valves per Cylinder: {bikeDetails.valves_per_cylinder}
            </p>
            <p className="text-gray-700 mt-2">Starter: {bikeDetails.starter}</p>
            <p className="text-gray-700 mt-2">Price: ₹{horsepower}/day</p>

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
    </>
  );
}
