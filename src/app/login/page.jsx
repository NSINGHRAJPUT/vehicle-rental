"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Header from "../_Components/Layout/Header";
import Footer from "../_Components/Layout/Footer";

export default function LoginPage() {
  const router = useRouter();
  const cookies = new Cookies();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    try {
      const response = await axios.post("/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      if (response.data.success) {
        cookies.set("token", response.data.token, { path: "/" });
        // Redirect to another page or handle successful login
        toast.success(response.data.message);
        router.push("/dashboard");
      } else {
        // Handle login failure
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex">
        {/* Left Side - Image */}
        <div className="w-1/2 relative hidden md:block">
          <Image
            src="/path-to-your-image.jpg"
            alt="Login Image"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border border-gray-300 p-2 w-full rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
