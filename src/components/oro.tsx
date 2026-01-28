"use client";
import { Heart } from "@/lib/icons";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const oro = () => {
  const [open, setOpen] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="relative">
      <div
        className="absolute left-0 top-1/2 -translate-x-100 -translate-y-1/2 w-full h-full rounded-full blur-[120px] z-10"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(243, 215, 151, 0.8) 0%,
              rgba(255, 170, 60, 0.35) 35%,
              rgba(120, 50, 10, 0.25) 55%,
              transparent 90%
            )
          `,
        }}
      />

      <div className="w-full overflow-hidden translate-y-1 ">
        <div className="relative w-[200%] animate-wave text-browndark2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 float-left translate-x-1"
            viewBox="0 0 1442 151"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M0.775391 150.25C0.775391 150.25 0.775391 68.4443 0.775391 68.3292C0.775391 68.2849 13.9613 68.4047 21.028 67.4305C37.2691 65.199 56.9904 59.558 71.2921 51.6234C85.5938 43.6888 98.3458 35.1875 113.568 30.9369C132.307 25.7032 152.701 26.8722 170.722 34.2842C173.423 35.3912 176.089 36.569 178.745 37.7822C182.279 39.4116 185.777 41.103 189.248 42.8476C189.416 42.9361 189.593 43.0158 189.762 43.1044C190.426 43.4409 191.09 43.7774 191.754 44.105C203.435 50.0117 215.071 56.1043 227.309 60.7889C261.589 73.9305 296.311 75.1703 330.582 65.4912C365.004 55.9095 399.133 35.4886 433.262 22.6215C467.392 9.74553 501.512 4.42335 535.641 9.03709C583.258 15.4751 625.206 40.9436 670.086 56.2549C715.081 71.6015 758.048 70.6717 801.414 49.9231C831.328 35.6037 860.401 14.1822 893.521 15.7496C924.205 17.2108 949.904 38.1276 977.648 51.3135C1002.67 63.2065 1031.02 69.0423 1058.4 64.8093C1122.3 54.9177 1169.79 -5.30889 1237.49 0.606611C1296.87 5.79596 1345.3 46.195 1401.41 62.312C1413.19 65.6949 1425.33 67.8733 1437.6 68.2541C1437.76 68.2541 1441.49 68.3641 1441.49 68.3287V150.249L0.775391 150.25Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 float-left"
            viewBox="0 0 1442 151"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              d="M0.775391 150.25C0.775391 150.25 0.775391 68.4443 0.775391 68.3292C0.775391 68.2849 13.9613 68.4047 21.028 67.4305C37.2691 65.199 56.9904 59.558 71.2921 51.6234C85.5938 43.6888 98.3458 35.1875 113.568 30.9369C132.307 25.7032 152.701 26.8722 170.722 34.2842C173.423 35.3912 176.089 36.569 178.745 37.7822C182.279 39.4116 185.777 41.103 189.248 42.8476C189.416 42.9361 189.593 43.0158 189.762 43.1044C190.426 43.4409 191.09 43.7774 191.754 44.105C203.435 50.0117 215.071 56.1043 227.309 60.7889C261.589 73.9305 296.311 75.1703 330.582 65.4912C365.004 55.9095 399.133 35.4886 433.262 22.6215C467.392 9.74553 501.512 4.42335 535.641 9.03709C583.258 15.4751 625.206 40.9436 670.086 56.2549C715.081 71.6015 758.048 70.6717 801.414 49.9231C831.328 35.6037 860.401 14.1822 893.521 15.7496C924.205 17.2108 949.904 38.1276 977.648 51.3135C1002.67 63.2065 1031.02 69.0423 1058.4 64.8093C1122.3 54.9177 1169.79 -5.30889 1237.49 0.606611C1296.87 5.79596 1345.3 46.195 1401.41 62.312C1413.19 65.6949 1425.33 67.8733 1437.6 68.2541C1437.76 68.2541 1441.49 68.3641 1441.49 68.3287V150.249L0.775391 150.25Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="w-full px-4 bg-browndark2 py-6 lg:py-0 z-30">
        <div className="w-full max-w-6xl m-auto text-white flex items-center gap-x-6 lg:gap-x-16 relative">
          <div
            className={`w-1/2 lg:w-2/5 z-30 opacity-0 relative ${
              inView ? "animate-fade-up" : ""
            }`}
            ref={ref}
          >
            <div className="px-4 pb-8">
              <img
                src="/images/alfajores/oro.png"
                alt="Alfajore Oro"
                className="w-full transition-all animate-float hover:-rotate-4 cursor-pointer hover:scale-105"
              />
            </div>
            <div className="shadow-fake-2" />
          </div>
          <div
            className={`w-1/2 flex flex-col z-30 opacity-0 relative ${
              inView ? "animate-fade-left" : ""
            }`}
            ref={ref2}
          >
            <h2 className="font-display lg:text-3xl font-bold lg:mb-6">
              La joya de la corona.
            </h2>
            <h1 className="font-display text-3xl lg:text-6xl font-black text-gold-2">
              De Oro
            </h1>
            <p className="text-sm lg:text-lg leading-5 lg:leading-6">
              Cobertura intensa y un interior superabundante. <br />
              <strong>El alfajor que subió la apuesta.</strong>
            </p>
            <div className="flex items-center gap-x-2 mt-6">
              <div className="font-display lg:text-xl font-extrabold rounded-full px-4 h-10 flex items-center justify-center border bg-gold-2 text-foreground">
                <span>48 grs.</span>
              </div>
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center heart">
                <button
                  className={`cursor-pointer ${
                    open ? "text-red-600" : "text-foreground hover:text-red-600"
                  }`}
                  onClick={() => setOpen(!open)}
                >
                  <Heart />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden -translate-y-1 scale-x-[-1] scale-y-[-1]">
        <div className="relative w-[200%]  animate-wave text-browndark2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 float-left"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 float-left -translate-x-1"
            viewBox="0 0 1442 151"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              d="M0.775391 150.25C0.775391 150.25 0.775391 68.4443 0.775391 68.3292C0.775391 68.2849 13.9613 68.4047 21.028 67.4305C37.2691 65.199 56.9904 59.558 71.2921 51.6234C85.5938 43.6888 98.3458 35.1875 113.568 30.9369C132.307 25.7032 152.701 26.8722 170.722 34.2842C173.423 35.3912 176.089 36.569 178.745 37.7822C182.279 39.4116 185.777 41.103 189.248 42.8476C189.416 42.9361 189.593 43.0158 189.762 43.1044C190.426 43.4409 191.09 43.7774 191.754 44.105C203.435 50.0117 215.071 56.1043 227.309 60.7889C261.589 73.9305 296.311 75.1703 330.582 65.4912C365.004 55.9095 399.133 35.4886 433.262 22.6215C467.392 9.74553 501.512 4.42335 535.641 9.03709C583.258 15.4751 625.206 40.9436 670.086 56.2549C715.081 71.6015 758.048 70.6717 801.414 49.9231C831.328 35.6037 860.401 14.1822 893.521 15.7496C924.205 17.2108 949.904 38.1276 977.648 51.3135C1002.67 63.2065 1031.02 69.0423 1058.4 64.8093C1122.3 54.9177 1169.79 -5.30889 1237.49 0.606611C1296.87 5.79596 1345.3 46.195 1401.41 62.312C1413.19 65.6949 1425.33 67.8733 1437.6 68.2541C1437.76 68.2541 1441.49 68.3641 1441.49 68.3287V150.249L0.775391 150.25Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default oro;
