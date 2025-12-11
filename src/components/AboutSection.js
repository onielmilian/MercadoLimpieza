import React from "react";
import { proveedores } from "../mock/providers";

const AboutSection = () => {
  return (
    <section className="py-16 bg-green-50" id="conocenos">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Conócenos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Nuestra misión
            </h3>
            <p className="text-gray-700 mb-4">
              Conectar directamente a proveedores de productos de limpieza con
              los consumidores, eliminando intermediarios y garantizando
              productos de calidad a precios justos.
            </p>
            <p className="text-gray-700">
              Promovemos prácticas de higiene responsables y el acceso fácil a
              limpiadores, desinfectantes y accesorios confiables para el hogar
              y negocios, apoyando a emprendedores locales del sector.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="imagenes/conocenos.jpg"
              alt="Conócenos photo"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-green-800 mb-6 text-center">
          Nuestros proveedores
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {proveedores.map((proveedor, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm text-center"
            >
              <img
                src={proveedor.image}
                alt={proveedor.name}
                className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
              />
              <h4 className="font-medium text-gray-800">{proveedor.name}</h4>
              <p className="text-sm text-gray-600">{proveedor.province}</p>
              <p className="text-xs text-gray-500 mt-1">
                {proveedor.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
