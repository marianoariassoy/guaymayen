import { FieldError } from "react-hook-form";

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return <div className="mb-2 px-6 text-brown">{error.message} 👆🏻</div>;
};

export default Error;
