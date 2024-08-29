"use client";
import React, { useState } from "react";
const FaqComponent = () => {
  const [activeTab, setActiveTab] = useState("Booking");
  const [activeQuestion, setActiveQuestion] = useState(null);
  const tabs = ["General", "Security", "Booking", "Payment", "Others"];
  const faqs = {
    Booking: [
      "How Do I Find A Car Or Bike For Trip?",
      "How Can I Extend My Trip Date After Booking?",
      "How Do I Extend My Trip?",
      "Am I Responsible For Fuel?",
      "Can I Book Car Or Bike Under 20 Of Age?",
      "How Can I Apply For Promo Code?",
    ],
    // Add other tab FAQs here as needed
  };
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  return (
    <div className="container mx-auto p-4 px-[2.5%]">
      <h2 className="text-center text-2xl font-bold mb-6">Have Any Question</h2>
      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 mx-1 border-b-2 ${
              activeTab === tab ? "border-gray-800" : "border-transparent"
            } text-lg focus:outline-none`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {faqs[activeTab]?.map((faq, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-sm cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{faq}</p>
              <span>{activeQuestion === index ? "-" : "+"}</span>
            </div>
            {activeQuestion === index && (
              <div className="mt-2 text-gray-600">
                <p>This is the answer to the question.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FaqComponent;
