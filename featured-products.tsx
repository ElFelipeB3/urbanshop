import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Crown, Sword, Coins, Gift } from "lucide-react"

const products = [
  {
    id: 1,
    name: "VIP Diamond Rank",
    description: "Ultimate VIP experience with exclusive perks",
    price: "$24.99",
    originalPrice: "$34.99",
    badge: "Most Popular",
    badgeColor: "bg-yellow-500",
    rating: 4.9,
    icon: Crown,
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: 2,
    name: "Legendary Sword Pack",
    description: "Collection of powerful weapons",
    price: "$19.99",
    originalPrice: null,
    badge: "Limited",
    badgeColor: "bg-red-500",
    rating: 5.0,
    icon: Sword,
    color: "from-red-400 to-orange-600",
  },
  {
    id: 3,
    name: "Builder's Mega Kit",
    description: "Everything for amazing structures",
    price: "$15.99",
    originalPrice: "$22.99",
    badge: "Best Value",
    badgeColor: "bg-green-500",
    rating: 4.8,
    icon: Gift,
    color: "from-green-400 to-emerald-600",
  },
  {
    id: 4,
    name: "10,000 UB Coins",
    description: "Premium server currency",
    price: "$9.99",
    originalPrice: null,
    badge: "Instant",
    badgeColor: "bg-purple-500",
    rating: 4.7,
    icon: Coins,
    color: "from-yellow-400 to-orange-500",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
          <p className="text-gray-400 text-lg">Enhance your UrbanBuilders experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon
            return (
              <Card
                key={product.id}
                className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group transform hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div
                    className={`h-48 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <IconComponent className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>{product.badge}</Badge>
                    {product.originalPrice && (
                      <Badge className="absolute top-3 right-3 bg-red-600 text-white">SALE</Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-400">{product.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-400">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-all duration-200">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
