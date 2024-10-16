import { CustomArrowProps } from "react-slick";
import ArrowLeft from "../../public/images/travel/arrow-left-white.svg";
import Image from "next/image";

export default function TravelPrevArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute top-[24px] right-[72px] z-20"
      style={{
        ...style,
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "50%",
        padding: "15px 13px",
      }}
      onClick={onClick}
    >
      <Image src={ArrowLeft} alt="arrow-right-icon" />
    </div>
  );
}
