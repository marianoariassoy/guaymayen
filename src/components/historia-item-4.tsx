const HistoriaItem1 = () => {
  return (
    <article className="w-full h-full py-16 bg-linear-to-b from-black from-0% via-browndark2 via-30% to-browndark2 to-100% relative px-4">
      <div className="absolute top-30 left-1/2 -translate-x-1/2 w-150 lg:w-300 mx-auto animate-float">
        <img src="/assets/choco-21.svg" className="w-full" alt="Chocolates" />
      </div>
      <div className="absolute top-0 left-0 w-full">
        <img
          src="/assets/img-historia.png"
          className="w-full mx-auto max-w-4xl"
          alt="Imagen Historia"
        />
      </div>
      <div className="w-full mt-30 max-w-2xl m-auto flex flex-col text-white text-center z-40 text-lg lg:text-3xl">
        <div className="flex justify-center">
          <img
            className="w-50 animate-spin [animation-duration:20s]"
            src="/assets/80anios-2.svg"
            alt="80 anios"
          />
        </div>
        <h1 className=" font-medium mb-4">
          Hoy contamos con dos plantas propias de{" "}
          <span className="font-bold">6.000 m².</span>
        </h1>
        <h2 className=" font-bold">
          Más de 170 trabajadores y un consumo diario de 70 toneladas de
          materias primas,{" "}
          <span className="text-gold-2">
            que nos permiten producir 40.000 cajas de alfajores todos los días.{" "}
          </span>
        </h2>
      </div>
    </article>
  );
};

export default HistoriaItem1;
