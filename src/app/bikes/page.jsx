import axios from "axios";
import BikeProductsClient from "./Bike";
import HeroLayout from "../_Components/Layout/HeroLayout";
import Header from "../_Components/Layout/Header";
import Footer from "../_Components/Layout/Footer";

async function fetchBikes() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/bikeregistration`
    );
    console.log(response);
    return response.data.bikes;
  } catch (error) {
    console.error("Error fetching bikes:", error.message);
    return [];
  }
}

export default async function BikeProducts() {
  const bikes = await fetchBikes();

  const data = {
    title1: "Rent A Bike",
    title2: "Rent Your Freedom",
  };

  return (
    <>
      <Header />
      <HeroLayout data={data} />
      <BikeProductsClient bikes={bikes} />
      <Footer />
    </>
  );
}
