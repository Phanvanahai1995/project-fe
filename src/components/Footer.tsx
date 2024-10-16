import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/images/logo-2.svg";
import ArrowRight from "../public/images/arrow-right-white.svg";

function Footer() {
  return (
    <div className="border-t border-second-gray">
      <footer className="lg:max-w-[1120px] md:w-full mx-auto pt-20 xl:px-0 lg:px-20 md:px-5 px-5">
        <div className="flex gap-8 flex-wrap pb-[48px] border-b border-somewhere">
          <div className="w-[256px]">
            <Link href="/">
              <Image src={Logo} alt="" />
            </Link>
          </div>
          <div className="flex gap-[32px] flex-wrap">
            <div className="w-[160px] flex flex-col text-[12px] text-primary-gray font-bold gap-8">
              <Link href="#">About</Link>
              <Link href="#">Projects</Link>
            </div>
            <div className="w-[160px] flex flex-col text-[12px]  text-primary-gray font-bold gap-8">
              <Link href="#">What We Do</Link>
              <Link href="#">Press</Link>
            </div>
            <div className="w-[160px] flex flex-col text-[12px]  text-primary-gray font-bold gap-8">
              <Link href="#">Jobs</Link>
              <Link href="#">Download</Link>
            </div>
          </div>
          <div>
            <p className="text-[12x] font-bold uppercase text-main-gary">
              Join our community 🔥
            </p>
            <div className="relative w-fit mt-4 lg:mx-0 md:mx-auto mx-auto">
              <input
                className="border-2 border-second-gray rounded-[90px] outline-none placeholder:text-[14px] placeholder:text-primary-gray py-[14px] pr-[58px] pl-4 w-[255px]"
                type="phone"
                placeholder="Enter your phone number"
              />
              <div className="bg-primary-btn absolute px-[9px] py-3 rounded-full top-[50%] translate-y-[-50%] right-[8px] cursor-pointer">
                <Image src={ArrowRight} alt="arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-[12px] text-main-gary pt-[25px] pb-6">
          Copyright © 2021 UI8 LLC. All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
