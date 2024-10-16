"use client";
import React from "react";
import House from "../../public/images/house-icon.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Image from "next/image";

const data = [
  {
    quantity: 256.356,
    image: House,
    title: "City house",
    content: "Small description",
  },
  {
    quantity: 256.356,
    image: House,
    title: "City house",
    content: "Small description",
  },
  {
    quantity: 256.356,
    image: House,
    title: "City house",
    content: "Small description",
  },
  {
    quantity: 256.356,
    image: House,
    title: "City house",
    content: "Small description",
  },
  {
    quantity: 256.356,
    image: House,
    title: "City house",
    content: "Small description",
  },
  {
    quantity: 256.356,
    image: House,
    title: "City house",
    content: "Small description",
  },
];

function BrowseCategoryCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      className="flex justify-center slider-customer items-center gap-8 mt-[64px] relative"
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
    >
      {data.map((item) => {
        return (
          <div
            key={item.title}
            className="border-2 border-second-gray rounded-3xl p-8"
          >
            <span className="text-main-gary text-[12px] font-bold py-2 px-3 rounded-[32px] bg-second-gray">
              {item.quantity}
            </span>
            <div className="mt-[74px]">
              <Image src={item.image} alt="house-icon" />
            </div>
            <h3 className="mt-6 font-medium text-main-gary">{item.title}</h3>
            <p className="mt-1 text-[12px] text-primary-gray">{item.content}</p>
          </div>
        );
      })}
    </Slider>
  );
}

export default BrowseCategoryCarousel;
