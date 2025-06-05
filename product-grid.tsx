import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Crown, Sword, Coins, Gift } from "lucide-react"

const products = [
  {
    id: 1,
    name: "VIP Diamond Rank",
    description: "Ultimate VIP experience with all permissions and exclusive features",
    price: "$19.99",
    originalPrice: "$29.99",
    category: "ranks",
    image: "/placeholder.svg?height=150&width=200&text=💎+DIAMOND",
    badge: "POPULAR",
    badgeColor: "bg-yellow-600",
    rating: 4.9,
    reviews: 234,
    icon: Crown,
    features: ["Daily Kits", "All Commands", "Colored Chat", "Extra Homes"],
  },
  {
    id: 2,
    name: "10,000 UB Coins",
    description: "Premium currency for the UrbanBuilders server",
    price: "$9.99",
    originalPrice: null,
    category: "coins",
    image: "/placeholder.svg?height=150&width=200&text=💰+COINS",
    badge: "BEST VALUE",
    badgeColor: "bg-green-600",
    rating: 4.8,
    reviews: 156,
    icon: Coins,
    features: ["Instant Delivery", "15% Bonus", "No Expiration"],
  },
  {
    id: 3,
    name: "Legendary Dragon Sword",
    description: "Mythical weapon with special enchantments and effects",
    price: "$14.99",
    originalPrice: "$19.99",
    category: "items",
    image: "/placeholder.svg?height=150&width=200&text=🗡️+SWORD",
    badge: "LIMITED",
    badgeColor: "bg-red-600",
    rating: 5.0,
    reviews: 89,
    icon: Sword,
    features: ["Sharpness X", "Fire Aspect", "Unbreaking", "Custom Model"],
  },
  {
    id: 4,
    name: "Builder's Starter Kit",
    description: "Everything you need to start building amazing structures",
    price: "$7.99",
    originalPrice: null,
    category: "kits",
    image: "/placeholder.svg?height=150&width=200&text=🎁+KIT",
    badge: "NEW",
    badgeColor: "bg-purple-600",
    rating: 4.7,
    reviews: 67,
    icon: Gift,
    features: ["Building Blocks", "Tools", "Decorations", "Guide Book"],
  },
  {
    id: 5,
    name: "VIP Gold Rank",
    description: "Premium rank with great benefits and permissions",
    price: "$12.99",
    originalPrice: "$17.99",
    category: "ranks",
    image: "/placeholder.svg?height=150&width=200&text=🥇+GOLD",
    badge: "SALE",
    badgeColor: "bg-orange-600",
    rating: 4.6,
    reviews: 198,
    icon: Crown,
    features: ["Daily Kit", "Fly Command", "Colored Chat", "Extra Homes"],
  },
  {
    id: 6,
    name: "5,000 UB Coins",
    description: "Medium coin package for regular purchases",
    price: "$4.99",
    originalPrice: null,
    category: "coins",
    image: "/placeholder.svg?height=150&width=200&text=💰+5K",
    badge: null,
    badgeColor: "",
    rating: 4.5,
    reviews: 123,
    icon: Coins,
    features: ["Instant Delivery", "10% Bonus", "No Expiration"],
  },
]

export function ProductGrid() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">All Products</h2>
        <div className="flex items-center space-x-4">
          <select className="bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm">
            <option>Sort by: Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const IconComponent = product.icon
          return (
            <Card
              key={product.id}
              className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-200 group"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-lg flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </div>
                  {product.badge && (
                    <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs`}>
                      {product.badge}
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="absolute top-3 right-3 bg-red-600 text-white text-xs">SALE</Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-400">{product.rating}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>

                <div className="space-y-1 mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-500">
                      <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-green-400">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>

                <div className="text-xs text-gray-500">{product.reviews} reviews</div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {/* Load more */}
      <div className="text-center mt-8">
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
          Load More Products
        </Button>
      </div>
    </div>
  )
}
