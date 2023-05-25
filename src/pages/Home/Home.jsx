import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardList from "../../components/CardList/CardList";
import CategoryNews from "../../components/CategoryNews/CategoryNews";
export default function Home() {
  return (
    <>
      {/* NAV BAR */}

      <main className="flex flex-col flex-wrap items-center w-full h-screen gap-10 justify-top bg-neutral-200">
        <div className="flex items-center justify-center w-full bg-neutral-800 h-72">
          <h1 className="text-5xl font-semibold text-white">
            Categorias Notícias
          </h1>
        </div>
        <CategoryNews />
      </main>
      {
        /* MAIN */
        // CARDS
      }
    </>
  );
}
