"use client";
import { Heart } from "@/lib/icons";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const oro = () => {
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
    <section className="relative">
      <div className="pointer-events-none absolute left-0 bottom-0 bg-linear-to-b from-transparent to-[#969b9e] h-70 w-full" />

      <div className="w-full px-4 py-16">
        <div className="w-full max-w-6xl m-auto flex gap-x-4 lg:gap-x-12">
          <div
            className={`w-1/2 flex flex-col z-30 opacity-0 relative ${
              inView ? "animate-fade-right" : ""
            }`}
            ref={ref}
          >
            <h2 className="font-display lg:text-3xl font-bold lg:mb-6">
              El lujo que te merecés.
            </h2>
            <h1 className="font-display text-3xl lg:text-6xl font-black">
              Platino
            </h1>
            <p className="text-sm lg:text-lg leading-5 lg:leading-6">
              Presentación elegante y sabor que enamora. <br />
              <strong>Te cruzás un Platino, es un buen día.</strong>
            </p>
            <div className="flex items-center gap-x-2 mt-6 z-30">
              <div className="font-display lg:text-xl font-extrabold rounded-full px-4 h-10 flex items-center justify-center border bg-foreground text-white">
                <span>50 grs.</span>
              </div>
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center heart">
                <button
                  className={`cursor-pointer ${
                    open ? "text-red-600" : "text-foreground hover:text-red-600"
                  }`}
                  onClick={() => setOpen(!open)}
                >
                  <Heart />
                </button>
              </span>
            </div>
          </div>
          <div
            className={`w-1/2 lg:w-2/5 z-30 opacity-0 relative ${
              inView ? "animate-fade-up" : ""
            }`}
            ref={ref2}
          >
            <div className="px-4 pb-8">
              <img
                src="/images/alfajores/platino.png"
                alt="Alfajor Platino"
                className="w-full transition-all animate-float hover:rotate-4 hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="shadow-fake-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default oro;
