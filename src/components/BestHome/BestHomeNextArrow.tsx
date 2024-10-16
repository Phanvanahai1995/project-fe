import { CustomArrowProps } from "react-slick";
import ArrowRight from "../../public/images/arrow-right.svg";
import Image from "next/image";

export default function BestHomeNextArrow(props: CustomArrowProps) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute md:top-[-100px] md:right-3 sm:right-auto md:left-auto sm:left-10 sm:bottom-[-5.5rem] bottom-[-5.5rem] left-10"
      style={{
        ...style,
        display: "inline-block",
        borderRadius: "50%",
        padding: "8px",
        border: "1px solid #E6E8EC",
        cursor: "pointer",
        maxWidth: "40px",
        maxHeight: "40px",
      }}
      onClick={onClick}
    >
      <Image src={ArrowRight} alt="arrow-right-icon" />
    </div>
  );
}
