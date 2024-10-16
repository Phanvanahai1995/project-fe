import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  style: string;
};

function Button({ children, href, style }: ButtonProps) {
  return (
    <Link
      className={`${style} inline-block hover:shadow-md hover:shadow-sky-500/100 transition duration-300 active:scale-105`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default Button;
