const HistoriaItem1 = () => {
  return (
    <article className="w-full h-full py-16 bg-linear-to-b from-black from-0% via-browndark2 via-30% to-browndark2 to-100% relative px-4">
      <div className="absolute top-0 left-0 w-full">
        <img
          src="/assets/img-historia.png"
          className="w-full mx-auto max-w-5xl"
          alt="Imagen Historia"
        />
      </div>
      <div className="w-full mt-40 max-w-xl m-auto flex flex-colz-40 text-white text-center flex-col gap-y-4 z-40">
        <div className="flex justify-center">
          <img
            className="w-50 animate-spin [animation-duration:20s]"
            src="/assets/80anios.svg"
            alt="80 anios"
          />
        </div>
        <h1 className="text-lg lg:text-3xl font-medium">
          Hoy contamos con dos plantas propias de <strong>6.000 m².</strong>
        </h1>
        <h2 className="text-lg lg:text-3xl font-bold">
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
