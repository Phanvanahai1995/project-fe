import { CustomArrowProps } from "react-slick";
import ArrowLeft from "../../public/images/arrow-left.svg";
import Image from "next/image";

export default function BestHomePreArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute md:top-[-165px] md:right-16 sm:bottom-[-5.5rem] bottom-[-5.5rem]"
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
