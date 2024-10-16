import { CustomArrowProps } from "react-slick";
import ArrowRight from "../public/images/arrow-right.svg";
import Image from "next/image";

export default function SampleNextArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className={`absolute md:left-[54%] sm:left-[56%] left-[56%] translate-x-[-50%] lg:left-[52%]`}
      style={{
        ...style,
        display: "inline-block",
        borderRadius: "50%",
        padding: "8px",
        border: "1px solid #E6E8EC",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Image src={ArrowRight} alt="arrow-right-icon" />
    </div>
  );
}
