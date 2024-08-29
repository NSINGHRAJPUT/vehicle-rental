import Hero from "./_Components/Home/Hero";
import Header from "./_Components/Home/Header";
import CarRent from "./_Components/Home/CarRent";
import BikeRent from "./_Components/Home/BikeRent";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CarRent />
      <BikeRent />
    </div>
  );
}
