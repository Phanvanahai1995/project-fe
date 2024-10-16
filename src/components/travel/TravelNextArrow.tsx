import { CustomArrowProps } from "react-slick";
import ArrowRight from "../../public/images/travel/arrow-right-white.svg";
import Image from "next/image";

export default function TravelNextArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute top-[24px] right-[24px]"
      style={{
        ...style,
        display: "inline-block",
        borderRadius: "50%",
        padding: "15px 13px",
        border: "1px solid #E6E8EC",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Image src={ArrowRight} alt="arrow-right-icon" />
    </div>
  );
}
