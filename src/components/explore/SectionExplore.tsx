import Image from "next/image";
import Link from "next/link";
import React from "react";
import Explore01 from "../../public/images/explore/01-img.png";
import Explore02 from "../../public/images/explore/img-02.svg";
import Explore03 from "../../public/images/explore/img-03.svg";
import Explore04 from "../../public/images/explore/04-img.png";
import Explore05 from "../../public/images/explore/img-05.svg";
import Explore06 from "../../public/images/explore/img-06.svg";
import Explore07 from "../../public/images/explore/img-07.svg";
import Explore08 from "../../public/images/explore/img-08.svg";
import Explore09 from "../../public/images/explore/09-img.png";

const items = [
  {
    title: "Thompsonbury",
    content: "15 minutes drive",
    image: Explore01,
  },
  {
    title: "Hudsontown",
    content: "2 hours drive",
    image: Explore02,
  },
  {
    title: "Lake Marcelle",
    content: "15 minutes drive",
    image: Explore03,
  },
  {
    title: "New Keagan",
    content: "15 minutes drive",
    image: Explore04,
  },
  {
    title: "MacGyverton",
    content: "2 hours drive",
    image: Explore05,
  },
  {
    title: "North Justen",
    content: "15 minutes drive",
    image: Explore06,
  },
  {
    title: "Port Elyseberg",
    content: "2 hours drive",
    image: Explore07,
  },
  {
    title: "Danielmouth",
    content: "15 minutes drive",
    image: Explore08,
  },
  {
    title: "Russelville",
    content: "2 hours drive",
    image: Explore09,
  },
];

function SectionExplore() {
  return (
    <section className="bg-somewhere py-[112px] md:px-[80px] sm:px-5 rounded-3xl mt-[80px]">
      <h2 className="text-center lg:text-5xl md:text-4xl max-w-[648px] mx-auto text-5xl text-main-gary font-bold leading-[56px]">
        Explore nearby
      </h2>
      <p className="text-2xl text-center text-primary-gray mt-3">
        10,789 beautiful places to go
      </p>
      <div className="flex md:flex-wrap sm:flex-nowrap flex-nowrap overflow-x-auto md:justify-center sm:justify-start justify-start lg:gap-x-[48px] md:gap-x-[32px] sm:gap-x-4 gap-x-4 gap-y-[64px] mt-20 md:px-0 sm:px-5 px-5">
        {items.map((item, i) => {
          return (
            <Link
              key={i}
              href="#"
              className={`bg-white-fc min-w-[180px] max-h-[256px] pt-2 pr-2 pl-2 pb-6 rounded-2xl ${
                (i === 3 || i === 8) && "lg:block md:hidden sm:block block"
              }`}
            >
              <article>
                <span className="text-primary-gray text-[12px] bg-somewhere rounded-[32px] py-2 px-3">
                  1480
                </span>
                <div className="flex justify-center flex-col items-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="min-w-[80px] min-h-[80px] object-cover"
                  />
                  <h3 className="font-medium mt-4 text-main-gary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] text-primary-gray">
                    {item.content}
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default SectionExplore;
