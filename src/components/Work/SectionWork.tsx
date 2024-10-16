import React from "react";
import WorkBook from "../../public/images/work/work-01.svg";
import WorkSmart from "../../public/images/work/work-02.svg";
import WorkMore from "../../public/images/work/work-03.svg";
import DashLine from "../../public/images/work/dash line.svg";
import Image from "next/image";

function SectionWork() {
  return (
    <section className="pb-[136px]">
      <h2 className="text-center lg:text-5xl md:text-4xl max-w-[648px] mx-auto text-5xl text-main-gary font-bold leading-[56px]">
        How it work
      </h2>
      <p className="text-2xl text-center text-primary-gray mt-3">
        Keep calm & travel on
      </p>
      <div className="relative flex flex-wrap justify-center items-center gap-[128px] mt-[64px]">
        <article className="flex flex-col items-center justify-center max-w-[256px]">
          <Image src={WorkBook} alt="Book & relax" />
          <h3 className="text-[24px] text-main-gary font-semibold mt-8">
            Book & relax
          </h3>
          <p className="text-[14px] text-primary-gray leading-6 text-center mt-2">
            We realize ideas from simple to complex, everything becomes easy to
            use.
          </p>
        </article>
        <article className="flex flex-col items-center max-w-[256px]">
          <Image src={WorkSmart} alt="Book & relax" />
          <h3 className="text-[24px] text-main-gary font-semibold mt-8">
            Smart checklist
          </h3>
          <p className="text-[14px] text-primary-gray leading-6 text-center mt-2">
            We realize ideas from simple to complex, everything becomes easy to
            use.
          </p>
        </article>
        <article className="flex flex-col items-center max-w-[256px]">
          <Image src={WorkMore} alt="Book & relax" />
          <h3 className="text-[24px] text-main-gary font-semibold mt-8">
            Save more
          </h3>
          <p className="text-[14px] text-primary-gray leading-6 text-center mt-2">
            We realize ideas from simple to complex, everything becomes easy to
            use.
          </p>
        </article>
        <Image
          src={DashLine}
          alt="dash-line"
          className="absolute z-[-1] top-[62.5px] left-[50%] translate-x-[-50%]"
        />
      </div>
    </section>
  );
}

export default SectionWork;
