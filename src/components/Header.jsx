import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="h-20 bg-white px-5 xl:px-28 flex justify-between">
      <div className="h-full w-20 flex items-center justify-center">
        <Link to="/" className="w-10 h-10 rounded-full bg-gray-600"></Link>
      </div>
      <ul className="h-full flex flex-row items-center mr-5 font-semibold gap-5 xl:gap-10 text-gray-800">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/catalogo">Catalogo</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/pedidos">Pedidos</Link>
        </li>
      </ul>
    </nav>
  );
}
