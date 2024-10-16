import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import Avatar from "../../public/images/product-detail/avatar.png";
import Star from "../../public/images/star.svg";
import Building from "../../public/images/product-detail/house.svg";
import Star2 from "../../public/images/product-detail/star-2.svg";
import Global from "../../public/images/global.svg";
import Share from "../../public/images/product-detail/share.svg";
import More from "../../public/images/product-detail/more.svg";
import Twitter from "../../public/images/product-detail/twitter.svg";
import Instagram from "../../public/images/product-detail/instagram.svg";
import Facebook from "../../public/images/product-detail/facebook.svg";
import FlagSmall from "../../public/images/product-detail/flag-small.svg";
import StarFull from "../../public/images/product-detail/star-full.svg";
import StarEmpty from "../../public/images/product-detail/star-empty.svg";
import Smile from "../../public/images/product-detail/smile.svg";
import Arrow from "../../public/images/arrow-right-white.svg";
import ArrowDown from "../../public/images/arrow-down.svg";
import AvatarReview from "../../public/images/product-detail/avatar_placeholder.svg";
import StarFullSmall from "../../public/images/product-detail/star-full-small.svg";
import LoadMore from "../../public/images/more.svg";

function ReviewDetail() {
  return (
    <section className="pt-20 md:flex sm:block block  gap-12">
      <div className="border md:flex sm:hidden hidden flex-col gap-8 border-second-gray rounded-3xl w-[343px] min-w-[343px] max-h-[641px] p-8">
        <div className="flex gap-[22px] ">
          <Image src={Avatar} alt="Zoe towne" />
          <div>
            <h3 className="text-[32px] font-bold text-main-gary">Zoe towne</h3>
            <div className="flex gap-2">
              <Image src={Star} alt="star" />
              <span className="text-main-gary text-[14px]">4.8</span>
              <span className="text-primary-gray text-[14px]">
                (256 reviews)
              </span>
            </div>
          </div>
        </div>
        <div className="py-2 px-[26.5px] bg-somewhere flex items-center rounded-[20px] gap-4">
          <div className="flex items-center gap-2 text-[14px] text-primary-gray">
            <Image src={Building} alt="house-icon" />
            <span>Superhost</span>
          </div>
          <div className="flex items-center gap-2 text-[14px] text-primary-gray">
            <Image src={Star2} alt="star-icon" />
            <span>256 reviews</span>
          </div>
        </div>
        <p className="text-[14px] text-center leading-6 text-primary-gray">
          Described by Queenstown House &#x26; Garden magazine as having
          &#x27;one of the best views we&#x27;ve ever seen&#x27; you will love
          relaxing in this newly built
        </p>
        <div className="flex justify-center">
          <Link href="#" className="flex text-[14px] font-bold text-main-gary">
            <Image src={Global} alt="global" />
            https://ui8.net
          </Link>
        </div>
        <div className="flex gap-2 justify-center">
          <Button
            href="#"
            style="bg-main-gary font-bold text-white-fc rounded-[90px] px-4 py-3"
          >
            Contact
          </Button>
          <div className="p-2 w-[48px] h-[48px] flex justify-center items-center rounded-full border-2 border-second-gray cursor-pointer">
            <Image src={Share} alt="arrow-icon" />
          </div>
          <div className="p-2 w-[48px] h-[48px] flex justify-center items-center rounded-full border-2 border-second-gray cursor-pointer">
            <Image src={More} alt="arrow-icon" />
          </div>
        </div>

        <ul className="flex justify-center gap-6">
          <li>
            <Link href="twitter.com">
              <Image src={Twitter} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link href="instagram.com">
              <Image src={Instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link href="facebook.com">
              <Image src={Facebook} alt="Facebook" />
            </Link>
          </li>
        </ul>
        <span className="h-[1px] w-[199px] bg-second-gray mx-auto"></span>
        <p className="text-center text-[12px] text-primary-gray">
          Member since Mar 15, 2017
        </p>
        <div className="flex items-center justify-center gap-1">
          <Image src={FlagSmall} alt="flag-icon" />
          <span className="text-[12px] text-primary-gray">
            Report this host
          </span>
        </div>
      </div>
      <div className="mt-10 md:w-[65%] sm:w-full w-full">
        <h3 className="text-2xl font-bold text-main-gary">Add a review</h3>
        <div className="flex xl:flex-row lg:flex-col flex-col justify-between mt-2">
          <p className="text-[14px] text-primary-gray">
            Be the first to review
            <span className="text-main-gary">
              Spectacular views of Queenstown
            </span>
          </p>
          <div className="flex">
            <Image src={StarFull} alt="star" />
            <Image src={StarFull} alt="star" />
            <Image src={StarFull} alt="star" />
            <Image src={StarFull} alt="star" />
            <Image src={StarEmpty} alt="star" />
          </div>
        </div>
        <div className="mt-10 relative">
          <textarea
            name=""
            id=""
            className="w-full border-2 border-second-gray placeholder:text-primary-gray p-6 rounded-[16px] outline-none max-h-[72px] overflow-y-visible"
            placeholder="Share your thoughts"
          ></textarea>
          <Image
            src={Smile}
            alt="smile-icon"
            className="absolute top-[50%] translate-y-[-50%] md:right-[140px] sm:right-[64px] right-[64px]"
          />
          <Button
            href="#"
            style="bg-primary-btn flex gap-3 items-center md:rounded-[90px] sm:rounded-full rounded-full md:py-3 md:px-4 sm:px-4 sm:py-4 py-4 px-4 font-bold text-white-fc text-[14px] absolute top-[50%] translate-y-[-50%] right-4"
          >
            <span className="md:block sm:hidden hidden">Post it!</span>{" "}
            <Image src={Arrow} alt="arrow-icon" />
          </Button>
        </div>
        <div className="mt-10">
          <div className="flex justify-between">
            <span className="font-semibold text-main-gary text-[24px]">
              3 comments
            </span>
            <div className="relative">
              <select
                name=""
                id=""
                className="text-[14px] text-main-gary leading-6 px-4 py-3 rounded-xl font-medium w-[160px] border-2 border-second-gray select-customer-2"
              >
                <option value="1">Newest</option>
              </select>
              <div className="absolute top-[50%] translate-y-[-50%] right-[8px] border-2 border-second-gray py-[13.5px] px-[11.5px] rounded-full">
                <Image src={ArrowDown} alt="arrow-down-con" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-5 pt-8 pb-7 border-b border-second-gray">
            <Image src={AvatarReview} alt="avatar" />
            <div className="">
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-main-gary font-medium">
                  Myrtie Runolfsson
                </span>
                <div className="flex">
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                </div>
              </div>
              <p className="text-[14px] leading-6 text-somewhere-second mt-1">
                We had the most spectacular view. Unfortunately it was very hot
                in the room from 2-830 pm due to no air conditioning and no
                shade.
              </p>
              <div className="text-[12px] flex gap-4 mt-2">
                <span className="text-primary-gray">about 1 hour ago</span>
                <span className="text-main-gary font-semibold cursor-pointer">
                  Like
                </span>
                <span className="text-main-gary font-semibold cursor-pointer">
                  Reply
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-5 pt-8 pb-7 border-b border-second-gray">
            <Image src={AvatarReview} alt="avatar" />
            <div className="">
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-main-gary font-medium">
                  Myrtie Runolfsson
                </span>
                <div className="flex">
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                </div>
              </div>
              <p className="text-[14px] leading-6 text-somewhere-second mt-1">
                We had the most spectacular view. Unfortunately it was very hot
                in the room from 2-830 pm due to no air conditioning and no
                shade.
              </p>
              <div className="text-[12px] flex gap-4 mt-2">
                <span className="text-primary-gray">about 1 hour ago</span>
                <span className="text-main-gary font-semibold cursor-pointer">
                  Like
                </span>
                <span className="text-main-gary font-semibold cursor-pointer">
                  Reply
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-5 pt-8 pb-7 border-b border-second-gray">
            <Image src={AvatarReview} alt="avatar" />
            <div className="">
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-main-gary font-medium">
                  Myrtie Runolfsson
                </span>
                <div className="flex">
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                  <Image src={StarFullSmall} alt="star-icon" />
                </div>
              </div>
              <p className="text-[14px] leading-6 text-somewhere-second mt-1">
                We had the most spectacular view. Unfortunately it was very hot
                in the room from 2-830 pm due to no air conditioning and no
                shade.
              </p>
              <div className="text-[12px] flex gap-4 mt-2">
                <span className="text-primary-gray">about 1 hour ago</span>
                <span className="text-main-gary font-semibold cursor-pointer">
                  Like
                </span>
                <span className="text-main-gary font-semibold cursor-pointer">
                  Reply
                </span>
              </div>
            </div>
          </div>
          <Button
            href="#"
            style="bg-white flex item-center  gap-3 py-3 px-4 border-2 border-second-gray rounded-[90px] w-[185px] text-[14px] mx-auto mt-8"
          >
            <Image
              src={LoadMore}
              alt="more-icon"
              className="w-[13px] h-[13px] mt-1"
            />
            <span className="font-bold">Loading comment</span>
          </Button>
        </div>
      </div>
      <div className="border md:hidden sm:flex flex flex-col gap-8 border-second-gray rounded-3xl w-[343px] min-w-[343px] mx-auto mt-12 max-h-[641px] p-8">
        <div className="flex gap-[22px] ">
          <Image src={Avatar} alt="Zoe towne" />
          <div>
            <h3 className="text-[32px] font-bold text-main-gary">Zoe towne</h3>
            <div className="flex gap-2">
              <Image src={Star} alt="star" />
              <span className="text-main-gary text-[14px]">4.8</span>
              <span className="text-primary-gray text-[14px]">
                (256 reviews)
              </span>
            </div>
          </div>
        </div>
        <div className="py-2 px-[26.5px] bg-somewhere flex items-center rounded-[20px] gap-4">
          <div className="flex items-center gap-2 text-[14px] text-primary-gray">
            <Image src={Building} alt="house-icon" />
            <span>Superhost</span>
          </div>
          <div className="flex items-center gap-2 text-[14px] text-primary-gray">
            <Image src={Star2} alt="star-icon" />
            <span>256 reviews</span>
          </div>
        </div>
        <p className="text-[14px] text-center leading-6 text-primary-gray">
          Described by Queenstown House &#x26; Garden magazine as having
          &#x27;one of the best views we&#x27;ve ever seen&#x27; you will love
          relaxing in this newly built
        </p>
        <div className="flex justify-center">
          <Link href="#" className="flex text-[14px] font-bold text-main-gary">
            <Image src={Global} alt="global" />
            https://ui8.net
          </Link>
        </div>
        <div className="flex gap-2 justify-center">
          <Button
            href="#"
            style="bg-main-gary font-bold text-white-fc rounded-[90px] px-4 py-3"
          >
            Contact
          </Button>
          <div className="p-2 w-[48px] h-[48px] flex justify-center items-center rounded-full border-2 border-second-gray cursor-pointer">
            <Image src={Share} alt="arrow-icon" />
          </div>
          <div className="p-2 w-[48px] h-[48px] flex justify-center items-center rounded-full border-2 border-second-gray cursor-pointer">
            <Image src={More} alt="arrow-icon" />
          </div>
        </div>

        <ul className="flex justify-center gap-6">
          <li>
            <Link href="twitter.com">
              <Image src={Twitter} alt="twitter" />
            </Link>
          </li>
          <li>
            <Link href="instagram.com">
              <Image src={Instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link href="facebook.com">
              <Image src={Facebook} alt="Facebook" />
            </Link>
          </li>
        </ul>
        <span className="h-[1px] w-[199px] bg-second-gray mx-auto"></span>
        <p className="text-center text-[12px] text-primary-gray">
          Member since Mar 15, 2017
        </p>
        <div className="flex items-center justify-center gap-1">
          <Image src={FlagSmall} alt="flag-icon" />
          <span className="text-[12px] text-primary-gray">
            Report this host
          </span>
        </div>
      </div>
    </section>
  );
}

export default ReviewDetail;
