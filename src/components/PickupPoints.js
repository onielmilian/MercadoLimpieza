import React, { useState } from "react";

const PickupPoints = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState("morning");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const pickupPoints = [
    {
      id: 1,
      name: "Punto 1 - Vedado",
      address: "Calle 23 #456, entre L y M, Vedado",
      hours: "8:00 AM - 5:00 PM",
      province: "La Habana",
      deliveryZones: ["Vedado", "Plaza", "Centro Habana"],
      deliveryCost: {
        morning: 0,
        afternoon: 50,
      },
    },
    {
      id: 2,
      name: "Punto 2 - Playa",
      address: "Avenida 7ma #1208, Playa",
      hours: "9:00 AM - 4:00 PM",
      province: "La Habana",
      deliveryZones: ["Playa", "Miramar", "Siboney"],
      deliveryCost: {
        morning: 0,
        afternoon: 50,
      },
    },
    {
      id: 3,
      name: "Punto 3 - Habana del Este",
      address: "Avenida del Puerto #120, Habana del Este",
      hours: "8:30 AM - 4:30 PM",
      province: "La Habana",
      deliveryZones: ["Alamar", "Guanabo", "Camacho"],
      deliveryCost: {
        morning: 0,
        afternoon: 40,
      },
    },
    {
      id: 4,
      name: "Punto 4 - Alamar",
      address: "Calle 164 #3203, Alamar",
      hours: "8:00 AM - 5:00 PM",
      province: "La Habana",
      deliveryZones: ["Alamar Este", "Alamar Oeste", "Guanabo"],
      deliveryCost: {
        morning: 0,
        afternoon: 30,
      },
    },
    {
      id: 5,
      name: "Punto 5 - Matanzas",
      address: "Calle Milanés #56, Matanzas",
      hours: "8:30 AM - 4:30 PM",
      province: "Matanzas",
      deliveryZones: ["Centro Matanzas", "Versalles", "Pueblo Nuevo"],
      deliveryCost: {
        morning: 0,
        afternoon: 30,
      },
    },
  ];

  const calculateDeliveryCost = () => {
    if (!selectedPoint) return 0;
    return selectedPoint.deliveryCost[deliveryTime];
  };

  return (
    <section className="py-16" id="puntos">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Puntos de recogida y entrega
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {pickupPoints.map((point) => (
            <div
              key={point.id}
              className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${
                selectedPoint?.id === point.id
                  ? "border-blue-500"
                  : "border-gray-200"
              } cursor-pointer hover:shadow-lg transition-shadow`}
              onClick={() => setSelectedPoint(point)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {point.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{point.address}</p>
              <p className="text-gray-500 text-xs mt-1">{point.province}</p>
              <p className="text-gray-700 text-sm mt-2">
                <span className="font-medium">Horario:</span> {point.hours}
              </p>
              <p className="text-blue-600 text-xs mt-2">
                Zonas de entrega gratis (8AM-12M):{" "}
                {point.deliveryZones.join(", ")}
              </p>
            </div>
          ))}
        </div>

        {selectedPoint && (
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Opciones de entrega a domicilio
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección de entrega
              </label>
              <input
                type="text"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Escribe tu dirección completa (ej: Calle 164 #3203, Alamar)"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horario de entrega
              </label>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={deliveryTime === "morning"}
                    onChange={() => setDeliveryTime("morning")}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">
                    8:00 AM - 12:00 M (
                    {selectedPoint.deliveryZones.includes(
                      deliveryAddress.split(",")[0]?.trim()
                    )
                      ? "GRATIS"
                      : `+${selectedPoint.deliveryCost.morning} CUP`}
                    )
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    checked={deliveryTime === "afternoon"}
                    onChange={() => setDeliveryTime("afternoon")}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2">
                    12:30 PM - 5:00 PM (+{selectedPoint.deliveryCost.afternoon}{" "}
                    CUP)
                  </span>
                </label>
              </div>
            </div>

            {deliveryAddress && (
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-medium text-gray-800">
                  Resumen de entrega
                </h4>
                <p className="text-gray-600 mt-2">
                  Costo de envío: {calculateDeliveryCost()} CUP
                </p>
                <p className="text-gray-600">Dirección: {deliveryAddress}</p>
                <p className="text-gray-600">
                  Punto seleccionado: {selectedPoint.name}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto">
                  Confirmar entrega
                </button>
              </div>
            )}
          </div>
        )}

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            ¿Cómo funciona?
          </h3>
          <ol className="list-decimal pl-5 space-y-2 text-blue-900">
            <li>Selecciona tu punto de recogida preferido</li>
            <li>Si deseas entrega a domicilio, completa los datos</li>
            <li>Entrega gratis en zonas cercanas de 8AM-12M</li>
            <li>Paga al recibir tus productos en la puerta de tu casa</li>
            <li>¡Disfruta de productos de limpieza de calidad!</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PickupPoints;
