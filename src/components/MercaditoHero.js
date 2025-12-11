import React from "react";

const MercaditoHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Productos de limpieza a tu alcance,{" "}
            <span className="text-blue-600">fácil y rápido</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Encuentra detergentes, desinfectantes y accesorios de limpieza.
            Calidad garantizada y entrega eficiente.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
            Ver productos por categoría
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="imagenes/agricultores_cubanos.jpg"
            alt="Productos de limpieza"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MercaditoHero;
