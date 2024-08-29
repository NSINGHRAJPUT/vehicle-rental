const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white p-6 md:p-10 px-[2.5%]">
      {/* Left Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-6">
          Booking a self-driving car with us is simple and easy. You can browse
          our selection of vehicles online, choose the car that best fits your
          needs, and book it for the duration of your choice.
        </p>
      </div>
      {/* Right Stats Section */}
      <div className="md:w-1/2 flex justify-around mt-6 md:mt-0">
        <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-md">
          <p className="text-2xl font-bold text-black">45k+</p>
          <p className="text-gray-500">SuccessTour</p>
        </div>
        <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-md mx-4">
          <p className="text-2xl font-bold text-black">1M+</p>
          <p className="text-gray-500">Happy Customer</p>
        </div>
        <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-md">
          <p className="text-2xl font-bold text-black">3+</p>
          <p className="text-gray-500">Year Experience</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
