const HistoriaItem1 = () => {
  return (
    <article className="w-full h-screen py-16 bg-linear-to-b from-black from-0% via-browndark2 via-30% to-browndark2 to-100% relative px-4">
      <div className="absolute top-0 left-0">
        <img src="/assets/img-top.png" alt="Top" />
      </div>
      <div
        className="absolute top-12 left-8 w-150 lg:w-250 mx-auto animate-float"
        style={{ animationDelay: "1s" }}
      >
        <img src="/assets/choco-22.svg" className="w-full" alt="Chocolates" />
      </div>
      <div className="absolute top-12 right-4 w-150 lg:w-200 mx-auto animate-float hidden lg:block">
        <img src="/assets/choco-23.svg" className="w-full" alt="Chocolates" />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl m-auto z-40 text-foreground text-center shadow-xl px-14 lg:px-4 pt-30 lg:pt-0">
        <div className="bg-white/80 rounded-4xl p-8 lg:p-18 flex flex-col">
          <h1 className="font-display text-xl lg:text-2xl leading-6 lg:leading-7 font-bold mb-4">
            Así nació Guaymallén, un clásico popular que se ganó su lugar en
            kioscos, mochilas, meriendas y viajes en bondi.
          </h1>
          <p className="lg:text-lg leading-5 lg:leading-6">
            Hoy seguimos siendo una empresa 100% argentina y familiar, que se
            mantiene firme incluso en los momentos difíciles del país. Con
            tecnología moderna y un equipo enorme que deja todo cada día,
            producimos millones de alfajores que llegan a cada rincón de
            Argentina.
          </p>
        </div>
      </div>
    </article>
  );
};

export default HistoriaItem1;
