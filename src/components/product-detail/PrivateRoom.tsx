import React from "react";
import Image from "next/image";
import Avatar from "../../public/images/product-detail/avatar.svg";
import House from "../../public/images/product-detail/house.svg";
import Flag from "../../public/images/product-detail/flag.svg";
import Wifi from "../../public/images/product-detail/wifi.svg";
import Computer from "../../public/images/product-detail/computer.svg";
import Medicine from "../../public/images/product-detail/medicine.svg";
import Apple from "../../public/images/product-detail/apple.svg";
import Paper from "../../public/images/product-detail/paper.svg";
import Hambuger from "../../public/images/product-detail/hambuger.svg";
import Card from "../../public/images/product-detail/card.svg";
import Building from "../../public/images/product-detail/building.svg";
import Star from "../../public/images/star.svg";
import AvatarPrivate from "../../public/images/product-detail/avatar.png";
import UserIcon from "../../public/images/product-detail/user.png";
import Calender from "../../public/images/product-detail/calender.png";
import Shop from "../../public/images/product-detail/shop.svg";
import FlagSmall from "../../public/images/product-detail/flag-small.svg";
import Button from "../Button";

function PrivateRoom() {
  return (
    <section>
      <div className="flex pb-[61px] gap-12">
        <div className="lg:w-[56.7%] md:w-full w-full">
          <div className="pb-6 border-b border-second-gray">
            <h2 className="text-2xl font-bold text-main-gary">
              Private room in house
            </h2>
            <div className="flex items-center mt-2">
              <span className="text-[14px] text-primary-gray">Hosted by</span>
              <Image src={Avatar} alt="Zoe Towne" className="ml-1" />
              <span className="ml-3 font-medium text-main-gary">Zoe Towne</span>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2">
              <Image src={House} alt="house-icon" />
              <span className="text-[14px] text-primary-gray">2 guest</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Flag} alt="house-icon" />
              <span className="text-[14px] text-primary-gray">1 bedroom</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Flag} alt="house-icon" />
              <span className="text-[14px] text-primary-gray">
                1 private bath
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <p className="leading-6 text-primary-gray">
              Described by Queenstown House &#x26; Garden magazine as having
              &#x27;one of the best views we&#x27;ve ever seen&#x27; you will
              love relaxing in this newly built, architectural house sitting
              proudly on Queenstown Hill.
            </p>
            <p className="leading-6 text-primary-gray">
              Enjoy breathtaking 180&#x27; views of Lake Wakatipu from your well
              appointed &#x26; privately accessed bedroom with modern en suite
              and floor-to-ceiling windows.
            </p>
            <p className="leading-6 text-primary-gray">
              Your private patio takes in the afternoon sun, letting you soak up
              unparalleled lake and mountain views by day and the stars & city
              lights by night.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-[24px] text-main-gary font-semibold">
              Amenities
            </h3>
            <div className="flex md:gap-20 sm:gap-4 gap-4 mt-8 md:flex-row sm:flex-row flex-col">
              <ul className="flex flex-col gap-6">
                <li className="flex items-center gap-4 font-medium text-primary-gray">
                  <Image src={Wifi} alt="free wifi 24/7" />
                  <span>Free wifi 24/7</span>
                </li>
                <li className="flex items-center gap-4 font-medium text-primary-gray">
                  <Image src={Computer} alt="Free computer" />
                  <span>Free computer</span>
                </li>
                <li className="flex items-center gap-4 font-medium text-primary-gray">
                  <Image src={Medicine} alt="free wifi 24/7" />
                  <span>Free wifi 24/7</span>
                </li>
                <li className="flex items-center gap-4 font-medium text-primary-gray">
                  <Image src={Apple} alt="free wifi 24/7" />
                  <span>Free wifi 24/7</span>
                </li>
              </ul>
              <span className="w-[1px] md:block sm:hidden hidden bg-second-gray"></span>
              <span className="w-full h-[1px] bg-second-gray md:hidden sm:block block"></span>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center gap-4 font-medium text-primary-gray">
                  <Image src={Paper} alt="Free clean bathroom" />
                  <span>Free clean bathroom</span>
                </li>
                <li className="flex items-center gap-4 font-medium text-primary-gray">
                  <Image src={Hambuger} alt="Breakfast included" />
                  <span>Breakfast included</span>
                </li>
                <li className="flex items-center gap-4 font-medium text-primary-gray">
                  <Image src={Card} alt="ATM" />
                  <span>ATM</span>
                </li>
                <li className="flex items-center gap-4 font-medium text-primary-gray">
                  <Image src={Building} alt="Nearby city" />
                  <span>Nearby city</span>
                </li>
              </ul>
            </div>
          </div>
          <Button
            href="#"
            style="font-bold text-main-gary border-2 border-second-gray rounded-[90px] px-4 py-3 mt-12"
          >
            More detail
          </Button>
        </div>
        <div className="lg:flex md:hidden hidden w-[40%] max-h-[664px] flex-col gap-8 p-8 rounded-3xl border border-second-gray">
          <div className="flex justify-between">
            <div>
              <div>
                <span className="font-bold text-somewhere-price line-through text-[32px] mr-3">
                  $119
                </span>
                <span className="font-bold text-main-gary text-[32px] mr-[9px]">
                  $102
                </span>
                <span className="text-primary-gray">/night</span>
              </div>
              <div className="flex gap-2">
                <Image src={Star} alt="star" />
                <span className="text-main-gary text-[14px]">4.8</span>
                <span className="text-primary-gray text-[14px]">
                  (256 reviews)
                </span>
              </div>
            </div>
            <Image
              src={AvatarPrivate}
              alt="avatar"
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="rounded-[16px] bg-somewhere p-5">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <Image
                  src={Calender}
                  alt="check-in"
                  className="w-8 h-8 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-[12px] text-primary-gray">
                    Check-in
                  </span>
                  <span className="text-main-gary font-medium">
                    May 15, 2021
                  </span>
                </div>
              </div>
              <span className="w-[1px] h-12 bg-second-gray"></span>
              <div className="flex gap-3">
                <Image
                  src={Calender}
                  alt="check-in"
                  className="w-8 h-8 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-[12px] text-primary-gray">
                    Check-out
                  </span>
                  <span className="text-main-gary font-medium">
                    May 22, 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <Image
                src={UserIcon}
                alt="check-in"
                className="w-8 h-8 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[12px] text-primary-gray">Guest</span>
                <span className="text-main-gary font-medium">2 guests</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              href="#"
              style="border-2 border-second-gray rounded-[90px] px-6 py-4 flex items-center justify-center gap-3 max-h-[48px] w-[114px]"
            >
              <span className="font-bold text-main-gary">Save</span>
              <span className="text-primary-gray font-bold">+</span>
            </Button>
            <Button
              href="#"
              style="bg-primary-btn text-white-fc flex items-center justify-center gap-3 w-full rounded-[90px] font-bold"
            >
              Reserve <Image src={Shop} alt="reserve" />
            </Button>
          </div>
          <div>
            <div className="flex justify-between p-3">
              <span className="text-[14px] text-primary-gray">
                $119 x 7 nights
              </span>
              <span className="text-[14px] text-main-gary font-medium">
                $833
              </span>
            </div>
            <div className="flex justify-between p-3">
              <span className="text-[14px] text-primary-gray">
                10% campaign discount
              </span>
              <span className="text-[14px] text-main-gary font-medium">
                -$125
              </span>
            </div>
            <div className="flex justify-between p-3">
              <span className="text-[14px] text-primary-gray">Service fee</span>
              <span className="text-[14px] text-main-gary font-medium">
                $103
              </span>
            </div>
            <div className="flex justify-between p-3 bg-somewhere rounded-lg">
              <span className="text-[14px] text-main-gary font-medium">
                Total
              </span>
              <span className="text-[14px] text-main-gary font-medium">
                $833
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <Image src={FlagSmall} alt="flag-icon" />
              <span className="text-[12px] text-primary-gray">
                Report this property
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivateRoom;
