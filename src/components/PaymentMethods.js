import React from "react";

const PaymentMethods = () => {
  return (
    <section className="py-16 bg-gray-50" id="pagos">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Métodos de pago
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">EnZona</h3>
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Selecciona "EnZona" al finalizar tu compra</li>
              <li>Te daremos un código de pago único</li>
              <li>Ingresa en tu aplicación EnZona y busca "Pagar Servicios"</li>
              <li>
                Ingresa nuestro código e informa al agricultor el código de
                confirmación
              </li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Transfermóvil
              </h3>
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Selecciona "Transfermóvil" al finalizar tu compra</li>
              <li>Te daremos el número telefónico del agricultor</li>
              <li>En Transfermóvil, busca la opción de "Transferir"</li>
              <li>
                Ingresa el monto y nuestro teléfono, e informa al agricultor el
                código de confirmación
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
