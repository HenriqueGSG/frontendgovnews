import React, { useEffect, useRef } from "react";
import loadingAnimation from "../../lottie/99109-loading.json";
import lottie from "lottie-web";

const LoadingScreen = (props) => {
  const { categoria } = props;
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
    <div className="h-screen p-4 sm:ml-52">
      <div className="h-full p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <p className="text-2xl text-gray-400 dark:text-gray-500">
            {categoria}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-60 h-60" ref={animRef}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
