'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { perfumesData } from '@/lib/perfumes-data'
import Link from 'next/link'
import { useCart } from '@/lib/cart-context'

export default function PerfumesPage() {
  const [selectedGender, setSelectedGender] = useState<'all' | 'Hombre' | 'Mujer' | 'Unisex'>('all')
  const { addToCart } = useCart()

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl mb-4 text-foreground">
            Catálogo de Perfumes
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra exclusiva colección de fragancias de las mejores marcas del mundo
          </p>
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
                    addToCart({
                      id: perfume.id,
                      name: `${perfume.brand} - ${perfume.name}`,
                      price: perfume.price,
                      image: perfume.image,
                      quantity: 1
                    })
                  }}
                >
                  Agregar al Carrito
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
  )
}
