"use client";

import React from "react";
import ArrowBlue from "../../public/images/arrow-blue.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Best01 from "../../public/images/best-home/img-01.svg";
import Best02 from "../../public/images/best-home/img-02.svg";
import Best03 from "../../public/images/best-home/img-03.svg";
import Best04 from "../../public/images/best-home/img-04.svg";
import BestHomeNextArrow from "./BestHomeNextArrow";
import BestHomePreArrow from "./BestHomePreArrow";
import ArrowDown from "../../public/images/arrow-down.svg";

function BestHome() {
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
    <section className="pt-[136px] pb-[128px] xl:max-w-[1122px] lg:max-w-[864px] md:max-w-[864px] md:mx-auto sm:mx-3 max-w-[864px] mx-3">
      <div className=" flex md:flex-row sm:flex-col flex-col md:items-center sm:items-start items-start gap-3">
        <h2 className="md:text-5xl sm:text-4xl text-4xl font-bold flex flex-col">
          Best hosts of the
          <span className="md:hidden sm:block text-primary-btn">month</span>
        </h2>
        <div className="relative">
          <select
            name=""
            id=""
            className="text-primary-btn w-[227px] py-2 pr-4 md:pl-6 sm:pl-0 md:block sm:hidden pl-0 hidden font-bold md:text-5xl sm:text-4xl text-4xl "
          >
            <option value="">month</option>
            <option value="">year</option>
            <option value="">days</option>
          </select>
          <Image
            className="absolute top-[50%] translate-y-[-50%] right-4"
            src={ArrowBlue}
            alt="arrow-icon"
          />
        </div>
        <div className="relative md:hidden sm:block block border rounded-xl mx-auto">
          <select
            name=""
            id=""
            className="text-[14px] text-main-gary leading-6 px-4 py-3 rounded-xl font-medium w-[256px]"
          >
            <option value="1">month</option>
            <option value="2">year</option>
            <option value="3">day</option>
          </select>
          <div className="absolute top-[50%] translate-y-[-50%] right-[8px] border-2 border-second-gray py-[13.5px] px-[11.5px] rounded-full">
            <Image src={ArrowDown} alt="arrow-down-con" />
          </div>
        </div>
      </div>
      <Slider
        {...settings}
        className="mt-12 slider-customer"
        nextArrow={<BestHomeNextArrow />}
        prevArrow={<BestHomePreArrow />}
      >
        <Link className="" href="#">
          <article className="max-w-[256px] rounded-3xl border border-second-gray pb-8">
            <Image src={Best01} alt="best-hosts" />
            <h3 className="font-medium text-center mt-4 text-main-gary">
              Antone Heller
            </h3>
            <p className="text-[12px] mt-1 text-center">Gaylordside</p>
          </article>
        </Link>
        <Link href="#">
          <article className="max-w-[256px] rounded-3xl border border-second-gray pb-8">
            <Image src={Best02} alt="best-hosts" />
            <h3 className="font-medium text-center mt-4 text-main-gary">
              Antone Heller
            </h3>
            <p className="text-[12px] mt-1 text-center">Gaylordside</p>
          </article>
        </Link>
        <Link href="#">
          <article className="max-w-[256px] rounded-3xl border border-second-gray pb-8">
            <Image src={Best03} alt="best-hosts" />
            <h3 className="font-medium text-center mt-4 text-main-gary">
              Antone Heller
            </h3>
            <p className="text-[12px] mt-1 text-center">Gaylordside</p>
          </article>
        </Link>
        <Link href="#">
          <article className="max-w-[256px] rounded-3xl border border-second-gray pb-8">
            <Image src={Best04} alt="best-hosts" />
            <h3 className="font-medium text-center mt-4 text-main-gary">
              Antone Heller
            </h3>
            <p className="text-[12px] mt-1 text-center">Gaylordside</p>
          </article>
        </Link>
      </Slider>
    </section>
  );
}

export default BestHome;
