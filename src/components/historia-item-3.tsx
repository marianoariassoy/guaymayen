import PercentRing from "@/components/percent";

const HistoriaItem1 = () => {
  return (
    <article className="w-full py-16 bg-linear-to-b from-black from-0% via-browndark2 via-30% to-browndark2 to-100% text-white px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 lg:w-300 mx-auto animate-float -scale-x-100">
        <img src="/assets/choco-21.svg" className="w-full" alt="Chocolates" />
      </div>

      <div className="w-full max-w-5xl m-auto flex flex-col gap-y-4 lg:gap-y-16 px-4">
        <h1 className="font-display text-2xl lg:text-5xl font-black  text-center z-40">
          Datos que sorprenden
        </h1>
        <div className="flex gap-8 relative">
          {/* <div className="absolute top-12 left-8 animate-float">
            <img
              src="/assets/alfajor.svg"
              className="w-full"
              alt="Chocolates"
            />
          </div> */}
          <div className="w-1/2 flex flex-col gap-y-4">
            <article className="flex flex-col px-10 py-6 rounded-3xl border border-white">
              <span className="font-display font-black text-gold-2 text-2xl lg:text-5xl">
                1.6000.000
              </span>
              <span className="font-bold text-2xl">Producción diaria</span>
            </article>
            <article className="flex flex-col px-10 py-6 rounded-3xl border border-white">
              <span className="font-display font-black text-gold-2 text-2xl lg:text-5xl">
                584.000.000
              </span>
              <span className="font-bold text-2xl">
                Alfajores se distribuyen por año
              </span>
            </article>

            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex flex-col text-right">
                <span className="font-display font-black text-gold-2 text-lg lg:text-4xl">
                  97%
                </span>
                <span className="font-bold text-xl">Mayoristas</span>
              </div>
              <div className="w-36">
                <PercentRing percent={3} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-brown-2 text-lg lg:text-4xl">
                  3%
                </span>
                <span className="font-bold text-xl">Supermercados</span>
              </div>
            </div>
          </div>
          <div className="w-1/2 text-center relative">
            <article className="flex flex-col px-10 rounded-3xl border border-white py-12">
              <span className="font-bold text-3xl mb-8">
                Materia prima por día:
              </span>
              <div className="flex flex-col mb-8">
                <span className="font-display font-black text-gold-2 text-xl lg:text-5xl">
                  25.000 kg
                </span>
                <span className="font-bold text-2xl">Dulce de leche</span>
              </div>
              <div className="flex flex-col mb-8">
                <span className="font-display font-black text-gold-2 text-xl lg:text-5xl">
                  20.000 kg
                </span>
                <span className="font-bold text-2xl">Harina</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-gold-2 text-xl lg:text-5xl">
                  11.000 kg
                </span>
                <span className="font-bold text-2xl">Azúcar</span>
              </div>
            </article>
          </div>
        </div>

        <div className="text-center font-semibold bg-brown-2 p-4 text-foreground text-lg lg:text-xl rounded-full">
          Presencia fuerte en GBA, CABA y las principales provincias del país.
        </div>
      </div>
    </article>
  );
};

export default HistoriaItem1;
