import React from "react";
import ServiceSlider from "./Slider/ServiceCarousel";

const Service = () => {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <ServiceSlider slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Service;
