import React, { useState } from "react";

const ProductFilter = ({ onFilter }) => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const provinces = [
    "La Habana",
    "Matanzas",
    "Villa Clara",
    "Cienfuegos",
    "Camagüey",
    "Santiago de Cuba",
    "Artemisa",
    "Mayabeque",
    "Pinar del Río",
    "Santiago de Cuba",
    "Holguín",
    "Sancti Spíritus",
    "Granma",
  ];
  const categories = [
    "Detergentes",
    "Desinfectantes",
    "Jabones",
    "Accesorios",
    "Limpiadores",
    "Lavandería",
    "Aromatizantes",
  ];

  const handleFilter = () => {
    onFilter({
      province: selectedProvince,
      category: selectedCategory,
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 p-6 rounded-2xl shadow mb-10 border border-blue-100">
      <h3 className="text-xl font-bold text-blue-800 mb-4">
        Filtrar productos
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="province"
            className="block text-sm font-medium text-blue-700 mb-1"
          >
            Provincia
          </label>
          <select
            id="province"
            className="w-full p-2 border border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            <option value="">Todas las provincias</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-blue-700 mb-1"
          >
            Categoría
          </label>
          <select
            id="category"
            className="w-full p-2 border border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleFilter}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow transition-colors"
      >
        Aplicar filtros
      </button>
    </div>
  );
};

export default ProductFilter;
