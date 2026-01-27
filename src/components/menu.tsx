import { nav } from "@/lib/data";

const menu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <>
      <div
        className={`
      fixed inset-0 z-40 bg-gray-500/40 transition-opacity duration-300
      ${open ? "opacity-100 visible" : "opacity-0 invisible"}
    `}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`
      fixed top-0 left-0 z-50 h-screen w-[95%] lg:w-100 max-w-full bg-white
      transition-transform duration-300 ease-in-out rounded-tr-3xl shadow-2xl flex flex-col gap-y-12 p-8
      ${open ? "translate-x-0" : "-translate-x-full"}
    `}
      >
        <div className="w-full flex justify-end mt-2">
          <button
            className="hamburger active hover:rotate-90 transition-transform"
            onClick={() => setOpen(false)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav>
          <ul className="space-y-4 lg:space-y-6 font-display text-4xl lg:text-5xl font-black">
            {nav.slice(0, 3).map((item) => (
              <li key={item.name}>
                <button
                  style={
                    {
                      "--hover-color": item.color,
                    } as React.CSSProperties
                  }
                  className="cursor-pointer hover:pl-4 transition-all hover:text-[var(--hover-color)]"
                  onClick={() => handleScroll(item.target)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default menu;
