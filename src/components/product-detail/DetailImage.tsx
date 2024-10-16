"use client";
import React, { useState } from "react";
import ImagePrimary from "../../public/images/product-detail/product/primary img.png";
import Thumb01 from "../../public/images/product-detail/product/thumb 01.png";
import Thumb02 from "../../public/images/product-detail/product/thumb 02.png";
import Thumb03 from "../../public/images/product-detail/product/thumb 03.png";
import Image from "next/image";

function DetailImage() {
  const [image, setImage] = useState(ImagePrimary);

  return (
    <div className="flex gap-2 py-16">
      <div>
        <Image src={image} alt="primary" />
      </div>
      <div className="flex-col gap-2 md:flex hidden">
        <Image
          onClick={() => setImage(Thumb01)}
          src={Thumb01}
          alt="primary"
          className="cursor-pointer"
        />
        <Image
          onClick={() => setImage(Thumb02)}
          src={Thumb02}
          alt="primary"
          className="cursor-pointer"
        />
        <Image
          onClick={() => setImage(Thumb03)}
          src={Thumb03}
          alt="primary"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default DetailImage;
