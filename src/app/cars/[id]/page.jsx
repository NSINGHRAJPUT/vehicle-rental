"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/app/_Components/Layout/Header";
import Footer from "@/app/_Components/Layout/Footer";
import Cookies from "universal-cookie";
import axios from "axios";
import toast from "react-hot-toast";

export default function CarDetailsPage() {
  const router = useRouter();
  const cookies = new Cookies();
  const [carDetails, setCarDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [rentalDetails, setRentalDetails] = useState({
    rentalStartDate: "",
    rentalEndDate: "",
    rentalAmount: 0,
  });

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
    if (carDetails.rented) {
      return toast.error("Car is already rented");
    }
    setShowModal(true);
  };
  console.log(carDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRentalDetails({
      ...rentalDetails,
      [name]: value,
    });
  };

  const handleCalculateAmount = () => {
    const startDate = new Date(rentalDetails.rentalStartDate);
    const endDate = new Date(rentalDetails.rentalEndDate);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const amount = diffDays * carDetails.price;
    setRentalDetails({ ...rentalDetails, rentalAmount: amount });
  };

  const handleSubmit = async () => {
    const token = cookies.get("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const response = await axios.post(
        "/api/rentals",
        {
          vehicleId: carDetails._id,
          vehicleType: "Car",
          rentalStartDate: rentalDetails.rentalStartDate,
          rentalEndDate: rentalDetails.rentalEndDate,
          amount: rentalDetails.rentalAmount,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success("Car booked successfully!");
        setShowModal(false);
        // Optionally, redirect the user or perform other actions
      } else {
        toast.error(`Failed to book car: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error booking car:", error);
      toast.error("An error occurred while booking the car. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2">
            <Image
              src={process.env.NEXT_PUBLIC_API_IMAGE_URL}
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
            <p className="text-gray-700 mt-2">Price: ₹{carDetails.price}/day</p>
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
              {carDetails.rented ? "Rented" : "Book Now"}
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Rental Details */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Enter Rental Details</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                name="rentalStartDate"
                value={rentalDetails.rentalStartDate}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                name="rentalEndDate"
                value={rentalDetails.rentalEndDate}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              onClick={handleCalculateAmount}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Calculate Amount
            </button>
            {rentalDetails.rentalAmount > 0 && (
              <p className="mt-4">
                Total Amount: ₹{rentalDetails.rentalAmount}
              </p>
            )}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-200 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
