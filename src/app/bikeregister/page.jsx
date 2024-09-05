"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/_Components/Layout/Header";
import Footer from "@/app/_Components/Layout/Footer";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "universal-cookie";

export default function NewBikePage() {
  const router = useRouter();
  const cookies = new Cookies();
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    type: "",
    transmission: "",
    starter: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0], // Properly capturing the selected file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(cookies.get("token"));

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("make", formData.make);
      formDataToSend.append("model", formData.model);
      formDataToSend.append("year", formData.year);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("transmission", formData.transmission);
      formDataToSend.append("starter", formData.starter);
      formDataToSend.append("price", formData.price);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      const response = await axios.post(
        "/api/bikeregistration",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: cookies.get("token"),
          },
        }
      );

      if (response.data.success) {
        toast.success("Bike registered successfully!");
        router.push("/bikes");
      } else {
        toast.error(`Failed to register bike: ${response.data.message}`);
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
                name="transmission"
                placeholder="Transmission"
                value={formData.transmission}
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
              <input
                type="file"
                name="image"
                onChange={handleFileChange} // Removed value attribute
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
