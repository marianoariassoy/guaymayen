import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type, placeholder, register }: Input) => {
  return (
    <input
      type={type}
      className="w-full h-16 rounded-2xl bg-white/70 px-6 focus:outline-none focus:ring-0 lg:text-xl font-display font-bold placeholder:text-secondary text-secondary mb-2"
      placeholder={placeholder}
      {...register}
    />
  );
};

export default Input;
