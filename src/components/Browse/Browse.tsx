import Image from "next/image";
import React from "react";
import Nature01 from "../../public/images/browser/landscape 09.png";
import Nature02 from "../../public/images/browser/landscape 05.png";
import HouseIcon from "../../public/images/browser/house-icon.svg";
import Link from "next/link";

function Browse() {
  return (
    <section className="max-w-[1120px] mx-auto xl:px-0 lg:px-5 px-5 pb-[56px]">
      <h2 className="md:text-5xl mx-auto text-4xl text-main-gary font-bold leading-[56px]">
        Browse by property type
      </h2>
      <p className="text-2xl text-primary-gray mt-3">
        Let’s go on an adventure
      </p>
      <div className="mt-20 flex gap-8 overflow-auto">
        <Link href="#" className="max-w-[256px]">
          <article className="rounded-3xl">
            <Image
              src={Nature01}
              alt="nature house"
              className="max-w-[256px] max-h-[256px] object-cover rounded-3xl hover:scale-[1.01] transition-transform duration-300"
            />
            <h3 className="font-medium mt-[21px]">Nature house</h3>
            <div className="flex items-center mt-[10px] gap-[3px] text-[12px] text-primary-gray font-semibold">
              <Image src={HouseIcon} alt="house-icon" />
              <span>650,596</span>
            </div>
          </article>
        </Link>

        <Link href="#">
          <article className="rounded-3xl">
            <Image
              src={Nature02}
              alt="nature house"
              className="max-w-[256px] max-h-[256px] object-cover rounded-3xl hover:scale-[1.01] transition-transform duration-300"
            />
            <h3 className="font-medium mt-[21px]">Nature house</h3>
            <div className="flex items-center mt-[10px] gap-[3px] text-[12px] text-primary-gray font-semibold">
              <Image src={HouseIcon} alt="house-icon" />
              <span>650,596</span>
            </div>
          </article>
        </Link>

        <Link href="#">
          <article className="rounded-3xl">
            <Image
              src={Nature01}
              alt="nature house"
              className="max-w-[256px] max-h-[256px] object-cover rounded-3xl hover:scale-[1.01] transition-transform duration-300"
            />
            <h3 className="font-medium mt-[21px]">Nature house</h3>
            <div className="flex items-center mt-[10px] gap-[3px] text-[12px] text-primary-gray font-semibold">
              <Image src={HouseIcon} alt="house-icon" />
              <span>650,596</span>
            </div>
          </article>
        </Link>
        <Link href="#">
          <article className="rounded-3xl">
            <Image
              src={Nature02}
              alt="nature house"
              className="max-w-[256px] max-h-[256px] object-cover rounded-3xl hover:scale-[1.01] transition-transform duration-300"
            />
            <h3 className="font-medium mt-[21px]">Nature house</h3>
            <div className="flex items-center mt-[10px] gap-[3px] text-[12px] text-primary-gray font-semibold">
              <Image src={HouseIcon} alt="house-icon" />
              <span>650,596</span>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
}

export default Browse;
