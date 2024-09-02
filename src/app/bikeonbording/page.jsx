import React from "react";
import Footer from "../_Components/Layout/Footer";
import Header from "../_Components/Layout/Header";
import HeroLayout from "../_Components/Layout/HeroLayout";
import VehicleShareSection from "../_Components/Home/VehicleShareSection";

const page = () => {
  const data = {
    title1: "Turn Your Bike into Money into extra money",
    title2: "With Drivee",
  };
  return (
    <>
      <Header />
      <HeroLayout data={data} />
      <VehicleShareSection />

      <div className="w-full">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            {/* Get Started Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Get Started</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700">First name *</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Last name *</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Email *</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">
                      Phone number *
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Zip Code *</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white p-3 rounded-lg flex justify-center items-center"
                  >
                    <span>→</span>
                  </button>
                </form>
              </div>

              {/* Easy Onboarding Steps */}
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  Easy Onboarding
                </h2>
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Sign up and name your car.
                    </h3>
                    <p className="text-gray-700">
                      On the signup form, you'll tell us about you and your car.
                      Give your car a name, and continue to the next step.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Create a profile and upload photos.
                    </h3>
                    <p className="text-gray-700">
                      If you have multiple vehicles, use the car manager to
                      create a profile for each one.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Install Drivee Connect®
                    </h3>
                    <p className="text-gray-700">
                      We'll reach out to have our proprietary hardware installed
                      in your car. Connect® lets guests unlock the car with
                      their phone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-black text-white rounded-full h-12 w-12 flex items-center justify-center">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Start earning</h3>
                    <p className="text-gray-700">
                      As soon as you enable bookings, guests can start taking
                      trips in your car—and you can start earning money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refer a Friend Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              When You Refer A Friend
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">+10% When Car Is Live</h3>
                <p className="text-gray-700 mt-4">
                  You get a $200 bonus when your friend becomes a host and lists
                  their first car.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">
                  +25% Referred Host Earnings
                </h3>
                <p className="text-gray-700 mt-4">
                  You'll also get the equivalent of 25% of your friend's
                  earnings for their first 60 days after listing a car.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refer a Friend Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
              Refer A Friend
            </h2>
            <form className="max-w-lg mx-auto space-y-4">
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">E-Mail</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-lg"
              >
                Refer A Friend
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default page;
