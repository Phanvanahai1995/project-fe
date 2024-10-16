import React from "react";
import ArrowRight from "../../public/images/arrow-right-white.svg";
import Bg from "../../public/images/product-detail/product/join-our.png";
import Image from "next/image";

function SectionJoinOur() {
  return (
    <section className="flex lg:gap-[128px] md:gap-2 gap-2 pb-[216px] md:flex-row sm:flex-col flex-col">
      <div className="md:w-[352px] sm:w-full w-full xl:mt-[163px] lg:mt-[38px]">
        <h2 className="text-main-gary font-bold text-[48px] leading-[56px]">
          Join our newsletter
        </h2>
        <p className="text-primary-gray leading-6 mt-4">
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </p>
        <div className="flex flex-col gap-4 mt-10">
          <div className="flex gap-4">
            <span className="text-white-fc py-[2px] w-[44px] inline-block px-3 rounded-[100px] bg-travel-03">
              01
            </span>
            <span className="text-main-gary font-medium">
              Get more discount
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-white-fc py-[2px] w-[44px] inline-block px-3 rounded-[100px] bg-travel-02">
              02
            </span>
            <span className="text-main-gary font-medium">
              Get premium travel magazine
            </span>
          </div>
        </div>
        <div className="relative w-fit mt-10 lg:mx-0 md:mx-auto mx-auto">
          <input
            className="border-2 border-second-gray rounded-[90px] outline-none placeholder:text-[14px] placeholder:text-primary-gray py-[14px] pr-[58px] pl-4 md:w-[352px] sm:w-full w-full"
            type="phone"
            placeholder="Enter your email"
          />
          <div className="bg-primary-btn absolute px-[9px] py-3 rounded-full top-[50%] translate-y-[-50%] right-[8px] cursor-pointer">
            <Image src={ArrowRight} alt="arrow-right" />
          </div>
        </div>
      </div>
      <div>
        <Image src={Bg} alt="join-our" />
      </div>
    </section>
  );
}

export default SectionJoinOur;
