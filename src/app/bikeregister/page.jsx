"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/_Components/Layout/Header";
import Footer from "@/app/_Components/Layout/Footer";
import toast from "react-hot-toast";
import axios from "axios";

export default function NewBikePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    type: "",
    engine: "",
    power: "",
    torque: "",
    displacement: "",
    cooling: "",
    fuel_system: "",
    fuel_capacity: "",
    transmission: "",
    gearbox: "",
    front_brakes: "",
    rear_brakes: "",
    front_suspension: "",
    rear_suspension: "",
    front_tire: "",
    rear_tire: "",
    seat_height: "",
    ground_clearance: "",
    total_length: "",
    total_width: "",
    total_height: "",
    wheelbase: "",
    bore_stroke: "",
    compression: "",
    frame: "",
    clutch: "",
    ignition: "",
    lubrication: "",
    valves_per_cylinder: "",
    starter: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/bikeregistration", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);

      if (response.success) {
        toast.success("Bike registered successfully!");
        router.push("/bikes");
      } else {
        toast.error(`Failed to register bike: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error(
        "An error occurred while registering the bike. Please try again."
      );
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Register a New Bike</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="make"
                placeholder="Make"
                value={formData.make}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="model"
                placeholder="Model"
                value={formData.model}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="number"
                name="year"
                placeholder="Year"
                value={formData.year}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="type"
                placeholder="Type"
                value={formData.type}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="engine"
                placeholder="Engine"
                value={formData.engine}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="power"
                placeholder="Power"
                value={formData.power}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="torque"
                placeholder="Torque"
                value={formData.torque}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="displacement"
                placeholder="Displacement"
                value={formData.displacement}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="cooling"
                placeholder="Cooling"
                value={formData.cooling}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="fuel_system"
                placeholder="Fuel System"
                value={formData.fuel_system}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="fuel_capacity"
                placeholder="Fuel Capacity"
                value={formData.fuel_capacity}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="transmission"
                placeholder="Transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="gearbox"
                placeholder="Gearbox"
                value={formData.gearbox}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="front_brakes"
                placeholder="Front Brakes"
                value={formData.front_brakes}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="rear_brakes"
                placeholder="Rear Brakes"
                value={formData.rear_brakes}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="front_suspension"
                placeholder="Front Suspension"
                value={formData.front_suspension}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="rear_suspension"
                placeholder="Rear Suspension"
                value={formData.rear_suspension}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="front_tire"
                placeholder="Front Tire"
                value={formData.front_tire}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="rear_tire"
                placeholder="Rear Tire"
                value={formData.rear_tire}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="seat_height"
                placeholder="Seat Height"
                value={formData.seat_height}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="ground_clearance"
                placeholder="Ground Clearance"
                value={formData.ground_clearance}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="total_length"
                placeholder="Total Length"
                value={formData.total_length}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="total_width"
                placeholder="Total Width"
                value={formData.total_width}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="total_height"
                placeholder="Total Height"
                value={formData.total_height}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="wheelbase"
                placeholder="Wheelbase"
                value={formData.wheelbase}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="bore_stroke"
                placeholder="Bore x Stroke"
                value={formData.bore_stroke}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="compression"
                placeholder="Compression"
                value={formData.compression}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="frame"
                placeholder="Frame"
                value={formData.frame}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="clutch"
                placeholder="Clutch"
                value={formData.clutch}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="ignition"
                placeholder="Ignition"
                value={formData.ignition}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="lubrication"
                placeholder="Lubrication"
                value={formData.lubrication}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="valves_per_cylinder"
                placeholder="Valves per Cylinder"
                value={formData.valves_per_cylinder}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="starter"
                placeholder="Starter"
                value={formData.starter}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
            >
              Register Bike
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
