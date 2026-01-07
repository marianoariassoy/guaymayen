"use client";
import { Star } from "@/lib/icons";
import { useInView } from "react-intersection-observer";

const nuevo = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      className="lg:h-screen flex justify-center items-center bg-top bg-cover relative"
      style={{ backgroundImage: "url(/assets/bg-nuevo.jpg)" }}
      id="nuevo"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 lg:w-300 mx-auto animate-float z-30"
        style={{ animationDelay: "1s" }}
      >
        <img src="/assets/choco-1.png" className="w-full" alt="Chocolates" />
      </div>
      <div className="absolute top-40 left-8 w-150 lg:w-300 mx-auto animate-float z-30">
        <img src="/assets/choco-2.png" className="w-full " alt="Chocolates 2" />
      </div>
      <div
        className="absolute top-40 lg:top-20 right-8 w-150 lg:w-300 mx-auto animate-float z-30"
        style={{ animationDelay: "2s" }}
      >
        <img src="/assets/choco-3.svg" className="w-full " alt="Chocolates 3" />
      </div>

      <div
        className={`p-4 max-w-xl flex flex-col gap-y-4 lg:gap-y-10 text-center py-30 z-40 opacity-0 ${
          inView ? "animate-fade-up" : ""
        }`}
        ref={ref}
      >
        <h1 className="text-white text-3xl lg:text-6xl font-black font-display">
          Algo nuevo
          <br />
          está llegando!
        </h1>
        <h2 className="uppercase tracking-widest text-center text-lg lg:text-2xl font-semibold text-pink-2">
          Muy Pronto. <br className="lg:hidden" /> Guaymallén Rubí
        </h2>
        <div className="flex items-center justify-center gap-x-4 text-pink-2 mt-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </section>
  );
};

export default nuevo;
