import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-green-500/30 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-gray-600 flex items-center justify-center">
                <div className="w-10 h-10 relative overflow-hidden">
                  <Image src="/images/urban-logo-nav.png" alt="UrbanBuilders Logo" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">UrbanBuilders</h3>
                <p className="text-sm text-green-400">Servidor de Minecraft</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              La experiencia definitiva de construcción en Minecraft con una comunidad increíble.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="text-xl">📘</span>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="text-xl">🐦</span>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="text-xl">📷</span>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <span className="text-xl">📺</span>
              </button>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
              >
                🏠 Inicio
              </a>
              <a
                href="/ranks"
                className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
              >
                👑 Rangos
              </a>
              <a
                href="/survival"
                className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
              >
                ⛏️ Survival
              </a>
              <a
                href="/store"
                className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
              >
                🛒 Tienda
              </a>
            </div>
          </div>

          {/* Info del Servidor */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Info del Servidor</h4>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">
                <span className="text-green-400">IP:</span> mc.urbanbuilders.net
              </div>
              <div className="text-gray-400 text-sm">
                <span className="text-green-400">Versión:</span> 1.20.4
              </div>
              <div className="text-gray-400 text-sm">
                <span className="text-green-400">Jugadores:</span> 1,247 online
              </div>
              <div className="text-gray-400 text-sm flex items-center">
                <span className="text-green-400">Estado:</span>
                <div className="flex items-center ml-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                  <span className="text-green-400">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm">Suscríbete para ofertas exclusivas y noticias del servidor.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
              />
              <button className="w-full minecraft-button text-white font-bold py-3 rounded-lg">📧 Suscribirse</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 UrbanBuilders. Todos los derechos reservados. No afiliado con Mojang AB.
          </p>
        </div>
      </div>
    </footer>
  )
}
