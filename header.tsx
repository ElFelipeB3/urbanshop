"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ShoppingCart, User, Server } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-green-500/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Server className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">UrbanBuilders</h1>
              <p className="text-xs text-green-400">Minecraft Server</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
              Home
            </Link>
            <Link href="/ranks" className="text-gray-300 hover:text-green-400 transition-colors">
              Ranks
            </Link>
            <Link href="/survival" className="text-gray-300 hover:text-green-400 transition-colors">
              Survival
            </Link>
            <Link href="/store" className="text-gray-300 hover:text-green-400 transition-colors">
              Store
            </Link>
          </nav>

          {/* Server Status */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-black/50 rounded-lg px-3 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-white">1,247 online</span>
            </div>
            <Button variant="ghost" className="text-gray-300 hover:text-green-400">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
              <Badge className="ml-2 bg-yellow-500 text-black">3</Badge>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-500/30">
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-green-400 py-2">
                Home
              </Link>
              <Link href="/ranks" className="text-gray-300 hover:text-green-400 py-2">
                Ranks
              </Link>
              <Link href="/survival" className="text-gray-300 hover:text-green-400 py-2">
                Survival
              </Link>
              <Link href="/store" className="text-gray-300 hover:text-green-400 py-2">
                Store
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
