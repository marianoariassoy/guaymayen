"use client";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import HistoriaItem1 from "./historia-item-1";
import HistoriaItem2 from "./historia-item-2";
import HistoriaItem5 from "./historia-item-5";
import { Forward, Back } from "@/lib/icons";

const historia = () => {
  const properties = {
    prevArrow: (
      <button className="ml-4 lg:ml-10 border border-brown-2 text-brown-2 w-14 h-14 rounded-full flex items-center justify-center text-xl hover:border-white hover:text-white hover:scale-110 transition-all">
        <Back />
      </button>
    ),
    nextArrow: (
      <button className="mr-4 lg:mr-10 border border-brown-2 text-brown-2 w-14 h-14 rounded-full flex items-center justify-center text-xl hover:border-white hover:text-white hover:scale-110 transition-all">
        <Forward />
      </button>
    ),
  };

  return (
    <section className="bg-browndark2 text-white scroll-mt-20" id="historia">
      <Slide
        {...properties}
        autoplay={false}
        duration={5000}
        transitionDuration={300}
        arrows={true}
        infinite={true}
      >
        <HistoriaItem1 />
        <HistoriaItem2 />
        <HistoriaItem5 />
      </Slide>
    </section>
  );
};

export default historia;
