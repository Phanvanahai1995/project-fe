"use client";

import React, { useState } from "react";
import Arrow from "../../public/images/product-detail/arrow.svg";
import Share from "../../public/images/product-detail/share.svg";
import Heart from "../../public/images/product-detail/heart.svg";
import More from "../../public/images/product-detail/more.svg";
import Close from "../../public/images/product-detail/close.svg";
import Image from "next/image";

function ActionDetail() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="flex xl:items-center lg:items-end md:items-end items-end gap-4 xl:flex-row lg:flex-col md:flex-row sm:flex-row flex-row lg:mt-0 md:mt-[33px] mt-[33px]">
      <div className="flex items-center gap-4">
        {showMore && (
          <>
            <div className="p-2 rounded-full border-2 border-second-gray cursor-pointer">
              <Image src={Arrow} alt="arrow-icon" />
            </div>
            <div className="p-2 rounded-full border-2 border-second-gray cursor-pointer">
              <Image src={Share} alt="arrow-icon" />
            </div>
          </>
        )}
        <div className="p-2 rounded-full border-2 border-second-gray cursor-pointer">
          <Image src={Heart} alt="arrow-icon" />
        </div>
      </div>
      {!showMore && (
        <div
          onClick={() => setShowMore(true)}
          className="p-2 rounded-full border-2 border-second-gray cursor-pointer"
        >
          <Image src={More} alt="arrow-icon" />
        </div>
      )}
      {showMore && (
        <div
          onClick={() => setShowMore(false)}
          className="p-2 rounded-full border-2 border-second-gray cursor-pointer"
        >
          <Image src={Close} alt="arrow-icon" />
        </div>
      )}
    </div>
  );
}

export default ActionDetail;
