import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart, Star } from "lucide-react"

interface Rank {
  id: number
  name: string
  price: string
  color: string
  icon: string
  features: string[]
  description: string
  popular: boolean
}

interface RankCardProps {
  rank: Rank
}

export function RankCard({ rank }: RankCardProps) {
  return (
    <Card
      className={`bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group relative ${
        rank.popular ? "ring-2 ring-yellow-400 ring-opacity-50" : ""
      }`}
    >
      {rank.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black font-bold px-4 py-1 z-10">
          <Star className="w-3 h-3 mr-1" />
          MOST POPULAR
        </Badge>
      )}

      <CardHeader className="p-0">
        <div className={`h-48 bg-gradient-to-br ${rank.color} flex items-center justify-center relative`}>
          <div className="text-6xl">{rank.icon}</div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-2xl font-bold text-white">{rank.name}</h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-green-400 mb-2">{rank.price}</div>
          <p className="text-gray-400 text-sm">{rank.description}</p>
        </div>

        <div className="space-y-3">
          {rank.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          className={`w-full bg-green-600 hover:bg-green-700 text-white ${rank.popular ? "bg-yellow-500 hover:bg-yellow-600 text-black" : ""}`}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Purchase {rank.name}
        </Button>
      </CardFooter>
    </Card>
  )
}
