import { Star } from "@/lib/icons";

const nuevo = () => {
  return (
    <div>
      <section
        className="lg:h-screen flex justify-center items-center bg-top bg-cover"
        style={{ backgroundImage: "url(/assets/bg-nuevo.jpg)" }}
        id="nuevo"
      >
        <div className="p-4 max-w-xl flex flex-col gap-y-4 lg:gap-y-10 text-center py-30">
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
      <div className="w-full h-40 lg:h-50 bg-linear-to-b from-black from-0% via-browndark2 via-80% to-browndark2 to-100% flex items-center justify-center">
        <div className="border border-white rounded-full px-8 lg:px-12 py-2 tracking-widest font-semibold lg:text-lg uppercase text-white inline-block">
          Nuestra Historia
        </div>
      </div>
    </div>
  );
};

export default nuevo;
