import TestimonialCard from "./TestimonialCard";
import t1 from "../../../assets/cs1.jpg";
import t2 from "../../../assets/cs2.jpg";
import t3 from "../../../assets/cs3.jpg";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 px-[2.5%]">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Customer Saying...
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TestimonialCard
          imageSrc={t2}
          title="Excellent Service! Car Rent Service"
          description="We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is excellent."
          customerName="Rovert Harvest"
        />
        <TestimonialCard
          imageSrc={t1}
          title="Excellent Service! Car Rent Service"
          description="I have been using Rentaly for my car rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive."
          customerName="Jovan Reels"
        />
        <TestimonialCard
          imageSrc={t3}
          title="Excellent Service! Car Rent Service"
          description="Endorsed by industry experts, Rentaly is the car rental solution you can trust. We provide fast, reliable, and secure car rental services."
          customerName="Kanesha Keyton"
        />
      </div>
    </section>
  );
};

export default Testimonials;
