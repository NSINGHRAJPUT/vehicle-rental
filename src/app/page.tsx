import Hero from "./_Components/Home/Hero";
import Header from "./_Components/Layout/Header";
import CarRent from "./_Components/Home/CarRent";
import BikeRent from "./_Components/Home/BikeRent";
import VehicleShareSection from "./_Components/Home/VehicleShareSection";
import WhyChooseUs from "./_Components/Home/WhyChooseUs";
import Testimonials from "./_Components/Home/Testimonials";
import Service from "./_Components/Home/Service";
import Faqs from "./_Components/Home/Faqs";
import Footer from "./_Components/Layout/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <CarRent />
      <BikeRent />
      <VehicleShareSection />
      <WhyChooseUs />
      <Testimonials />
      <Service />
      <Faqs />
      <Footer />
    </div>
  );
}
