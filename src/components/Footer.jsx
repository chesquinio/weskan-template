import React from "react";

export default function Footer() {
  return (
    <footer className="h-72 bg-gray-900 grid grid-flow-row md:grid-flow-col text-white">
      <section className="flex flex-col m-auto">
        <span>Datos Relevantes</span>
        <span>dato 1</span>
        <span>dato 2</span>
      </section>
      <div className="block h-px md:h-4/6 m-auto w-4/6 md:w-px bg-gray-500"></div>
      <section className="flex flex-col m-auto">
        <span>Contacto</span>
        <span>Numero: +54 76 7335-9378</span>
      </section>
    </footer>
  );
}
