"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"

export function ServerStatus() {
  const [players, setPlayers] = useState(1247)
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    // Simulate real-time player count updates
    const interval = setInterval(() => {
      setPlayers((prev) => prev + Math.floor(Math.random() * 10 - 5))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2 bg-black/30 rounded-lg px-3 py-2">
        <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></div>
        <span className="text-sm text-gray-300">{isOnline ? "Online" : "Offline"}</span>
      </div>
      <div className="flex items-center space-x-2 bg-black/30 rounded-lg px-3 py-2">
        <Users className="w-4 h-4 text-green-400" />
        <span className="text-sm text-white font-medium">{players.toLocaleString()}</span>
        <span className="text-xs text-gray-400">players</span>
      </div>
    </div>
  )
}
