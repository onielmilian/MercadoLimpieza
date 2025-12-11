import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import { products } from "../mock/products";

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [reservedProducts, setReservedProducts] = useState([]);
  const [currentDay] = useState(new Date().getDate());

  const handleFilter = (filters) => {
    let result = [...products].filter(
      (p) =>
        (filters.province ? p.province === filters.province : true) &&
        (filters.category ? p.category === filters.category : true)
      // (p.availableDate === `Día ${currentDay}`) // Filtrado por fecha comentado
    );

    result.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return a.name.localeCompare(b.name);
    });

    setFilteredProducts(result);
  };

  const handleReserve = (product) => {
    const updatedProducts = filteredProducts.map((p) => {
      // if (p.id === product.id && p.available > 0 && p.availableDate === `Día ${currentDay}`) { // Filtrado por fecha comentado
      if (p.id === product.id && p.available > 0) {
        return { ...p, available: p.available - 1 };
      }
      return p;
    });

    setFilteredProducts(updatedProducts);
    setReservedProducts([...reservedProducts, product]);

    localStorage.setItem(
      "reservedProducts",
      JSON.stringify([...reservedProducts, product])
    );
  };

  return (
    <section
      className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
      id="productos"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center tracking-tight drop-shadow">
          Productos disponibles{" "}
          <span className="text-blue-600">(Día {currentDay})</span>
        </h2>
        <ProductFilter onFilter={handleFilter} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onReserve={handleReserve}
                currentDay={currentDay}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">
                No hay productos disponibles con los filtros seleccionados
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
