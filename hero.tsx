import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Users, Trophy, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background with Minecraft-style pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(76, 175, 80, 0.1) 10px,
              rgba(76, 175, 80, 0.1) 20px
            )`,
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <Badge className="mb-6 bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 animate-pulse">
          🟢 Server Online - Join Now!
        </Badge>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text block">
            URBAN
          </span>
          <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text block">
            BUILDERS
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          🏗️ Build your dream city in the most advanced Minecraft server experience 🏗️
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
          >
            <Play className="w-5 h-5 mr-2" />
            Join Server
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Map
          </Button>
        </div>

        {/* Server IP */}
        <div className="bg-black/50 rounded-lg p-6 inline-block border border-green-500/30">
          <p className="text-gray-400 text-sm mb-1">Server IP:</p>
          <p className="text-white text-xl font-bold">mc.urbanbuilders.net</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-colors">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">15,247</div>
            <div className="text-gray-400">Active Players</div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-colors">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">#1</div>
            <div className="text-gray-400">Top Server</div>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
            <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
