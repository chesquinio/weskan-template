import React from "react";
import Footer from "./Footer";

export default function Orders() {
  return (
    <>
      <section className="bg-gray-300 min-h-[calc(100vh-80px)]">
        <div className="w-full pt-20">
          <form className="w-5/6 lg:w-1/2 xl:w-1/3 m-auto bg-white p-5">
            <div className="mb-4">
              <label className="block text-xl font-normal mb-3">Campo 1</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none focus:border border-pink-400 py-2 px-4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-normal mb-3">Campo 2</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none focus:border border-pink-400 py-2 px-4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-normal mb-3">Campo 3</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none focus:border border-pink-400 py-2 px-4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xl font-normal mb-3">Campo 4</label>
              <textarea className="w-full bg-transparent outline-none focus:border border-pink-400 py-2 px-4" />
            </div>
            <button
              type="button"
              className="w-full py-2 px-4 bg-pink-400 text-white text-xl font-normal hover:bg-pink-500 transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
