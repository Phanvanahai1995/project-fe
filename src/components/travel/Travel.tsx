import Image from "next/image";
import React from "react";

import Review from "../../public/images/travel/review.png";
import TravelCarousel from "./TravelCarousel";
import Button from "../Button";

const travel: { title: string; content: string; color: string }[] = [
  {
    title: "Find trips that fit a flexible lifestyle",
    content:
      " Stacks is a production-ready library of stackable content blocks built in React Native",
    color: "bg-travel-01",
  },
  {
    title: "Travel with more confidence",
    content:
      " Stacks is a production-ready library of stackable content blocks built in React Native",
    color: "bg-travel-02",
  },
  {
    title: "See what’s really included",
    content:
      " Stacks is a production-ready library of stackable content blocks built in React Native",
    color: "bg-travel-03",
  },
];

function Travel() {
  return (
    <section className="pb-[136px]">
      <h2 className="text-center lg:text-5xl md:text-4xl max-w-[648px] mx-auto text-5xl text-main-gary font-bold leading-[56px]">
        Travel to make memories all around the world
      </h2>
      <p className="text-2xl text-center text-primary-gray mt-3">
        Find trips that fit a flexible lifestyle
      </p>
      <div className="mt-[80px] flex md:flex-row sm:flex-col flex-col md:justify-center sm:justify-center justify-center xl:gap-[241px] md:gap-[128px] md:items-start sm:items-center items-center">
        <div className="xl:max-w-[352px] lg:max-w-[282px] w-full justify-center items-center flex flex-col gap-10">
          {travel.map((t, i) => {
            return (
              <div key={i}>
                <span
                  className={`font-semibold flex items-center w-fit text-white-fc px-3 pt-[2px] rounded-[100px] ${t.color}`}
                >
                  0{i + 1}
                </span>
                <h3 className="text-2xl mt-6 text-main-gary font-bold leading-[32px]">
                  {t.title}
                </h3>
                <p className="text-sm mt-4 text-primary-gray leading-6">
                  {t.content}
                </p>
              </div>
            );
          })}
          <Button
            href="#"
            style="max-w-[184px] mt-40px py-4 px-6 rounded-[90px] bg-primary-btn text-white"
          >
            Start your search
          </Button>
        </div>
        <div className="relative sm:max-w-[457px] max-[450px]:max-w-[311px] max-w-[311px] max-h-[700px] sm:mt-[64px] md:mt-0 mt-[64px]">
          <TravelCarousel />
          <Image
            src={Review}
            alt="review"
            className="absolute left-[-111px] top-[273px] lg:block md:hidden hidden"
          />
          <Image
            src={Review}
            alt="review"
            className="absolute xl:top-[338px] xl:right-[-113px] lg:top-[412px] lg:right-[-73px] lg:block md:hidden hidden"
          />
          <Image
            src={Review}
            alt="review"
            className="absolute lg:top-[499px] lg:left-[-20px] md:top-[573px] md:left-[50%] md:translate-x-[-50%] sm:top-[600px] top-[380px] left-[50%] translate-x-[-50%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Travel;
