"use client";

import { useState } from "react";
import Header from "@/app/_Components/Layout/Header";
import Footer from "@/app/_Components/Layout/Footer";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

export default function RegisterCarPage() {
  const router = useRouter();
  const cookies = new Cookies();
  const [carDetails, setCarDetails] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    mileage: "",
    price: "",
    fuelType: "",
    transmission: "",
    engine: "",
    horsepower: "",
    owners: "",
    features: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({
      ...carDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert the features to an array
    const featuresArray = carDetails.features
      .split(",")
      .map((feature) => feature.trim());
    const finalCarDetails = { ...carDetails, features: featuresArray };

    try {
      const response = await axios.post(
        "/api/carregistration",
        finalCarDetails,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: cookies.get("token"),
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        toast.success("Car Registered");
        setCarDetails({
          make: "",
          model: "",
          year: "",
          color: "",
          mileage: "",
          price: "",
          fuelType: "",
          transmission: "",
          engine: "",
          horsepower: "",
          owners: "",
          features: "",
          image: "",
        });
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("server error");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
          <h2 className="text-2xl font-bold mb-4">
            Register Your Car for Renting
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Make</label>
                <input
                  type="text"
                  name="make"
                  value={carDetails.make}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., Toyota"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Model</label>
                <input
                  type="text"
                  name="model"
                  value={carDetails.model}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., Corolla"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Year</label>
                <input
                  type="number"
                  name="year"
                  value={carDetails.year}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., 2020"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Color</label>
                <input
                  type="text"
                  name="color"
                  value={carDetails.color}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., Red"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Mileage (miles)</label>
                <input
                  type="number"
                  name="mileage"
                  value={carDetails.mileage}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., 30000"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Price (₹)</label>
                <input
                  type="number"
                  name="price"
                  value={carDetails.price}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., 1500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Fuel Type</label>
                <input
                  type="text"
                  name="fuelType"
                  value={carDetails.fuelType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., Petrol"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Transmission</label>
                <input
                  type="text"
                  name="transmission"
                  value={carDetails.transmission}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., Automatic"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Engine</label>
                <input
                  type="text"
                  name="engine"
                  value={carDetails.engine}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., 2.0L Turbo"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Horsepower (HP)</label>
                <input
                  type="number"
                  name="horsepower"
                  value={carDetails.horsepower}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., 250"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Number of Owners</label>
                <input
                  type="number"
                  name="owners"
                  value={carDetails.owners}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., 1"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700">
                  Features (Comma-separated)
                </label>
                <textarea
                  name="features"
                  value={carDetails.features}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., Sunroof, Leather Seats, Bluetooth"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={carDetails.image}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="e.g., https://example.com/car.jpg"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Register Car
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
