import React from "react";
import Footer from "./Footer";

export default function Product() {
  return (
    <>
      <div className="bg-gray-100 min-h-[calc(100vh-80px)]">
        <div className="flex flex-col lg:flex-row w-5/6 m-auto pt-5 md:pt-20">
          <div className="m-auto">
            <div className="bg-gray-500 rounded m-10 w-52 h-52 md:w-96 md:h-96"></div>
          </div>
          <div className="lg:ml-10 mt-10 mb-10">
            <h2 className="font-semibold text-4xl mb-4 md:mb-8">Producto</h2>
            <p className="font-normal text-lg lg:w-2/3 mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur maxime quod doloribus minus, quis repudiandae tempore
              voluptates nam magnam error nihil perferendis neque impedit
              exercitationem iusto quas sequi cumque rerum.
            </p>
            <span className="font-bold text-xl">$9999</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
