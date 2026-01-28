"use client";
import { Heart } from "@/lib/icons";
import { useState } from "react";
import { alfajoresPacks } from "@/lib/data";
import { useInView } from "react-intersection-observer";

const packs = () => {
  const [open, setOpen] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section className="py-16 bg-gold" id="packs" ref={ref}>
      <div className="w-full max-w-7xl m-auto flex flex-col lg:flex-row gap-8">
        <div
          className={`flex flex-col lg:gap-y-2 lg:w-1/2 px-4 opacity-0 ${
            inView ? "animate-fade-right" : ""
          }`}
        >
          <h1 className="font-display text-3xl lg:text-6xl font-black font-browndark2">
            Guaymapacks por 6 unidades
          </h1>
          <h2 className="font-display text-white text-xl lg:text-3xl font-extrabold">
            El amigo del bolsillo
          </h2>
          <p className="font-browndark2 lg:text-xl leading-6">
            6 unidades para que nunca falte stock. <br />
            <strong>La solución más conveniente.</strong>
          </p>
          <div className="flex items-center gap-x-2 mt-4">
            <div className="lg:text-xl font-bold rounded-full px-4 h-10 flex items-center justify-center bg-white">
              <span>228 grs.</span>
            </div>
            <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
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
        <div
          className={`grid grid-cols-3  mt-4 lg:mt-0 gap-x-8 lg:gap-x-12 w-full lg:w-1/2 pb-4 px-4 opacity-0 ${
            inView ? "animate-fade-up" : ""
          }`}
        >
          {alfajoresPacks.map((item, index) => (
            <article className="flex flex-col gap-y-8 lg:min-w-30" key={index}>
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full animate-float hover:scale-105 transition-all cursor-pointer"
                  style={{ animationDelay: `${index * 1.5}s` }}
                />
                <div className="shadow-fake" style={{ bottom: "-35px" }} />
              </div>
              <div className="z-20">
                <h2 className="font-display text-base lg:text-xl font-extrabold text-white text-center leading-4 lg:leading-5">
                  {item.name}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default packs;
