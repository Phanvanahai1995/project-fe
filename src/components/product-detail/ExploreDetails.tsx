"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Best01 from "../../public/images/product-detail/product/explore-01.png";
import Best02 from "../../public/images/product-detail/product/explore-02.png";
import Best03 from "../../public/images/product-detail/product/explore-03.png";
import Best04 from "../../public/images/product-detail/product/explore-04.png";
import BestHomeNextArrow from "./BestHomeNextArrow";
import BestHomePreArrow from "./BestHomePreArrow";
import HouseIcon from "../../public/images/browser/house-icon.svg";

function ExploreDetails() {
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="lg:pb-[44px] md:pb-[122px] sm:pb-[145px] pb-[145px]">
      <div className=" flex md:flex-row sm:flex-col flex-col md:items-center sm:items-start items-start gap-3">
        <h2 className="md:text-5xl sm:text-4xl text-4xl font-bold flex flex-col">
          Explore mountains in New Zealand
        </h2>
      </div>
      <Slider
        {...settings}
        className="mt-[124px] slider-customer"
        nextArrow={<BestHomeNextArrow />}
        prevArrow={<BestHomePreArrow />}
      >
        <Link className="" href="#">
          <article className="lg:w-[256px] max-w-[256px]">
            <Image src={Best01} alt="best-hosts" />
            <h3 className="font-medium mt-4 text-main-gary">Mountain house</h3>
            <div className="flex items-center mt-[10px] gap-[3px] text-[12px] text-primary-gray font-semibold">
              <Image src={HouseIcon} alt="house-icon" />
              <span>650,596</span>
            </div>
          </article>
        </Link>
        <Link href="#">
          <article className="lg:w-[256px] max-w-[256px]">
            <Image src={Best02} alt="best-hosts" />
            <h3 className="font-medium mt-4 text-main-gary">Mountain house</h3>
            <div className="flex items-center mt-[10px] gap-[3px] text-[12px] text-primary-gray font-semibold">
              <Image src={HouseIcon} alt="house-icon" />
              <span>650,596</span>
            </div>
          </article>
        </Link>
        <Link href="#">
          <article className="lg:w-[256px] max-w-[256px]">
            <Image src={Best03} alt="best-hosts" />
            <h3 className="font-medium mt-4 text-main-gary">Mountain house</h3>
            <div className="flex items-center mt-[10px] gap-[3px] text-[12px] text-primary-gray font-semibold">
              <Image src={HouseIcon} alt="house-icon" />
              <span>650,596</span>
            </div>
          </article>
        </Link>
        <Link href="#">
          <article className="lg:w-[256px] max-w-[256px]">
            <Image src={Best04} alt="best-hosts" />
            <h3 className="font-medium mt-4 text-main-gary">Mountain house</h3>
            <div className="flex items-center mt-[10px] gap-[3px] text-[12px] text-primary-gray font-semibold">
              <Image src={HouseIcon} alt="house-icon" />
              <span>650,596</span>
            </div>
          </article>
        </Link>
      </Slider>
    </section>
  );
}

export default ExploreDetails;
