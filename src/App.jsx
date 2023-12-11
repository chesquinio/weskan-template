import React from "react";

export default function App() {
    return (
        <body>
            <header className="w-full h-20 bg-white flex justify-between">
                <div className="h-full w-20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                </div>
                <ul className="h-full flex flex-row items-center mr-5 font-semibold gap-5 text-gray-800">
                    <li>Inicio</li>
                    <li>Catalogo</li>
                    <li>Sobre Nosotros</li>
                    <li>Pedidos</li>
                </ul>
            </header>
            <main>
                <div 
                    style={{
                        backgroundImage: "url('https://www.nitro.pe/images/2017/setiembre/guia_valvula.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }} 
                    className="h-40 w-full flex justify-center items-center">
                    <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} className="font-bold text-4xl text-white">Guías de Valvulas</h1>
                </div>
                <section className="flex flex-col md:flex-row bg-gray-200 w-full min-h-96 py-5">
                    <div className="md:w-1/3 flex flex-col justify-center items-center md:items-start m-5">
                        <h2 className="mb-3 text-3xl font-semibold text-gray-800">Titulo</h2>
                        <p className="text-gray-600 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio labore dolorum molestias quis repudiandae dolores reiciendis vero est voluptates sit nemo, sapiente provident sint aliquid eaque quia, iure ullam repellat? Veniam rerum laboriosam explicabo optio, dolor culpa maxime minima amet.</p>
                    </div>
                    <div className="md:w-2/3 flex justify-center  md:justify-end items-center m-5">
                        <div className="w-80 h-52 rounded bg-gray-700"></div>
                    </div>
                </section>
                <section className="bg-gray-300">
                    <h3 className="text-center p-10 text-gray-700 font-semibold text-4xl">Productos estrellas</h3>
                    <div className="w-11/12 m-auto bg-gray-500 h-px"></div>
                    <div className="grid grid-col-1 md:grid-cols-3 gap-5 px-5 py-10">
                        <div className="m-auto">
                            <div className="h-52 w-52 bg-gray-600 mb-2"></div>
                            <h4 className="font-semibold text-xl">Titulo</h4>
                            <p className="text-gray-700">Lorem ipsum dolor sit</p>
                        </div>
                        <div className="m-auto">
                            <div className="h-52 w-52 bg-gray-600 mb-2"></div>
                            <h4 className="font-semibold text-xl">Titulo</h4>
                            <p className="text-gray-700">Lorem ipsum dolor sit</p>
                        </div>
                        <div className="m-auto">
                            <div className="h-52 w-52 bg-gray-600 mb-2"></div>
                            <h4 className="font-semibold text-xl">Titulo</h4>
                            <p className="text-gray-700">Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                </section>
            </main>
        </body>
    )
}