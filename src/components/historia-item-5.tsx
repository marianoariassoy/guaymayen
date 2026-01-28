const HistoriaItem1 = () => {
  return (
    <article className="w-full h-full relative flex justify-center bg-linear-to-b from-black from-0% via-browndark2 via-30% to-browndark2 to-100% px-10 lg:px-0">
      <div className="w-full max-w-5xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-x-10 gap-y-8">
        <div className="lg:w-1/2 flex flex-col gap-y-8 lg:py-12">
          <h1 className="font-display text-xl lg:text-4xl font-black  text-center z-40">
            Datos que sorprenden
          </h1>
          <div className="flex flex-col gap-y-4 relative">
            <article className="flex flex-col px-10 py-3 lg:py-6 rounded-3xl border border-white text-center">
              <span className="font-display font-black text-gold-2 text-xl lg:text-5xl">
                4.000.000
              </span>
              <span className="font-bold lg:text-2xl">Producción diaria</span>
            </article>
            <article className="flex flex-col px-10 py-3 lg:py-6 rounded-3xl border border-white text-center">
              <span className="font-display font-black text-gold-2 text-xl lg:text-5xl">
                1.200.000.000
              </span>
              <span className="font-bold lg:text-2xl">
                Alfajores se distribuyen por año
              </span>
            </article>
          </div>
          <div className="text-center font-semibold bg-brown-2 p-4 text-foreground lg:text-xl rounded-full mb-8">
            Presencia en todo el país
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute top-0 left-0 w-full">
            <img
              src="/assets/img-historia.png"
              className="w-full mx-auto max-w-4xl"
              alt="Imagen Historia"
            />
          </div>
          <div className="w-full lg:mt-30 max-w-2xl m-auto flex flex-col text-white text-center z-40 lg:text-xl">
            <div className="flex justify-center">
              <img
                className="w-50 animate-spin [animation-duration:20s]"
                src="/assets/80anios-2.svg"
                alt="80 anios"
              />
            </div>
            <h1 className="font-medium">
              Hoy contamos con dos plantas propias de{" "}
              <span className="font-bold">6.000 m².</span>
            </h1>
            <h2 className="font-bold">
              Más de 170 trabajadores y un consumo diario de 70 toneladas de
              materias primas,{" "}
              <span className="text-gold-2">
                que nos permiten producir 40.000 cajas de alfajores todos los
                días.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HistoriaItem1;
