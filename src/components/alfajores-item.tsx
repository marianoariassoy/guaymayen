"use client";
import { Heart } from "@/lib/icons";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  item: {
    name: string;
    description: string;
    weight: string;
    image: string;
    bgColor: string;
    triple: boolean;
  };
  index: number;
}

const alfajoresItem = ({ item, index }: Props) => {
  const [open, setOpen] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <article
      style={
        {
          "--hover-bg": item.bgColor,
        } as React.CSSProperties
      }
      className={`flex items-center gap-x-6 lg:gap-x-16 cursor-pointer rounded-4xl hover:[&>div>.img-alfajor>img]:-rotate-4 
         hover:[&>div>div>.triple-sticker]:scale-110  
          hover:[&>div>div>.weight]:border-foreground  
         transition-all lg:hover:bg-[var(--hover-bg)] 
      ${index % 2 === 0 ? "" : "flex-row-reverse"} `}
    >
      <div
        className={`w-2/5 -mt-12 relative inline-block opacity-0 ${
          index % 2 === 0 ? "lg:-ml-8" : ""
        } ${inView ? "animate-fade-up" : ""} lg:ml-0 lg:mr-0`}
        ref={ref}
      >
        <div className="relative img-alfajor">
          {item.triple && (
            <div
              className={`absolute -top-8 lg:top-0 triple-sticker z-10 w-20 h-20 lg:w-34 lg:h-34 border-white border-4 lg:border-8 rounded-full flex items-center justify-center text-white transition-all 
                
            ${index % 2 === 0 ? "right-0" : "left-0"}`}
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="flex flex-col items-center ">
                <img src="/assets/icon-triple.svg" alt="Icon" />
                <span className="font-black font-diplay text-base lg:text-3xl">
                  Triple
                </span>
              </div>
            </div>
          )}
          <img
            src={item.image}
            alt={item.name}
            className="w-full transition-all"
          />
        </div>
        <div className="shadow-fake" />
      </div>
      <div
        className={`flex flex-col gap-y-2 w-1/2 opacity-0 ${
          inView
            ? index % 2 === 0
              ? "animate-fade-left"
              : "animate-fade-right"
            : null
        }`}
        ref={ref2}
      >
        <h2 className="font-display text-3xl leading-6 lg:leading-12 lg:text-6xl font-black z-20">
          {item.name}
        </h2>
        <p
          className="text-sm lg:text-lg leading-5 lg:leading-6"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        <div className="flex items-center gap-x-2 mt-2">
          <div
            className="font-display lg:text-xl font-extrabold rounded-full px-4 h-10 flex items-center justify-center border border-white weight transition-all"
            style={{ backgroundColor: item.bgColor }}
          >
            <span>{item.weight}</span>
          </div>
          <span className="w-10 h-10 border border-foreground rounded-full flex items-center justify-center heart">
            <button
              className={`cursor-pointer ${
                open ? "text-red-600" : "hover:text-red-600"
              }`}
              onClick={() => setOpen(!open)}
            >
              <Heart />
            </button>
          </span>
        </div>
      </div>
    </article>
  );
};

export default alfajoresItem;
