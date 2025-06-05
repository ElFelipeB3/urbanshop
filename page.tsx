import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function RanksPage() {
  const ranks = [
    {
      name: "VIP",
      price: "$4.99",
      color: "from-green-400 to-green-600",
      icon: "🌟",
      features: ["Chat Colorido", "Kit Diario", "2 Homes Extra", "Soporte Prioritario"],
      description: "Inicia tu viaje premium",
      popular: false,
    },
    {
      name: "VIP+",
      price: "$9.99",
      color: "from-blue-400 to-blue-600",
      icon: "⭐",
      features: ["Todas las características VIP", "Comando Fly", "5 Homes Extra", "Reducción de Cooldown"],
      description: "Experiencia VIP mejorada",
      popular: true,
    },
    {
      name: "MVP",
      price: "$19.99",
      color: "from-purple-400 to-purple-600",
      icon: "👑",
      features: ["Todas las características VIP+", "Acceso WorldEdit", "10 Homes Extra", "Mensajes Personalizados"],
      description: "Herramientas avanzadas de construcción",
      popular: false,
    },
    {
      name: "LEGEND",
      price: "$49.99",
      color: "from-red-400 to-pink-600",
      icon: "🔥",
      features: [
        "Todas las características MVP",
        "Kit Legend Exclusivo",
        "Comandos Personalizados",
        "Acceso a Eventos Especiales",
      ],
      description: "El rango definitivo",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="bg-purple-500/20 text-purple-400 border border-purple-500/30 px-6 py-3 rounded-full inline-block mb-8">
              👑 Rangos Premium Disponibles
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                RANGOS VIP
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Desbloquea características exclusivas, comandos y beneficios. ¡Elige el rango perfecto para mejorar tu
              experiencia!
            </p>
          </div>
        </section>

        {/* Ranks Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ranks.map((rank) => (
                <div
                  key={rank.name}
                  className={`minecraft-card rounded-xl overflow-hidden group transform hover:scale-105 transition-all duration-300 relative ${
                    rank.popular ? "ring-2 ring-yellow-400 ring-opacity-50" : ""
                  }`}
                >
                  {rank.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full font-bold text-sm z-10">
                      ⭐ MÁS POPULAR
                    </div>
                  )}

                  <div className={`h-48 bg-gradient-to-br ${rank.color} flex items-center justify-center relative`}>
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {rank.icon}
                    </span>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{rank.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-green-400 mb-2">{rank.price}</div>
                      <p className="text-gray-400 text-sm">{rank.description}</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {rank.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`w-full py-3 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 ${
                        rank.popular ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "minecraft-button text-white"
                      }`}
                    >
                      🛒 Comprar {rank.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
