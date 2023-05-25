import React, { useEffect, useRef } from "react";
import CardList from "../../components/CardList/CardList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import loadingAnimation from "../../lottie/99109-loading.json";
import lottie from "lottie-web";
const LoadingAnimation = () => {
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

  return <div className="w-60 h-60" ref={animRef}></div>;
};

const Assembleias = () => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["assembleias"],
    queryFn: () =>
      axios
        .get("https://fastapi1-1-s9258384.deta.app/assembleias")
        .then((res) => res.data),
  });

  if (isLoading)
    return (
      <main className="flex flex-col w-full min-h-screen items-centerjustify-start bg-neutral-200">
        <div className="flex items-center justify-center w-full bg-neutral-800 h-72">
          <h1 className="text-5xl font-semibold text-white">Assembleias</h1>
        </div>
        <div className="flex items-center justify-center w-screen text-center h-96">
          <LoadingAnimation />
        </div>
      </main>
    );
  if (error) return "An error has occurred: " + error.message;

  return (
    <main className="flex flex-col w-full min-h-screen items-centerjustify-start bg-neutral-200">
      <div className="flex items-center justify-center w-full bg-neutral-800 h-72">
        <h1 className="text-5xl font-semibold text-white">Assembleias</h1>
      </div>
      <button
        onClick={refetch}
        className="py-2 mb-2 text-xl font-semibold text-white bg-blue-600 hover:bg-blue-500"
      >
        Atualizar
      </button>
      <CardList data={data} />
    </main>
  );
};

export default Assembleias;
