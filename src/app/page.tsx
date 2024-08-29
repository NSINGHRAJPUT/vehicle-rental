import Hero from "./_Components/Home/Hero";
import Header from "./_Components/Home/Header";
import CarRent from "./_Components/Home/CarRent";
import BikeRent from "./_Components/Home/BikeRent";
import VehicleShareSection from "./_Components/Home/VehicleShareSection";
import WhyChooseUs from "./_Components/Home/WhyChooseUs";
import Testimonials from "./_Components/Home/Testimonials";

export default function Home() {
  return (
    <div className="px-[2.5%]">
      <Header />
      <Hero />
      <CarRent />
      <BikeRent />
      <VehicleShareSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
