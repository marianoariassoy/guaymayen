"use client";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PlayButton from "@/components/PlayButton";

const hero = () => {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  };

  const slideImages = [
    {
      url: "/images/slide1.jpg",
      title: "¿Cuál es tu Guayma favorito?",
      subtitle: "",
    },
    {
      url: "/images/slide2.jpg",
      title: "Aquí nace la magia que endulza los hogares de Argentina",
      subtitle: "RECORRÉ LA FÁBRICA POR DENTRO",
    },
  ];

  return (
    <section className="h-screen w-screen overflow-hidden" id="hero">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/60 to-transparent h-50 w-full z-20" />

      <div className="slide-container">
        <Slide
          autoplay={true}
          duration={5000}
          infinite={true}
          transitionDuration={500}
        >
          {slideImages.map((slideImage, index) => (
            <div
              key={index}
              className="h-screen w-screen relative overflow-hidden fade-in"
            >
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
                className="h-full w-full px-4 bg-center bg-cover bg-no-repeat"
              >
                <div className="flex flex-col gap-y-2 text-center max-w-4xl mx-auto fade-in delay-200">
                  <span className="font-display text-white text-4xl lg:text-6xl font-black animate-fade ">
                    {slideImage.title}
                  </span>
                  <span className="text-white font-bold text-xl lg:text-3xl">
                    {slideImage.subtitle}
                  </span>
                  {index === 1 && (
                    <div className="flex w-fill mt-2 justify-center items-center">
                      <PlayButton />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className="hidden lg:block absolute -bottom-2 lg:-bottom-14 left-0 w-full overflow-hidden leading-none text-white animate-fade-up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full float-left"
          viewBox="0 0 1442 151"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M0.775391 150.25C0.775391 150.25 0.775391 68.4443 0.775391 68.3292C0.775391 68.2849 13.9613 68.4047 21.028 67.4305C37.2691 65.199 56.9904 59.558 71.2921 51.6234C85.5938 43.6888 98.3458 35.1875 113.568 30.9369C132.307 25.7032 152.701 26.8722 170.722 34.2842C173.423 35.3912 176.089 36.569 178.745 37.7822C182.279 39.4116 185.777 41.103 189.248 42.8476C189.416 42.9361 189.593 43.0158 189.762 43.1044C190.426 43.4409 191.09 43.7774 191.754 44.105C203.435 50.0117 215.071 56.1043 227.309 60.7889C261.589 73.9305 296.311 75.1703 330.582 65.4912C365.004 55.9095 399.133 35.4886 433.262 22.6215C467.392 9.74553 501.512 4.42335 535.641 9.03709C583.258 15.4751 625.206 40.9436 670.086 56.2549C715.081 71.6015 758.048 70.6717 801.414 49.9231C831.328 35.6037 860.401 14.1822 893.521 15.7496C924.205 17.2108 949.904 38.1276 977.648 51.3135C1002.67 63.2065 1031.02 69.0423 1058.4 64.8093C1122.3 54.9177 1169.79 -5.30889 1237.49 0.606611C1296.87 5.79596 1345.3 46.195 1401.41 62.312C1413.19 65.6949 1425.33 67.8733 1437.6 68.2541C1437.76 68.2541 1441.49 68.3641 1441.49 68.3287V150.249L0.775391 150.25Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="absolute right-0 lg:right-12 bottom-8 lg:bottom-20 z-30 animate-jump-in delay-400 overflow-hidden">
        <img
          className="w-50 animate-spin [animation-duration:20s]"
          src="/assets/80anios.svg"
          alt="80 anios"
        />
      </div>
    </section>
  );
};

export default hero;
