import Adventure from "@/components/Adventure";
import AroundTheWorld from "@/components/around-the-world/AroundTheWorld";
import BestHome from "@/components/BestHome/BestHome";
import BookTicket from "@/components/book-ticket/BookTicket";
import SectionBrowseCategory from "@/components/browse-category/SectionBrowseCategory";
import Browse from "@/components/Browse/Browse";
import SectionExplore from "@/components/explore/SectionExplore";
import Hero from "@/components/Hero";
import SectionLive from "@/components/live-anywhere/SectionLive";
import SectionSomewhere from "@/components/somewhere/SectionSomewhere";
import Spinner from "@/components/Spinner";
import Travel from "@/components/travel/Travel";
import SectionWork from "@/components/Work/SectionWork";

import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container max-w-[1280px] mx-auto mt-[88px]">
      <Hero />
      <Adventure />
      <Travel />
      <SectionWork />
      <Suspense fallback={<Spinner />}>
        <SectionLive />
      </Suspense>
      <SectionSomewhere />
      <AroundTheWorld />
      <Browse />
      <SectionExplore />
      <BestHome />
      <BookTicket />
      <SectionBrowseCategory />
    </div>
  );
}
