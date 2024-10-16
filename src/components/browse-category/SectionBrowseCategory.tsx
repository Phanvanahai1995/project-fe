import React from "react";
import BrowseCategoryCarousel from "./BrowseCategoryCarousel";

export default function SectionBrowseCategory() {
  return (
    <section className="pb-[200px] max-w-[1120px] mx-auto">
      <h2 className="text-center lg:text-5xl md:text-4xl max-w-[648px] mx-auto text-5xl text-main-gary font-bold leading-[56px]">
        Browse by category
      </h2>
      <p className="text-2xl text-center text-primary-gray mt-3">
        Let’s go on an adventure
      </p>
      <div>
        <BrowseCategoryCarousel />
      </div>
    </section>
  );
}
