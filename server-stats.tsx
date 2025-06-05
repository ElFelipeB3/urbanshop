import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, MapPin, Zap, Crown, Sword } from "lucide-react"

const stats = [
  {
    icon: Users,
    label: "Total Players",
    value: "15,247",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  {
    icon: Clock,
    label: "Server Uptime",
    value: "99.9%",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
  },
  {
    icon: MapPin,
    label: "Cities Built",
    value: "2,847",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
  },
  {
    icon: Zap,
    label: "Daily Events",
    value: "24/7",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
  },
  {
    icon: Crown,
    label: "VIP Members",
    value: "3,421",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
  },
  {
    icon: Sword,
    label: "PvP Battles",
    value: "∞",
    color: "text-red-400",
    bgColor: "bg-red-500/20",
  },
]

export function ServerStats() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Server Statistics</h2>
          <p className="text-gray-400 text-lg">Real-time data from our thriving community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
