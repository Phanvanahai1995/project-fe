"use client";
import React, { useState } from "react";
import Image from "next/image";
import DollarIcon from "../../public/images/dolla-icon.svg";
import DollarIconBlack from "../../public/images/dollar-icon-black.svg";
import ArrowDown from "../../public/images/arrow-down.svg";

function MenuSomeWhere() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-16 flex lg:flex-row md:flex-col flex-col items-center md:justify-center justify-center lg:justify-between gap-6">
      <ul className="items-center gap-4 md:flex sm:hidden hidden">
        <li
          onClick={() => setActive(0)}
          className={`flex font-bold items-center gap-2 py-[6px] px-3 ${
            active === 0 ? "bg-somewhere-bg text-white-fc" : "text-primary-gray"
          } rounded-[100px] cursor-pointer`}
        >
          <Image
            src={active === 0 ? DollarIcon : DollarIconBlack}
            alt="dollar-icon"
          />
          <span>Featured</span>
        </li>
        <li
          onClick={() => setActive(1)}
          className={`flex font-bold items-center gap-2 py-[6px] px-3 ${
            active === 1 ? "bg-somewhere-bg text-white-fc" : "text-primary-gray"
          } rounded-[100px] cursor-pointer`}
        >
          <Image
            src={active === 1 ? DollarIcon : DollarIconBlack}
            alt="dollar-icon"
          />
          <span className="text-nowrap">Family-friendly</span>
        </li>
        <li
          onClick={() => setActive(2)}
          className={`flex font-bold items-center gap-2 py-[6px] px-3 ${
            active === 2 ? "bg-somewhere-bg text-white-fc" : "text-primary-gray"
          } rounded-[100px] cursor-pointer`}
        >
          <Image
            src={active === 2 ? DollarIcon : DollarIconBlack}
            alt="dollar-icon"
          />
          <span className="text-nowrap">On sale</span>
        </li>
        <li
          onClick={() => setActive(3)}
          className={`flex font-bold items-center gap-2 py-[6px] px-3 ${
            active === 3 ? "bg-somewhere-bg text-white-fc" : "text-primary-gray"
          } rounded-[100px] cursor-pointer`}
        >
          <Image
            src={active === 3 ? DollarIcon : DollarIconBlack}
            alt="dollar-icon"
          />
          <span className="text-nowrap">Sub nav</span>
        </li>
      </ul>
      <div className="relative md:hidden sm:block block">
        <select
          name=""
          id=""
          className="text-[14px] text-main-gary leading-6 px-4 py-3 rounded-xl font-medium w-[256px]"
        >
          <option value="1">Featured</option>
          <option value="1">Family-friendly</option>
          <option value="1">On sale</option>
          <option value="1">Sub nav</option>
        </select>
        <div className="absolute top-[50%] translate-y-[-50%] right-[8px] border-2 border-second-gray py-[13.5px] px-[11.5px] rounded-full">
          <Image src={ArrowDown} alt="arrow-down-con" />
        </div>
      </div>
      <div className="relative">
        <select
          name=""
          id=""
          className="text-[14px] text-main-gary leading-6 px-4 py-3 rounded-xl font-medium w-[256px]"
        >
          <option value="1">Recently added</option>
        </select>
        <div className="absolute top-[50%] translate-y-[-50%] right-[8px] border-2 border-second-gray py-[13.5px] px-[11.5px] rounded-full">
          <Image src={ArrowDown} alt="arrow-down-con" />
        </div>
      </div>
    </div>
  );
}

export default MenuSomeWhere;
