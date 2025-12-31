const ButtonForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-brown text-white hover:shadow-xl transition-all text-base lg:text-xl h-16 w-full max-w-sm rounded-xl px-4 cursor-pointer font-extrabold font-display">
      {children}
    </button>
  );
};

export default ButtonForm;
