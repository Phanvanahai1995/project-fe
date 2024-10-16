import React from "react";
import Button from "./Button";
import HeroActions from "./HeroActions";

function Hero() {
  return (
    <section className="bg-hero-banner h-[776px] lg:rounded-3xl md:rounded-[20px] rounded-[20px] bg-cover bg-center relative">
      <div className="pt-[145px] md:ml-[80px] sm:ml-0 ml-0">
        <h1 className="text-[96px] font-bold md:text-left sm:text-center text-center w-auto md:max-w-[480px] leading-[96px] text-main-black">
          Air, sleep, dream
        </h1>
        <p className="text-2xl leading-[32px] md:text-left text-center text-main-gary mt-4">
          Find and book a great experience.
        </p>
        <div className="flex md:justify-start sm:justify-center justify-center">
          <Button
            href="#"
            style="bg-primary-btn text-white font-bold px-6 py-4  rounded-[90px] mt-6"
          >
            Start your search
          </Button>
        </div>
      </div>
      <HeroActions />
    </section>
  );
}

export default Hero;
