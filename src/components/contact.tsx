import Social from "@/components/social";
import Form from "@/components/form";

const contact = () => {
  return (
    <section className="bg-lightwhite px-4 py-16 scroll-mt-24" id="contacto">
      <div className="w-full max-w-4xl m-auto flex flex-col gap-y-8 lg:gap-y-12">
        <div className="font-display text-center font-black text-3xl lg:text-5xl">
          <h2 className="text-browndark2">Nuestro objetivo:</h2>
          <h2 className="text-brown">¡Que cada bocado te saque una sonrisa!</h2>
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
