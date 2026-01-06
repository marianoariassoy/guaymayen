const HistoriaItem1 = () => {
  return (
    <article className="w-full pb-16">
      <div className="w-full max-w-4xl m-auto flex flex-col gap-y-4 lg:gap-y-16">
        <h1 className="font-display text-3xl lg:text-6xl font-black text-gold-2 text-center">
          80 años en la familia argentina
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-x-12 gap-y-4 pb-16">
          <div className="lg:w-1/2">
            <img
              src="/assets/foto-historia.png"
              className="max-w-60 w-full lg:max-w-none"
              alt="Foto Historia"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-y-4 text-center lg:text-left">
            <h2 className="font-display text-lg lg:text-3xl font-bold text-brown-2 leading-5 lg:leading-normal">
              Desde 1945, haciendo alfajores con el corazón.
            </h2>
            <p className="text-sm lg:text-lg leading-5 lg:leading-6">
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
