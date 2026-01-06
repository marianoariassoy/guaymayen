"use client";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import HistoriaItem1 from "./historia-item-1";
import HistoriaItem2 from "./historia-item-2";
import HistoriaItem3 from "./historia-item-3";
import HistoriaItem4 from "./historia-item-4";
import { Forward, Back } from "@/lib/icons";

const historia = () => {
  const properties = {
    prevArrow: (
      <button className="lg:ml-10 border border-brown-2 text-brown-2 w-14 h-14 rounded-full flex items-center justify-center text-xl hover:border-white hover:text-white hover:scale-110 transition-all">
        <Back />
      </button>
    ),
    nextArrow: (
      <button className="lg:mr-10 border border-brown-2 text-brown-2 w-14 h-14 rounded-full flex items-center justify-center text-xl hover:border-white hover:text-white hover:scale-110 transition-all">
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
        transitionDuration={500}
        arrows={true}
        infinite={true}
      >
        <HistoriaItem1 />
        <HistoriaItem2 />
        <HistoriaItem3 />
        <HistoriaItem4 />
      </Slide>
    </section>
  );
};

export default historia;
