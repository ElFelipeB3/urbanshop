"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ShoppingCart, Trash2, Plus, Minus } from "lucide-react"

const cartItems = [
  {
    id: 1,
    name: "VIP Diamond Rank",
    price: 19.99,
    quantity: 1,
    image: "/placeholder.svg?height=50&width=50&text=💎",
  },
  {
    id: 2,
    name: "10,000 UB Coins",
    price: 9.99,
    quantity: 1,
    image: "/placeholder.svg?height=50&width=50&text=💰",
  },
]

export function Cart() {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState(cartItems)

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const updateQuantity = (id: number, change: number) => {
    setItems(
      items
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <>
      {/* Cart toggle button */}
      <Button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ShoppingCart className="w-6 h-6" />
        {items.length > 0 && (
          <Badge className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 flex items-center justify-center bg-red-600">
            {items.length}
          </Badge>
        )}
      </Button>

      {/* Cart sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          <div className="ml-auto w-96 bg-gray-800 h-full shadow-xl">
            <Card className="h-full bg-gray-800 border-gray-700 rounded-none">
              <CardHeader className="border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Shopping Cart</CardTitle>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-4">
                  {items.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-12 h-12 rounded bg-gray-600"
                          />
                          <div className="flex-1">
                            <h4 className="text-white font-medium text-sm">{item.name}</h4>
                            <p className="text-green-400 font-bold">${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-6 h-6 text-gray-400 hover:text-white"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-6 h-6 text-gray-400 hover:text-white"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-6 h-6 text-red-400 hover:text-red-300"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {items.length > 0 && (
                  <div className="border-t border-gray-700 p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total:</span>
                      <span className="text-2xl font-bold text-green-400">${total.toFixed(2)}</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                      Proceed to Checkout
                    </Button>
                    <p className="text-xs text-gray-500 text-center">Secure payment powered by Tebex</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
