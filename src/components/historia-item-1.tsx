const HistoriaItem1 = () => {
  return (
    <article className="w-full lg:h-screen py-8 bg-linear-to-b from-black from-0% via-browndark2 via-30% to-browndark2 to-100% relative px-10 lg:px-0">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-150 lg:w-300 mx-auto animate-float z-40">
        <img src="/assets/choco-20.svg" className="w-full" alt="Chocolates" />
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-150 lg:w-300 mx-auto animate-float z-40">
        <img src="/assets/choco-21.svg" className="w-full" alt="Chocolates" />
      </div>
      <div className="mb-16 flex justify-center mt-8">
        <div className="border border-white rounded-full px-8 lg:px-12 py-2 tracking-widest font-semibold lg:text-lg uppercase text-white inline-block mx-auto ">
          Nuestra Historia
        </div>
      </div>
      <div className="w-full max-w-4xl m-auto flex flex-col gap-y-4 lg:gap-y-16 px-4">
        <h1 className="font-display text-2xl lg:text-5xl font-black text-gold-2 text-center">
          80 años en la familia argentina
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-x-12 gap-y-4">
          <div className="lg:w-1/2">
            <img
              src="/assets/foto-historia.png"
              className="max-w-60 w-full lg:max-w-none"
              alt="Foto Historia"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-y-4 text-center lg:text-left">
            <h2 className="font-display text-lg lg:text-3xl font-bold text-brown-2 leading-5 lg:leading-8">
              Desde 1945, haciendo alfajores con el corazón.
            </h2>
            <p className="text-sm lg:text-lg leading-5 lg:leading-6 mb-8">
              Nuestra historia empezó en 1945, cuando{" "}
              <strong>Ulpiano Fernández</strong> comenzó operando desde las
              instalaciones de una panadería alquilada y en 1972 ya contaba con
              una planta de 1200 mt2, 60 empleados y una producción de 180.000
              alfajores diarios. <br /> <br />
              Desde el inicio entendimos algo simple:{" "}
              <strong>
                la gente quería un alfajor rico, accesible y con sabor de
                verdad.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HistoriaItem1;
