"use client";
import { useState, useEffect, use } from "react";
import Social from "@/components/social";
import Menu from "@/components/menu";

const header = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`fixed w-screen top-0 z-50 px-4 lg:px-8 pb-4 transition-all duration-500 ease-in-out animate-fade-down ${
          scrolled ? "pt-4 bg-lightwhite/90 shadow" : "pt-12"
        }
      
        `}
      >
        <div className="w-full flex items-center justify-between">
          <div className="flex-1">
            <button
              className="hamburger transition-transform"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div>
            <button onClick={handleScroll} className="cursor-pointer">
              <img
                src="assets/logo.svg"
                alt="logo"
                className={`${
                  scrolled ? "w-48 lg:w-54" : "w-52 lg:w-70"
                } h-auto transition-all duration-300 hover:scale-105`}
              />
            </button>
          </div>
          <div className="flex flex-1 justify-end ">
            <div className="hidden lg:flex">
              <Social size="sm" />
            </div>
          </div>
        </div>
      </header>

      <Menu open={open} setOpen={setOpen} />
    </>
  );
};

export default header;
