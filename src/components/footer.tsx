"use client";
import { nav } from "@/lib/data";

const footer = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="w-full px-4 py-16 lg:py-24 bg-brown flex justify-center">
        <img src="/assets/logo.svg" alt="Logo" className="w-50 lg:w-80" />
      </div>
      <div className="py-10 bg-browndark px-4">
        <nav>
          <ul className="flex items-center flex-wrap justify-center gap-2 text-white text-sm lg:text-xl font-bold font-display">
            {nav.slice(0, 3).map((item) => (
              <li key={item.name}>
                <button
                  className="px-4 py-4 rounded-2xl hover:bg-brown transition-colors cursor-pointer"
                  onClick={() => handleScroll(item.target)}
                >
                  {item.name}
                </button>
              </li>
            ))}
            {nav.slice(3, 5).map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-4 rounded-2xl hover:bg-brown transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="p-4 text-center text-white bg-browndark2 text-sm lg:text-base">
        © 2025 Guaymallén. Todos los derechos reservados. Términos y
        Condiciones. Política de Privacidad.
      </div>
    </footer>
  );
};

export default footer;
