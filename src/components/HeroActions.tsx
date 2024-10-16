"use client";
import Image from "next/image";
import React, { useState } from "react";
import Location from "../public/images/fly.svg";
import Calender from "../public/images/calender.svg";
import User from "../public/images/user.svg";
import Button from "./Button";
import SearchIcon from "../public/images/search-icon.png";

function HeroActions() {
  const [active, setActive] = useState(1);

  function handleActive(num: number) {
    return active === num ? "border-b-2 border-main-gary text-main-gary" : "";
  }

  return (
    <div className="absolute shadow-hero lg:w-auto w-full bg-white  md:p-10  sm:p-5 p-5 rounded-[40px] top-[601px] left-[50%] translate-x-[-50%]">
      <ul className="flex lg:gap-[48px] md:gap-[32px] sm:gap-[32px] gap-[32px] items-center border-b border-[#E6E8EC]">
        <li
          onClick={() => setActive(1)}
          className={`pb-[30px] font-bold cursor-pointer ${handleActive(1)}`}
        >
          Stays
        </li>
        <li
          onClick={() => setActive(2)}
          className={`pb-[30px] font-bold cursor-pointer ${handleActive(2)}`}
        >
          Flights
        </li>
        <li
          onClick={() => setActive(3)}
          className={`pb-[30px] font-bold cursor-pointer ${handleActive(3)}`}
        >
          Cars
        </li>
        <li
          onClick={() => setActive(4)}
          className={`pb-[30px] font-bold cursor-pointer ${handleActive(4)}`}
        >
          Things to do
        </li>
      </ul>
      <div className="mt-7">
        <div className="lg:p-x-5 py-5 p-x-0 flex items-center justify-between">
          <div className="flex gap-6 lg:pl-5 pl-0 py-5 p-x-0 lg:w-[304px] w-auto">
            <Image src={Location} alt="location" />
            <div className="flex flex-col text-nowrap">
              <span className="text-main-gary font-bold text-[24px] leading-[32px]">
                Location
              </span>
              <p className="text-primary-gray leading-[24px]">
                Where are you going?
              </p>
            </div>
          </div>
          <div className="xl:flex lg:hidden md:hidden hidden gap-6 lg:p-5 p-x-0 lg:w-[220px] w-auto">
            <Image src={Calender} alt="location" />
            <div>
              <span className="text-main-gary font-bold text-[24px] text-nowrap">
                Check in
              </span>
              <p className="text-primary-gray">Add date</p>
            </div>
          </div>
          <div className="xl:flex lg:hidden md:hidden hidden gap-6 lg:p-5 p-x-0 w-[220px]">
            <Image src={Calender} alt="location" />
            <div>
              <span className="text-main-gary font-bold text-[24px]">
                Checkout
              </span>
              <p className="text-primary-gray">Add date</p>
            </div>
          </div>
          <div className="xl:hidden md:flex sm:hidden hidden gap-6 lg:p-5 p-x-0 w-[220px]">
            <Image src={Calender} alt="location" />
            <div>
              <span className="text-main-gary font-bold text-[24px]">Date</span>
              <p className="text-primary-gray">Add date</p>
            </div>
          </div>
          <div className="flex gap-3 lg:w-[296px] w-auto lg:p-5 p-x-0">
            <div className="gap-6 lg:flex md:flex sm:hidden hidden">
              <Image src={User} alt="location" />
              <div>
                <span className="text-main-gary font-bold text-[24px]">
                  Travelers
                </span>
                <p className="text-primary-gray">Add guests</p>
              </div>
            </div>
            <Button
              style="min-w-[64px] inline-block min-h-[64px] bg-primary-btn flex items-center justify-center rounded-full"
              href="#"
            >
              <Image
                src={SearchIcon}
                alt="search icon"
                className="object-cover"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroActions;
