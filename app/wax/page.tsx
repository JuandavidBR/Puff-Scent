'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { waxData } from '@/lib/wax-data'
import { CartIcon } from '@/components/cart-icon'
import { Menu, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function WaxPage() {
  const [selectedType, setSelectedType] = useState<'all' | 'Vela' | 'Difusor' | 'Wax Melt'>('all')

  const filteredWax = selectedType === 'all'
    ? waxData
    : waxData.filter(w => w.type === selectedType)

  const handleBuyNow = (wax: typeof waxData[0]) => {
    const message = `Hola! Estoy interesado en comprar:%0A%0A${wax.name}%0AAroma: ${wax.scent}%0ADuración: ${wax.duration}%0APrecio: $${wax.price}%0A%0A¿Está disponible?`
    window.open(`https://www.instagram.com/direct/t/17843825013072961?text=${message}`, '_blank')
  }
  const handleReservarCita = () => {
    window.open('https://www.instagram.com/direct/t/17843825013072961', '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-1 h-8 bg-foreground" />
            <h1 className="font-serif text-xl tracking-tight text-foreground">
              PUFF&SCENT
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <Link href="/perfumes" className="text-foreground hover:text-accent transition-colors uppercase">
              Perfumes
            </Link>
            <Link href="/vapes" className="text-foreground hover:text-accent transition-colors uppercase">
              Vapes
            </Link>
            <Link href="/nosotros" className="text-foreground hover:text-accent transition-colors uppercase">
              Nosotros
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/puffscent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <CartIcon />
            <button className="md:hidden text-foreground">
              <Menu className="w-5 h-5" />
            </button>
            <Button 
              onClick={handleReservarCita}
              className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contactanos
            </Button>
          </div>
        </div>
      </header>

    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">

          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-4 text-foreground">
              Wax 
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Relajate y emprende tu viaje con nuestros Wax
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            onClick={() => setSelectedType('all')}
            variant={selectedType === 'all' ? 'default' : 'outline'}
          >
            Todos
          </Button>
          <Button
            onClick={() => setSelectedType('Vela')}
            variant={selectedType === 'Vela' ? 'default' : 'outline'}
          >
            Velas
          </Button>
          <Button
            onClick={() => setSelectedType('Difusor')}
            variant={selectedType === 'Difusor' ? 'default' : 'outline'}
          >
            Difusores
          </Button>
          <Button
            onClick={() => setSelectedType('Wax Melt')}
            variant={selectedType === 'Wax Melt' ? 'default' : 'outline'}
          >
            Wax Melts
          </Button>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredWax.map((wax) => (
            <Card
              key={wax.id}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={wax.image || "/placeholder.svg"}
                  alt={wax.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">
                  {wax.type}
                </span>
                <h3 className="font-semibold text-lg mb-2">{wax.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{wax.scent}</p>
                <p className="text-sm text-muted-foreground mb-3">Duración: {wax.duration}</p>
                <p className="text-xl font-bold text-primary mb-3">${wax.price}</p>
                <Button
                  className="w-full"
                  onClick={() => handleBuyNow(wax)}
                >
                  Comprar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>  
  )
}
