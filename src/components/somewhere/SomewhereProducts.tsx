import { ProductType } from "@/utils/product";
import axios from "axios";
import Image from "next/image";
import React from "react";
import Star from "../../public/images/star.svg";
import Link from "next/link";

async function SomewhereProducts() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/products?limit=8&skip=1"
    );

    // console.log(data);

    return (
      <div className="grid mt-12 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
        {data.products.map((p: ProductType) => {
          const newPrice = Math.floor(
            p.price * (1 - p.discountPercentage / 100)
          );

          return (
            <Link key={p.id} href={`products/${p.id}`}>
              <article className="relative shadow-md bg-white rounded-2xl">
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  height={228}
                  width={256}
                  className="max-h-[228px] lg:max-w-[256px] md:w-full w-full hover:scale-105 transition-transform duration-300 object-contain rounded-t-2xl"
                />
                <div className="p-5">
                  <div className="flex justify-between border-b border-second-gray pb-4">
                    <div>
                      <h3 className="font-medium text-somewhere-main">
                        {p.title.slice(1, 18)}...
                      </h3>
                      <p className="text-[12px] text-somewhere-second">
                        {p.brand}
                      </p>
                    </div>
                    <div className="flex flex-col max-w-[48px] max-h-[44px] items-center p-2 border-2 border-travel-03 rounded justify-center">
                      <span className="text-[12px] text-somewhere-price font-bold line-through">
                        ${p.price}
                      </span>
                      <span className="text-[12px] text-travel-03 font-bold">
                        ${newPrice}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-1 text-[12px] text-primary-gray">
                      <span>Tue, Jul 20</span>
                      <span>-</span>
                      <span>Fri, Jul 23</span>
                    </div>
                    <div className="flex items-center text-[12px] font-bold gap-1">
                      <Image src={Star} alt="star" />
                      <span>{p.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
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

export default SomewhereProducts;
