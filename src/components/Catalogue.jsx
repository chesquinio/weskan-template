import React from "react";
import Footer from "./Footer";

export default function Catalogue() {
  return (
    <>
      <section className="bg-gray-100 min-h-[calc(100vh-80px)]">
        <div className="w-full h-full grid grid-flow-row md:grid-flow-col gap-5 pt-5 md:pt-20 pb-5">
          <div className="m-auto w-80 h-80 hover:w-96 hover:h-96 bg-gray-500 flex flex-col justify-end p-5 text-white transition-all duration-500">
            <h3 className="font-semibold text-xl mb-2">Titulo</h3>
            <a href="/catalogo/valvulas">Catalogo del Producto</a>
          </div>
          <div className="m-auto w-80 h-80 hover:w-96 hover:h-96 bg-gray-500 flex flex-col justify-end p-5 text-white transition-all duration-500">
            <h3 className="font-semibold text-xl mb-2">Titulo</h3>
            <a href="/catalogo/valvulas">Catalogo del Producto</a>
          </div>
          <div className="m-auto w-80 h-80 hover:w-96 hover:h-96 bg-gray-500 flex flex-col justify-end p-5 text-white transition-all duration-500">
            <h3 className="font-semibold text-xl mb-2">Titulo</h3>
            <a href="/catalogo/valvulas">Catalogo del Producto</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
