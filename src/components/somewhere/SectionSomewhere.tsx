import { Suspense } from "react";
import Button from "../Button";
import MenuSomeWhere from "./MenuSomeWhere";
import SomewhereProducts from "./SomewhereProducts";
import Spinner from "../Spinner";

export default function SectionSomewhere() {
  return (
    <section className="bg-somewhere lg:p-[80px] md:p-5 p-5 rounded-3xl">
      <h2 className="md:text-5xl mx-auto text-4xl text-main-gary font-bold leading-[56px]">
        Go somewhere
      </h2>
      <p className="text-2xl text-primary-gray mt-3">
        Let’s go on an adventure
      </p>
      <div>
        <MenuSomeWhere />
        <Suspense fallback={<Spinner />}>
          <SomewhereProducts />
        </Suspense>
        <div className="mt-16 text-center">
          <Button
            href="/products"
            style="text-[14px] font-bold border-2 rounded-[90px] border-second-gray px-4 py-3"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
