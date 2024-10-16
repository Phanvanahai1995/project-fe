import Button from "@/components/Button";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import ArrowLeft from "../../../public/images/arrow-left-2.svg";
import ArrowRight from "../../../public/images/arrow-right-2.svg";
import ActionDetail from "@/components/product-detail/ActionDetail";
import Avatar from "../../../public/images/product-detail/avatar.svg";
import Star from "../../../public/images/star.svg";
import House from "../../../public/images/product-detail/house.svg";
import Flag from "../../../public/images/product-detail/flag.svg";
import { ProductType } from "@/utils/product";
import DetailImage from "@/components/product-detail/DetailImage";
import PrivateRoom from "@/components/product-detail/PrivateRoom";
import ReviewDetail from "@/components/product-detail/ReviewDetail";
import BrowseProperty from "@/components/product-detail/BrowseProperty";
import SectionJoinOur from "@/components/product-detail/SectionJoinOur";
import ExploreDetails from "@/components/product-detail/ExploreDetails";

export async function generateMetadata({ params }: { params: Params }) {
  const { data } = await axios.get(
    `http://localhost:3000/api/products/${params.productId}`
  );

  return { title: `${data.title}` };
}

async function ProductDetails({ params }: { params: Params }) {
  try {
    const { data }: { data: ProductType } = await axios.get(
      `http://localhost:3000/api/products/${params.productId}`
    );

    return (
      <div className="container max-w-[1120px] mx-auto mt-[88px] xl:px-0 lg:px-10 md:px-5 px-5">
        <div className="py-4 items-center justify-between flex">
          <Button
            href="/"
            style="flex items-center text-nowrap gap-3 py-3 px-4 rounded-[90px] font-bold text-[14px] border-2 border-second-gray max-w-[122px] max-h-[40px]"
          >
            <Image
              src={ArrowLeft}
              alt="arrow-icon"
              className="w-[16px] h-[16px]"
            />
            Go home
          </Button>
          <ul className=" md:flex hidden">
            <li className="text-[14px] font-bold text-primary-gray flex items-center gap-2">
              <Link href="/">Home</Link>
              <Image src={ArrowRight} alt="arrow-icon" />
            </li>
            <li className="text-[14px] font-bold text-primary-gray flex items-center px-2">
              <Link href="/">Stays</Link>
              <Image src={ArrowRight} alt="arrow-icon" />
            </li>
            <li className="text-[14px] font-bold text-primary-gray flex items-center px-2">
              <Link href="/">New Zealand</Link>
              <Image src={ArrowRight} alt="arrow-icon" />
            </li>
            <li className="text-[14px] font-bold text-somewhere-price flex items-center pl-2">
              <Link href="/">South Island</Link>
            </li>
          </ul>
        </div>
        <div className="pt-6 pb-4 flex justify-between lg:items-start md:items-center items-center lg:flex-row md:flex-col flex-col ">
          <div className="lg:max-w-[640px] md:w-full w-full">
            <h1 className="lg:text-[48px] md:text-[32px] text-[32px] text-main-gary font-bold leading-[56px]">
              {data.title}
            </h1>
            <div className="flex items-center gap-5 mt-4">
              <Image src={Avatar} alt="avatar" />
              <div className="flex items-center gap-2">
                <Image src={Star} alt="star-icon" />
                <span className="text-[14px] font-medium text-main-gary">
                  {data.rating.toFixed(1)}
                </span>
                <span className="text-[14px] text-primary-gray lg:block md:hidden hidden">
                  ({data.reviews.length} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={House} alt="super-host" />
                <span className="text-[14px] text-primary-gray">Superhost</span>
              </div>
              <div className="items-center gap-2 lg:flex md:hidden hidden">
                <Image src={Flag} alt="Queenstown, Otago, New Zealand" />
                <span className="text-[14px] text-primary-gray">
                  Queenstown, Otago, New Zealand
                </span>
              </div>
            </div>
          </div>
          <ActionDetail />
        </div>
        <DetailImage />
        <PrivateRoom />
        <ReviewDetail />
        <BrowseProperty />
        <SectionJoinOur />
        <ExploreDetails />
      </div>
    );
  } catch (error: unknown) {
    if (error instanceof Error)
      return (
        <div className="container max-w-[1120px] mx-auto mt-[88px]">
          <h2 className="text-center text-xl text-red-500 font-bol">
            {error.message}
          </h2>
        </div>
      );
  }
}

export default ProductDetails;
