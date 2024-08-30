import axios from "axios";
import BikeProductsClient from "./Bike";

async function fetchBikes() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BURL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const response = await axios.get(`${apiUrl}`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bikes:", error);
    return [];
  }
}

export default async function BikeProducts() {
  const bikes = await fetchBikes();

  return <BikeProductsClient bikes={bikes} />;
}
