import React, { useEffect, useRef } from "react";
import loadingAnimation from "../../lottie/99109-loading.json";
import lottie from "lottie-web";
import logo from "../../assets/logo.png";
import "@fontsource/merriweather"; // Importe a fonte Merriweather

const LoadingScreen = ({ categoria, name, bgColor }) => {
  const animRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingAnimation,
    });
  }, []);

  return (
    <>
      <div className="relative min-h-screen p-4 shadow-inner pt-28 sm:pt-4 sm:ml-60 bg-neutral-100 ">
        <div className="py-1 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div
            className={`flex items-center justify-center h-48 mb-4 rounded ${bgColor} dark:bg-gray-800`}
          >
            <p className="text-5xl font-semibold text-white dark:text-gray-500 font-merriweather">
              {categoria}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-60 h-60" ref={animRef}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
