import React from "react";
import Footer from "./Footer";

export default function Company() {
  return (
    <>
      <section className="bg-gray-200 min-h-[calc(100vh-80px)]">
        <div className="w-11/12 h-full m-auto flex flex-col lg:flex-row justify-center items-center pt-20 gap-20">
          <div>
            <h2 className="font-bold text-4xl mb-5">Weskan</h2>
            <p className="font-normal text-lg text-gray-700 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              qui quod neque nisi, dolore fuga cum reprehenderit! Quis
              consectetur est, vitae explicabo pariatur expedita molestiae porro
              voluptatum neque quidem illum!
            </p>
            <p className="font-normal text-lg text-gray-700 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              incidunt blanditiis necessitatibus aliquid cum cupiditate aliquam
              assumenda, ipsum natus facere animi illo aut illum amet
              consequatur est ab beatae eveniet.
            </p>
            <p className="font-normal text-lg text-gray-700 mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
              reprehenderit?
            </p>
          </div>
          <div className="flex bg-gray-500 rounded h-96 w-full"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
