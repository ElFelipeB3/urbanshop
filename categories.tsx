import { Card, CardContent } from "@/components/ui/card"
import { Crown, Sword, Coins, Home, Shield, Gift } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "👑 RANGOS VIP",
    description: "Obtén privilegios exclusivos y comandos especiales",
    icon: Crown,
    color: "bg-gradient-to-br from-yellow-500 to-yellow-700",
    borderColor: "border-yellow-400",
    items: "12 rangos disponibles",
    emoji: "👑",
  },
  {
    id: 2,
    name: "⚔️ ITEMS ÉPICOS",
    description: "Armas legendarias y herramientas únicas",
    icon: Sword,
    color: "bg-gradient-to-br from-red-500 to-red-700",
    borderColor: "border-red-400",
    items: "45+ items legendarios",
    emoji: "⚔️",
  },
  {
    id: 3,
    name: "💰 MONEDAS UB",
    description: "Moneda virtual del servidor UrbanBuilders",
    icon: Coins,
    color: "bg-gradient-to-br from-green-500 to-green-700",
    borderColor: "border-green-400",
    items: "Varios paquetes",
    emoji: "💰",
  },
  {
    id: 4,
    name: "🏗️ CONSTRUCCIONES",
    description: "Estructuras pre-construidas y planos",
    icon: Home,
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
    borderColor: "border-orange-400",
    items: "20+ diseños únicos",
    emoji: "🏗️",
  },
  {
    id: 5,
    name: "🛡️ PROTECCIONES",
    description: "Protege tus construcciones de griefers",
    icon: Shield,
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
    borderColor: "border-purple-400",
    items: "Varios tamaños",
    emoji: "🛡️",
  },
  {
    id: 6,
    name: "🎁 KITS & CAJAS",
    description: "Paquetes de supervivencia y cajas misteriosas",
    icon: Gift,
    color: "bg-gradient-to-br from-pink-500 to-pink-700",
    borderColor: "border-pink-400",
    items: "15+ kits épicos",
    emoji: "🎁",
  },
]

export function Categories() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold text-white mb-6 font-mono tracking-wider"
            style={{ textShadow: "3px 3px 0px #000" }}
          >
            📦 CATEGORÍAS DE PRODUCTOS 📦
          </h2>
          <p className="text-green-200 max-w-3xl mx-auto text-xl font-mono leading-relaxed">
            🎮 Explora nuestras diferentes categorías y encuentra todo lo que necesitas para dominar UrbanBuilders 🎮
          </p>

          {/* Decorative minecraft blocks */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <div className="w-6 h-6 bg-stone-600 rounded-sm"></div>
            <div className="w-6 h-6 bg-green-600 rounded-sm"></div>
            <div className="w-6 h-6 bg-yellow-600 rounded-sm"></div>
            <div className="w-6 h-6 bg-red-600 rounded-sm"></div>
            <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.id}
                className={`hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:scale-105 bg-stone-800 border-4 ${category.borderColor} rounded-sm overflow-hidden`}
              >
                <CardContent className="p-8">
                  <div className="text-center">
                    {/* Icon with Minecraft-style background */}
                    <div
                      className={`w-20 h-20 ${category.color} rounded-sm mx-auto mb-6 flex items-center justify-center border-4 ${category.borderColor} shadow-lg group-hover:animate-pulse`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors font-mono tracking-wide">
                      {category.name}
                    </h3>

                    <p className="text-gray-300 text-base mb-4 font-mono leading-relaxed">{category.description}</p>

                    <div className="bg-stone-700 border-2 border-stone-600 rounded-sm px-4 py-2 inline-block">
                      <p className="text-sm text-green-400 font-mono font-bold">⚡ {category.items}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
