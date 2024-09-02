import axios from "axios";
import CarProductsClient from "./Car";
import Header from "../_Components/Layout/Header";
import Footer from "../_Components/Layout/Footer";
import HeroLayout from "../_Components/Layout/HeroLayout";
import { title } from "process";

async function fetchCars() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const response = await axios.get(`${apiUrl}/api/carregistration`);
    return response.data.cars;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}

export default async function CarProducts() {
  const cars = await fetchCars();

  const data = {
    title1: "Rent A Car",
    title2: "Rent Your Freedom",
  };

  return (
    <div>
      <Header />
      <HeroLayout data={data} />
      <CarProductsClient cars={cars} />
      <Footer />
    </div>
  );
}
