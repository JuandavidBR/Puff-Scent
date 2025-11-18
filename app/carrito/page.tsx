'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useCart } from '@/lib/cart-context'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function CarritoPage() {
  const [mounted, setMounted] = useState(false)
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-secondary/30 rounded w-64 mx-auto mb-8"></div>
              <div className="space-y-4">
                <div className="h-32 bg-secondary/30 rounded"></div>
                <div className="h-32 bg-secondary/30 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const subtotal = getTotalPrice()
  const impuestos = subtotal * 0.16
  const total = subtotal + impuestos

  const handleCheckout = () => {
    const itemsList = items.map(item => 
      `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('%0A')
    
    const message = `Hola! Me gustaría hacer un pedido:%0A%0A${itemsList}%0A%0ATotal: $${total.toFixed(2)}`
    
    window.open(`https://www.instagram.com/direct/t/17843825013072961?text=${message}`, '_blank')
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="font-serif text-4xl mb-4 text-foreground">Tu carrito está vacío</h1>
            <p className="text-muted-foreground mb-8">Explora nuestro catálogo y encuentra tus fragancias favoritas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/perfumes">
                <Button size="lg">Ver Perfumes</Button>
              </Link>
              <Link href="/vapes">
                <Button size="lg" variant="outline">Ver Vapes</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-8 text-center">Tu Carrito</h1>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-secondary/30 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg?height=96&width=96"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-2 truncate">{item.name}</h3>
                    <p className="text-primary font-bold mb-3">${item.price}</p>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border rounded">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="font-serif text-2xl mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Impuestos (16%)</span>
                  <span className="font-medium">${impuestos.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-bold text-xl text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button 
                className="w-full mb-3" 
                size="lg"
                onClick={handleCheckout}
              >
                Finalizar Compra
              </Button>
              
              <Link href="/perfumes">
                <Button variant="outline" className="w-full" size="lg">
                  Seguir Comprando
                </Button>
              </Link>

              <div className="mt-6 p-4 bg-secondary/20 rounded text-sm text-muted-foreground">
                <p className="font-medium mb-2">Información de envío:</p>
                <p>• Envío gratis en compras mayores a $1000</p>
                <p>• Entrega en 3-5 días hábiles</p>
                <p>• Garantía de satisfacción 100%</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
