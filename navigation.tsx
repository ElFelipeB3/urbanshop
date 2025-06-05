"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ShoppingCart, User, Server, Crown, Pickaxe, Home } from "lucide-react"
import { ServerStatus } from "@/components/server-status"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Ranks", href: "/ranks", icon: Crown },
  { name: "Survival", href: "/survival", icon: Pickaxe },
  { name: "Store", href: "/store", icon: ShoppingCart },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-green-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 animate-glow">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-sm animate-float"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-minecraft text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                UrbanBuilders
              </h1>
              <p className="text-xs text-green-300">Premium Minecraft Server</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "text-gray-300 hover:text-green-400 hover:bg-green-500/10"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <ServerStatus />
            <Button variant="ghost" className="text-gray-300 hover:text-green-400 hover:bg-green-500/10" asChild>
              <Link href="/login">
                <User className="w-4 h-4 mr-2" />
                Login
              </Link>
            </Button>
            <Button className="minecraft-button text-white font-bold">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
              <Badge className="ml-2 bg-yellow-500 text-black">3</Badge>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-green-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-green-500/20 animate-fade-in-up">
            <div className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "text-gray-300 hover:text-green-400 hover:bg-green-500/10"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-green-500/20">
                <ServerStatus />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
