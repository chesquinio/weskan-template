import React from "react";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <main>
      <div
        style={{
          backgroundImage:
            "url('https://www.nitro.pe/images/2017/setiembre/guia_valvula.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="h-40 w-full flex justify-center items-center"
      >
        <h1
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          className="font-bold text-4xl text-white"
        >
          Una empresa que crece
        </h1>
      </div>
      <section className="flex flex-col md:flex-row bg-gray-200 w-full min-h-[35rem] py-5 md:px-10 lg:px-10">
        <div className="md:w-1/3 flex flex-col justify-center items-center md:items-start m-5">
          <h2 className="mb-3 text-5xl font-semibold text-[#d4265d]">Titulo</h2>
          <p className="text-gray-600 font-normal text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            labore dolorum molestias quis repudiandae dolores reiciendis vero
            est voluptates sit nemo, sapiente provident sint aliquid eaque quia,
            iure ullam repellat? Veniam rerum laboriosam explicabo optio, dolor
            culpa maxime minima amet.
          </p>
        </div>
        <div className="md:w-2/3 flex justify-center  md:justify-end items-center m-5">
          <div className="w-80 h-52 rounded bg-gray-700"></div>
        </div>
      </section>
      <section className="bg-gray-300">
        <h3 className="text-center p-10 text-gray-800 font-semibold text-5xl">
          Productos estrellas
        </h3>
        <div className="grid grid-col-1 md:grid-cols-3 gap-5 px-5 py-10">
          <div className="m-auto">
            <div className="h-52 w-52 bg-gray-600 mb-2"></div>
            <h4 className="font-semibold text-xl text-[#d4265d]">Titulo</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit</p>
          </div>
          <div className="m-auto">
            <div className="h-52 w-52 bg-gray-600 mb-2"></div>
            <h4 className="font-semibold text-xl text-[#d4265d]">Titulo</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit</p>
          </div>
          <div className="m-auto">
            <div className="h-52 w-52 bg-gray-600 mb-2"></div>
            <h4 className="font-semibold text-xl text-[#d4265d]">Titulo</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
