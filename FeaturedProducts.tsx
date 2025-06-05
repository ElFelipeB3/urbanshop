export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Rango VIP Diamond",
      description: "Experiencia VIP definitiva con beneficios exclusivos",
      price: "$24.99",
      originalPrice: "$34.99",
      badge: "Más Popular",
      badgeColor: "bg-yellow-500",
      icon: "💎",
      color: "from-cyan-400 to-blue-600",
      rating: "4.9",
    },
    {
      id: 2,
      name: "Pack de Espadas Legendarias",
      description: "Colección de armas poderosas y únicas",
      price: "$19.99",
      originalPrice: null,
      badge: "Limitado",
      badgeColor: "bg-red-500",
      icon: "⚔️",
      color: "from-red-400 to-orange-600",
      rating: "5.0",
    },
    {
      id: 3,
      name: "Kit Mega Constructor",
      description: "Todo lo necesario para estructuras increíbles",
      price: "$15.99",
      originalPrice: "$22.99",
      badge: "Mejor Valor",
      badgeColor: "bg-green-500",
      icon: "🎁",
      color: "from-green-400 to-emerald-600",
      rating: "4.8",
    },
    {
      id: 4,
      name: "10,000 Monedas UB",
      description: "Moneda premium del servidor",
      price: "$9.99",
      originalPrice: null,
      badge: "Instantáneo",
      badgeColor: "bg-purple-500",
      icon: "💰",
      color: "from-yellow-400 to-orange-500",
      rating: "4.7",
    },
  ]

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">🌟 Productos Destacados</h2>
          <p className="text-gray-400 text-xl">Mejora tu experiencia en UrbanBuilders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="minecraft-card rounded-xl overflow-hidden group transform hover:scale-105 transition-all duration-300"
            >
              {/* Product Image/Icon */}
              <div
                className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{product.icon}</span>
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Badges */}
                <div
                  className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}
                >
                  {product.badge}
                </div>
                {product.originalPrice && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    OFERTA
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-400">{product.rating}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{product.description}</p>

                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-2xl font-bold text-green-400">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>

                <button className="w-full minecraft-button text-white font-bold py-3 rounded-lg transform hover:scale-105 transition-all duration-200">
                  🛒 Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-3 border-green-500 text-green-400 hover:bg-green-500/10 px-10 py-4 text-lg font-bold rounded-lg transform hover:scale-105 transition-all duration-200">
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  )
}
