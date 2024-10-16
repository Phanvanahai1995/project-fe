"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sea from "../public/images/advanture/Holiday Camp.svg";
import Summer from "../public/images/advanture/Holiday Summer.svg";
import Snow from "../public/images/advanture/Holiday Snow.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

function Adventure() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <section className="pt-[216px] pb-[136px]">
      <h2 className="text-center lg:text-5xl md:text-4xl text-4xl text-main-gary font-bold">
        Let’s go on an adventure
      </h2>
      <p className="text-2xl text-center text-primary-gray mt-3">
        Find and book a great experience.
      </p>
      <Slider
        {...settings}
        className="flex justify-center max-w-[1120px] mx-auto items-center gap-8 mt-[64px] relative"
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        <div className="">
          <Link href="#" className="flex gap-4 items-center justify-center">
            <Image src={Sea} alt="Luxury resort at the sea" />
            <div className="w-[136px]">
              <h3 className="font-semibold text-main-gary">
                Luxury resort at the sea
              </h3>
              <span className="inline-block px-3 py-[6px] font-bold bg-second-gray rounded-[32px] mt-8px text-advanture-gay text-xs">
                9,326 places
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="flex gap-4 items-center justify-center">
            <Image src={Summer} alt="Luxury resort at the sea" />
            <div className="w-[136px]">
              <h3 className="font-semibold text-main-gary">
                Camping amidst the wild
              </h3>
              <span className="inline-block  px-3 py-[6px] font-bold bg-second-gray rounded-[32px] mt-8px text-advanture-gay text-xs">
                9,326 places
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="flex gap-4 items-center justify-center">
            <Image src={Snow} alt="Luxury resort at the sea" />
            <div className="w-[136px]">
              <h3 className="font-semibold text-main-gary">
                Luxury resort at the sea
              </h3>
              <span className="inline-block  px-3 py-[6px] font-bold bg-second-gray rounded-[32px] mt-8px text-advanture-gay text-xs">
                9,326 places
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link href="#" className="flex gap-4 items-center justify-center">
            <Image src={Summer} alt="Luxury resort at the sea" />
            <div className="w-[136px]">
              <h3 className="font-semibold text-main-gary">
                Camping amidst the wild
              </h3>
              <span className="inline-block  px-3 py-[6px] font-bold bg-second-gray rounded-[32px] mt-8px text-advanture-gay text-xs">
                9,326 places
              </span>
            </div>
          </Link>
        </div>
      </Slider>
    </section>
  );
}

export default Adventure;
