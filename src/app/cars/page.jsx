import axios from "axios";
import CarProductsClient from "./Car";
import Header from "../_Components/Layout/Header";
import Footer from "../_Components/Layout/Footer";

async function fetchCars() {
  const apiUrl = process.env.NEXT_PUBLIC_API_CURL;

  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
}

export default async function CarProducts() {
  const cars = await fetchCars();

  return (
    <div>
      <Header />
      <CarProductsClient cars={cars} />
      <Footer />
    </div>
  );
}
