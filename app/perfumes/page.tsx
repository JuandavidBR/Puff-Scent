'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { perfumesData } from '@/lib/perfumes-data'
import { CartIcon } from '@/components/cart-icon'
import { Menu, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function PerfumesPage() {
  const [selectedGender, setSelectedGender] = useState<'all' | 'Hombre' | 'Mujer' | 'Unisex'>('all')

  const filteredPerfumes = selectedGender === 'all' 
    ? perfumesData 
    : perfumesData.filter(p => p.gender === selectedGender)

  const handleSpray = (e: React.MouseEvent, perfume: typeof perfumesData[0]) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    
    // Crear partículas de spray
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div')
      particle.className = 'spray-particle'
      particle.style.left = `${rect.width / 2}px`
      particle.style.top = `${rect.height * 0.15}px`
      
      const colors = {
        'Hombre': 'rgba(59, 130, 246, 0.8)',
        'Mujer': 'rgba(236, 72, 153, 0.8)',
        'Unisex': 'rgba(168, 85, 247, 0.8)'
      }
      particle.style.background = colors[perfume.gender]
      
      card.appendChild(particle)
      
      setTimeout(() => particle.remove(), 2500)
    }
    
    // Rotar botella
    const img = card.querySelector('img')
    if (img) {
      img.style.transform = 'rotate(15deg) scale(1.05)'
      setTimeout(() => {
        img.style.transform = 'rotate(0deg) scale(1)'
      }, 500)
    }
  }

  const handleBuyNow = (perfume: typeof perfumesData[0]) => {
    const message = `Hola! Estoy interesado en comprar:%0A%0A${perfume.brand} - ${perfume.name}%0APrecio: $${perfume.price}%0A%0A¿Está disponible?`
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
            <Link href="/vapes" className="text-foreground hover:text-accent transition-colors uppercase">
              Vapes
            </Link>
            <Link href="/wax" className="text-foreground hover:text-accent transition-colors uppercase">
              Wax
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
              Catálogo de Perfumes
            </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra exclusiva colección de fragancias de las mejores marcas del mundo
          </p>
        </div>
      </div>

        {/* Filtros de género */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            onClick={() => setSelectedGender('all')}
            variant={selectedGender === 'all' ? 'default' : 'outline'}
            className="text-lg"
          >
            Todos
          </Button>
          <Button
            onClick={() => setSelectedGender('Hombre')}
            variant={selectedGender === 'Hombre' ? 'default' : 'outline'}
            className="text-lg"
          >
            Hombre
          </Button>
          <Button
            onClick={() => setSelectedGender('Mujer')}
            variant={selectedGender === 'Mujer' ? 'default' : 'outline'}
            className="text-lg"
          >
            Mujer
          </Button>
          <Button
            onClick={() => setSelectedGender('Unisex')}
            variant={selectedGender === 'Unisex' ? 'default' : 'outline'}
            className="text-lg"
          >
            Unisex
          </Button>
        </div>

        {/* Grid de perfumes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPerfumes.map((perfume) => (
            <Card
              key={perfume.id}
              className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 relative"
              onClick={(e) => handleSpray(e, perfume)}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={perfume.image || "/placeholder.svg"}
                  alt={perfume.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay con información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-semibold text-sm mb-1">
                    {perfume.gender}
                  </p>
                  <p className="text-white/80 text-xs">
                    {perfume.notes}
                  </p>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{perfume.brand}</p>
                <h3 className="font-semibold text-lg mb-2 text-balance">{perfume.name}</h3>
                <p className="text-xl font-bold text-primary mb-3">${perfume.price}</p>
                <Button 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBuyNow(perfume)
                  }}
                >
                  Comprar
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredPerfumes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No se encontraron perfumes en esta categoría</p>
          </div>
        )}
      </div>
    </div>
  </div>  
  )
}
