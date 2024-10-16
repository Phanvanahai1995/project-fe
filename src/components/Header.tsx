import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/images/logo.svg";
import ArrowIcon from "../public/images/arrow-down.svg";
import Global from "../public/images/global.svg";
import Notification from "../public/images/notification.svg";
import Avatar from "../public/images/avatar.png";
import Menu from "../public/images/menu-list.svg";

function Header() {
  return (
    <div className="container bg-white max-w-[1280px] mx-auto py-[20px] px-4 md:px-20  fixed top-0 left-0 right-0 max-h-[88px] z-[9999]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[40px]">
          <Link href="/">
            <Image src={Logo} alt="fleet" />
          </Link>
          <span className="w-[1px] h-[48px] lg:inline-block md:hidden hidden  bg-second-gray"></span>
          <div className="lg:flex md:hidden hidden items-center gap-2">
            <select className="text-sm font-bold text-primary-gray">
              <option value="1">Travelers</option>
            </select>
            <Image src={ArrowIcon} alt="arrow-icon" />
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <Link
            className="text-sm xl:block lg:hidden md:hidden hidden font-bold text-primary-gray"
            href="/support"
          >
            Support
          </Link>
          <div className="xl:flex lg:hidden md:hidden hidden items-center gap-3 px-4 py-3">
            <Image src={Global} alt="global" />
            <select className="text-sm font-bold text-primary-gray">
              <option>Language</option>
            </select>
          </div>
          <div className="tex-sm lg:block md:hidden hidden text-main-black px-4 py-3 font-bold border-2 rounded-[90px] border-second-gray">
            <Link href="#">List your property</Link>
          </div>
          <div className="relative">
            <Link href="#">
              <Image src={Notification} alt="notification" />
            </Link>
            <span className="inline-block w-3 h-3 rounded-full bg-primary-blue absolute -top-2 -right-2"></span>
          </div>
          <div>
            <Image
              src={Avatar}
              alt="avatar"
              className="w-10 h-10 object-cover"
            />
          </div>
          <div className="md:hidden sm:block block">
            <Image src={Menu} alt="avatar" className="w-10 h-10 object-cover" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
