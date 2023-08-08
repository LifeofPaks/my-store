import React, { useEffect, useState } from "react";
import "./Banner.scss";
import Banner1 from "../../assets/images/GOW.webp";
import Banner3 from "../../assets/images/mouseBanner.jpeg";
import Banner4 from "../../assets/images/iphoneBanner.webp";
import Banner5 from "../../assets/images/monitorBanner.jpeg";
import Banner6 from "../../assets/images/iwatchBanner.jpeg";
import Banner7 from "../../assets/images/samsungwatchBanner.jpeg";
import Banner8 from "../../assets/images/playstationBanner.webp";
import Banner9 from "../../assets/images/nbaBanner.jpeg";
import Banner10 from "../../assets/images/spidermanBanner.jpeg";
import Banner11 from "../../assets/images/samsungBanner.jpeg";

import Left from "../../assets/images/icons8-chevron-left-24.png";
import Right from "../../assets/images/icons8-chevron-right-24.png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    Banner7,
    Banner3,
    Banner4,
    Banner5,
    Banner1,
    Banner6,
    Banner8,
    Banner9,
    Banner10,
    Banner11,
  ];

  useEffect(() => {
      setCurrentSlide(0);
    }, []);

  const slideLength = banners.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const beginAutoScroll = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    if (autoScroll) {
      beginAutoScroll();
    }
  }, [currentSlide]);

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {banners.map((banner, index) => (
          <img src={banner} alt="banner" key={index} />
        ))}
      </div>

      <button className="left">
        <img src={Left} alt="slider" onClick={prevSlide} />
      </button>

      <button className="right" onClick={nextSlide}>
        <img src={Right} alt="slider" />
      </button>
    </div>
  );
};

export default Banner;
