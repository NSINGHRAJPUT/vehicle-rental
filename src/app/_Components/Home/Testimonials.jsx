import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Customer Saying...
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TestimonialCard
          imageSrc="/images/customer1.jpg"
          title="Excellent Service! Car Rent Service"
          description="We have been using Rentaly for our trips needs for several years now and have always been happy with their service. Their customer support is excellent."
          customerName="Rovert Harvest"
        />
        <TestimonialCard
          imageSrc="/images/customer2.jpg"
          title="Excellent Service! Car Rent Service"
          description="I have been using Rentaly for my car rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive."
          customerName="Jovan Reels"
        />
        <TestimonialCard
          imageSrc="/images/customer3.jpg"
          title="Excellent Service! Car Rent Service"
          description="Endorsed by industry experts, Rentaly is the car rental solution you can trust. We provide fast, reliable, and secure car rental services."
          customerName="Kanesha Keyton"
        />
      </div>
    </section>
  );
};

export default Testimonials;
