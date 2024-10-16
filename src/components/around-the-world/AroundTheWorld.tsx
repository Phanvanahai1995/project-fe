import React from "react";
// import AroundBg from "../../public/images/around-the-world/bg-around.svg";
import ArrowRight from "../../public/images/arrow-right-white.svg";
import Image from "next/image";

export default function AroundTheWorld() {
  return (
    <section className="pb-[100px] pt-[56px] lg:mt-20 md:mt-0 mt-0">
      <div className="flex xl:gap-8 lg:gap-0 lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap justify-center">
        <div className="lg:max-w-[448px] md:max-w-full max-h-full lg:mt-[138px] md:mt-16 mt-16 lg:px-0 md:px-10 px-10">
          <p
            style={{ fontFamily: "Poppins" }}
            className="uppercase text-[12px] text-primary-gray font-bold"
          >
            supercharge your planning powers
          </p>
          <h2 className="lg:text-5xl md:text-4xl text-4xl leading-[56px] -tracking-wider mt-4 text-main-gary font-bold">
            Travel to make memories all around the world
          </h2>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-primary-gray leading-6 mt-8"
          >
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </p>
          <div className="relative w-fit mt-10 lg:mx-0 md:mx-auto mx-auto">
            <input
              className="border-2 border-second-gray rounded-[90px] outline-none placeholder:text-[14px] placeholder:text-primary-gray py-[14px] pr-[58px] pl-4 w-[300px]"
              type="phone"
              placeholder="Enter your phone number"
            />
            <div className="bg-primary-btn absolute px-[9px] py-3 rounded-full top-[50%] translate-y-[-50%] right-[8px] cursor-pointer">
              <Image src={ArrowRight} alt="arrow-right" />
            </div>
          </div>
        </div>
        <div className="lg:mt-0 md:mt-12 mt-12">
          <div className="md:bg-desktop-around sm:bg-mobile-around bg-mobile-around lg:w-[640px] lg:h-[676px] md:w-[572px] md:h-[605px] sm:w-[343px] sm:h-[445px] w-[343px] h-[445px] bg-center bg-contain bg-no-repeat"></div>
        </div>
      </div>
    </section>
  );
}
