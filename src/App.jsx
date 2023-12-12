import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogue from "./components/Catalogue";
import HomePage from "./components/HomePage";
import Company from "./components/Company";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Product from "./components/Product";

export default function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<Catalogue />} />
          <Route path="/catalogo/valvulas" element={<Products />} />
          <Route path="/catalogo/valvulas/producto1" element={<Product />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/pedidos" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
