import { CustomArrowProps } from "react-slick";
import ArrowLeft from "../public/images/arrow-left.svg";
import Image from "next/image";

export default function SamplePrevArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute bottom-[-42px] lg:left-[48%] md:left-[46%] sm:left-[44%] left-[44%] translate-x-[-50%]"
      style={{
        ...style,
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "50%",
        padding: "8px",
      }}
      onClick={onClick}
    >
      <Image src={ArrowLeft} alt="arrow-right-icon" />
    </div>
  );
}
