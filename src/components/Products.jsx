import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <section className="bg-gray-100 min-h-[calc(100vh-80px)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-5 md:pt-20">
        <Link to="/catalogo/valvulas/producto1" className="m-auto">
          <div className="w-52 h-52 bg-gray-500"></div>
          <h4>Titulo</h4>
          <span>$9999</span>
        </Link>
        <div className="m-auto">
          <div className="w-52 h-52 bg-gray-500"></div>
          <h4>Titulo</h4>
          <span>$9999</span>
        </div>
        <div className="m-auto">
          <div className="w-52 h-52 bg-gray-500"></div>
          <h4>Titulo</h4>
          <span>$9999</span>
        </div>
        <div className="m-auto">
          <div className="w-52 h-52 bg-gray-500"></div>
          <h4>Titulo</h4>
          <span>$9999</span>
        </div>
        <div className="m-auto">
          <div className="w-52 h-52 bg-gray-500"></div>
          <h4>Titulo</h4>
          <span>$9999</span>
        </div>
        <div className="m-auto">
          <div className="w-52 h-52 bg-gray-500"></div>
          <h4>Titulo</h4>
          <span>$9999</span>
        </div>
        <div className="m-auto">
          <div className="w-52 h-52 bg-gray-500"></div>
          <h4>Titulo</h4>
          <span>$9999</span>
        </div>
        <div className="m-auto">
          <div className="w-52 h-52 bg-gray-500"></div>
          <h4>Titulo</h4>
          <span>$9999</span>
        </div>
        <div className="m-auto">
          <div className="w-52 h-52 bg-gray-500"></div>
          <h4>Titulo</h4>
          <span>$9999</span>
        </div>
      </div>
    </section>
  );
}
