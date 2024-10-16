import { ProductType } from "@/utils/product";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";
import LoadMore from "../../public/images/more.svg";

async function SectionLive() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/products?limit=3&skip=6"
    );

    return (
      <section className="pb-[56px]">
        <h2 className="text-center lg:text-5xl md:text-4xl max-w-[648px] mx-auto text-5xl text-main-gary font-bold leading-[56px]">
          Live anywhere
        </h2>
        <p className="text-2xl text-center text-primary-gray mt-3">
          Keep calm & travel on
        </p>
        <div className="flex flex-wrap mt-[64px] items-center justify-center gap-8">
          {data.products.map((p: ProductType) => {
            return (
              <Link href="#" key={p.id} className="relative">
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  className="h-[480px] object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                  width={352}
                  height={480}
                />
                <h3 className="text-center mt-6 text-main-gary">{p.title}</h3>
                <p className="text-center text-[14px] text-primary-gray mt-2">
                  6,879 properties
                </p>
              </Link>
            );
          })}
        </div>
        <Button
          href="#"
          style="bg-white flex item-center  gap-3 py-3 px-4 border-2 border-second-gray rounded-[90px] w-[133px] text-[14px] mx-auto mt-[64px]"
        >
          <Image
            src={LoadMore}
            alt="more-icon"
            className="w-[13px] h-[13px] mt-1"
          />
          <span className="font-bold">Load more</span>
        </Button>
      </section>
    );
  } catch (error: unknown) {
    if (error instanceof Error)
      return (
        <h2 className="text-center text-xl text-red-500 font-bold">
          {error.message}
        </h2>
      );
  }
}

export default SectionLive;
