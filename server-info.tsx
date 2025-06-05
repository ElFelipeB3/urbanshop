import { Badge } from "@/components/ui/badge"
import { Users, Clock, Trophy, Star } from "lucide-react"

export function ServerInfo() {
  return (
    <div className="mb-8">
      {/* Server banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">UrbanBuilders Store</h1>
            <p className="text-green-100 text-lg">Build your dream city in the ultimate Minecraft experience</p>
          </div>
          <div className="text-right">
            <Badge className="bg-green-500 text-white mb-2">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              ONLINE
            </Badge>
            <div className="text-white text-2xl font-bold">1,247 players</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-green-500" />
            <div>
              <div className="text-2xl font-bold text-white">15,432</div>
              <div className="text-gray-400 text-sm">Total Players</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Clock className="w-8 h-8 text-blue-500" />
            <div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <div>
              <div className="text-2xl font-bold text-white">#1</div>
              <div className="text-gray-400 text-sm">Server Rank</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <Star className="w-8 h-8 text-purple-500" />
            <div>
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-gray-400 text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
