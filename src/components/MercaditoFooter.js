import React from "react";

const MercaditoFooter = () => {
  const footerMessage =
    "Conectando proveedores de limpieza y consumidores. Productos de limpieza, calidad garantizada.";
  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      url: "#",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
      ),
      url: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
            stroke="currentColor"
          />
          <circle cx="12" cy="12" r="5" stroke="currentColor" />
          <circle cx="17" cy="7" r="1.5" fill="currentColor" />
        </svg>
      ),
      url: "#",
    },
  ];

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MercadoLimpio</h3>
            <p className="text-green-100 mb-4">{footerMessage}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-green-200 hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-green-200 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  className="text-green-200 hover:text-white"
                >
                  Productos
                </a>
              </li>
              <li>
                <a href="#pagos" className="text-green-200 hover:text-white">
                  Métodos de pago
                </a>
              </li>
              <li>
                <a href="#puntos" className="text-green-200 hover:text-white">
                  Puntos de recogida
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-green-200 mb-2">info@mercadolimpio.cu</p>
            <p className="text-green-200">+53 555 1234</p>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
          <p>© 2025 MercadoLimpio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default MercaditoFooter;
