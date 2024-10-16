"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackgroundTravel from "../../public/images/travel/bg.svg";
import Image from "next/image";
import TravelNextArrow from "./TravelNextArrow";
import TravelPrevArrow from "./TravelPrevArrow";

function TravelCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className="rounded-[32px] max-w-[454px] border-none outline-none relative"
      nextArrow={<TravelNextArrow />}
      prevArrow={<TravelPrevArrow />}
    >
      <div>
        <Image
          src={BackgroundTravel}
          alt="travel"
          className="rounded-[32px] w-full h-full object-cover"
        />
      </div>
      <div>
        <Image
          src={BackgroundTravel}
          alt="travel"
          className="rounded-[32px] w-full h-full object-cover"
        />
      </div>
    </Slider>
  );
}

export default TravelCarousel;
