import React from "react";
import Button from "../Button";

export default function BookTicket() {
  return (
    <section className="pb-[136px]">
      <div className="flex md:flex-row sm:flex-col flex-col justify-between md:items-end sm:items-start md:gap-0 sm:gap-8 gap-8 px-20">
        <div>
          <p
            style={{ fontFamily: "Poppins" }}
            className="uppercase text-[12px] text-primary-gray font-bold"
          >
            fleet travel ui kit
          </p>
          <h2 className="lg:text-5xl max-w-[300px] md:text-4xl text-4xl leading-[56px] -tracking-wider mt-4 text-main-gary font-bold">
            Book a ticket and just leave
          </h2>
        </div>
        <Button
          href="#"
          style="bg-primary-btn text-center text-white-fc px-6 py-4 rounded-[90px] font-bold"
        >
          Book now
        </Button>
      </div>
      <div className="mt-20">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WhQapHmaYYE?si=0i68EQOar0GpUFsh"
          title="YouTube video player"
          className="w-full lg:h-[700px] md-[h-480px] h-[480px] rounded-2xl"
        ></iframe>
      </div>
    </section>
  );
}
