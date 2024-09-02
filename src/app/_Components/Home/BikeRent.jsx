import Image from "next/image";
import Link from "next/link";

export default function RentBike() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16 px-[2.5%]">
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-start">
        <div className="w-full max-w-md h-64 md:h-80 lg:h-96">
          <Image
            src="/bike-image.png" // Replace with your actual image path
            alt="Rent a Bike"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Rent A Bike</h2>

        <div className="flex justify-center lg:justify-start space-x-4 mb-6">
          <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md font-semibold">
            Luxury
          </button>
          <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md font-semibold">
            Comfort
          </button>
          <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md font-semibold">
            Prestige
          </button>
        </div>

        <p className="text-lg mb-6">
          Booking a self-driving bike with us is simple and easy. You can browse
          our selection of vehicles online, choose the bike that best fits your
          needs, and book it for the duration of your choice. Our user-friendly
          platform allows you to manage your bookings and view your trip history
          with ease.
        </p>

        <Link
          href={"/bikeonboarding"}
          className="bg-black text-white py-2 px-6 rounded-md font-semibold"
        >
          Rent Bike
        </Link>
      </div>
    </section>
  );
}
