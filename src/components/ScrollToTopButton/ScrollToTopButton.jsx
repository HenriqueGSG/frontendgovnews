import React, { useState, useEffect } from "react";
import { BsArrowBarUp } from "react-icons/bs";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adiciona um event listener para detectar o scroll
    window.addEventListener("scroll", handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Verifica a posição do scroll em relação ao topo da página
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Define a visibilidade do botão com base na posição do scroll
    setIsVisible(scrollTop > 400);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona uma animação de rolagem suave
    });
  };

  return (
    <button
      className={`md:hidden    shadow z-50 p-3 rounded-lg bg-blueLight text-white w-fit ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <BsArrowBarUp size={16} />
    </button>
  );
};

export default ScrollToTopButton;
