import Image from "next/image";

const VehicleShareSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6 md:p-10">
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Do You Want To Share Your Vehicle?
        </h2>
        <p className="text-gray-600 mb-6">
          We'll use your car's location to calculate your onboard bonus. Each
          ZIP code will belong to one of five zones. Zones are based on guest
          demand for cars—more guest demand means a higher zone, and bigger
          bonuses for cars. Zone 1 gets the highest bonus, while Zones 4 and 5
          aren't eligible for the onboard bonus.
        </p>
        <button className="flex items-center justify-center bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Learn More <span className="ml-2">→</span>
        </button>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
        <Image
          src="/car-image.jpg" // Replace with your image path
          alt="Vehicle sharing"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default VehicleShareSection;
