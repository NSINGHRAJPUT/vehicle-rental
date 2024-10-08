"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/app/_Components/Layout/Header";
import Footer from "@/app/_Components/Layout/Footer";
import Cookies from "universal-cookie";
import axios from "axios";
import toast from "react-hot-toast";

export default function BikeDetailsPage() {
  const router = useRouter();
  const cookies = new Cookies();
  const [bikeDetails, setBikeDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [rentalDetails, setRentalDetails] = useState({
    rentalStartDate: "",
    rentalEndDate: "",
    rentalAmount: 0,
  });

  useEffect(() => {
    // Retrieve bike data from local storage
    const storedBike = localStorage.getItem("selectedBike");
    console.log(storedBike);
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

  const handleBookNow = () => {
    if (bikeDetails.rented) {
      return toast.error("Bike is already rented");
    }
    setShowModal(true);
  };

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
    const amount = diffDays * bikeDetails.price;
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
          vehicleId: bikeDetails._id,
          vehicleType: "Bike",
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
        alert("Bike booked successfully!");
        setShowModal(false);
        // Optionally, redirect the user or perform other actions
      } else {
        alert(`Failed to book bike: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error booking bike:", error);
      alert("An error occurred while booking the bike. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2">
            <Image
              src={`${bikeDetails.image}`}
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
            <p className="text-gray-700 mt-2">
              Transmission: {bikeDetails.transmission}
            </p>
            <p className="text-gray-700 mt-2">Starter: {bikeDetails.starter}</p>
            <p className="text-gray-700 mt-2">
              Price: ₹{bikeDetails.price}/day
            </p>

            <button
              onClick={handleBookNow}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              {bikeDetails.rented ? "Rented" : "Book Now"}
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
    </>
  );
}
