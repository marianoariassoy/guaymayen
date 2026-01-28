import Social from "@/components/social";
import Form from "@/components/form";

const contact = () => {
  return (
    <section
      className="bg-lightwhite px-4 pb-16 pt-24 scroll-mt-20 relative"
      id="contacto"
    >
      <span className="absolute -top-1 right-0">
        <img src="/assets/misc-2.svg" className="w-54 lg:w-90" alt="Misc" />
      </span>

      <div className="w-full max-w-4xl m-auto flex flex-col gap-y-8 lg:gap-y-12">
        <div className="font-display text-center font-black text-2xl lg:text-5xl">
          <h2 className="text-browndark2">Nuestro objetivo:</h2>
          <h2 className="text-brown leading-7 lg:leading-normal">
            ¡Que cada bocado te saque una sonrisa!
          </h2>
        </div>

        <Form />

        <div className="flex justify-center">
          <Social size="lg" />
        </div>
      </div>
    </section>
  );
};

export default contact;
