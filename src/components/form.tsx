"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import Error from "./error";
import Input from "./input";
import Button from "./button";
import Loader from "./loader";

interface User {
  name: string;
  lastname: string;
  email: string;
  message: string;
}

const Page = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    setSending(true);
    const sender = {
      to: "info@alfajoresguaymallen.com.ar",
      from: "no-reply@alfajoresguaymallen.com.ar",
      from_name: "Alfajores Guaymallen",
      subject: "Contacto",
    };

    try {
      const response = await axios.post(
        "https://alfajoresguaymallen.com.ar/backend/send-email.php",
        { ...data, ...sender },
      );
      if (response?.data?.error) {
        setError(response.data.message);
        setSending(false);
      } else {
        setSended(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        setError(axiosError.response.data?.message || "Error desconocido");
      } else {
        setError("Error de conexión");
      }
      setSending(false);
    }
  };

  const errorMessage = "Este dato es obligatorio";

  if (sended)
    return (
      <div className="flex justify-center">
        <div className="text-xl lg:text-2xl text-center font-bold text-white rounded-full bg-browndark2 py-4 px-8 w-fit">
          ¡El mensaje fue enviado con éxito!
        </div>
      </div>
    );

  return (
    <section>
      <h3 className="text-browndark2 tracking-widest text-center lg:text-lg font-semibold mb-8">
        CONTACTATE CON NOSOTROS
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="text"
            placeholder="Nombre"
            register={register("name", { required: errorMessage })}
          />
          <Error error={errors.name} />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Apellido"
            register={register("lastname", {
              required: errorMessage,
              maxLength: 20,
            })}
          />
          <Error error={errors.lastname} />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email"
            register={register("email", {
              required: errorMessage,
              maxLength: 50,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Dirección de correo electrónico inválida",
              },
            })}
          />
          <Error error={errors.email} />
        </div>
        <div>
          <textarea
            className="w-full h-30 rounded-2xl bg-white/70 px-6 py-4 focus:outline-none focus:ring-0 lg:text-xl font-display font-bold placeholder:text-secondary text-secondary mb-2"
            placeholder="Mensaje"
            id="message"
            {...register("message", { required: errorMessage })}
          ></textarea>
          <Error error={errors.message} />
        </div>
        <div className="flex items-center justify-center">
          {sending ? <Loader /> : <Button>Enviar</Button>}
        </div>
      </form>
    </section>
  );
};

export default Page;
