import React from "react";
import ServiceSlider from "./Slider/ServiceCarousel";
import s1 from "../../../assets/p1.png";
import s2 from "../../../assets/p2.jpg";
import s3 from "../../../assets/p3.jpeg";
import s4 from "../../../assets/p4.png";
import s5 from "../../../assets/p5.jpg";
import s6 from "../../../assets/p6.jpg";
import s7 from "../../../assets/p7.jpg";
import s8 from "../../../assets/p8.jpg";

const Service = () => {
  const OPTIONS = { loop: true };
  const SLIDES = [s1, s2, s3, s4, s5, s6, s7, s8];
  return (
    <div>
      <ServiceSlider slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Service;
