import React from "react";

const ProductCard = ({ product, onReserve, currentDay }) => {
  const isAvailable =
    product.available > 0 && product.availableDate === `Día ${currentDay}`;
  const availabilityStatus = isAvailable ? "Disponible" : "Agotado";
  const statusColor = isAvailable ? "text-blue-600" : "text-red-600";
  const buttonClass = isAvailable
    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
    : "bg-gray-200 text-gray-400 cursor-not-allowed";

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 hover:border-blue-300 overflow-hidden flex flex-col">
      <div className="relative h-44 bg-gradient-to-tr from-blue-100 to-blue-50 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-36 w-36 object-cover rounded-xl shadow-md border-4 border-white"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-blue-900">{product.name}</h3>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              isAvailable ? "bg-blue-100" : "bg-red-100"
            } ${statusColor}`}
          >
            {availabilityStatus}
          </span>
        </div>
        <p className="text-blue-700 text-sm">
          {product.category} <span className="text-gray-400">|</span>{" "}
          <span className="font-medium">{product.farmer}</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Provincia: {product.province}
        </p>
        <p className="text-xs text-gray-500">
          Disponible para recoger:{" "}
          <span className="font-semibold">{product.availableDate}</span>
        </p>
        <div className="mt-4 flex justify-between items-end flex-grow">
          <span className="text-xl font-extrabold text-blue-700">
            {product.price} CUP
          </span>
          <button
            onClick={() => onReserve(product)}
            disabled={!isAvailable}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${buttonClass}`}
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
