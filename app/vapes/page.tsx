'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { vapesData } from '@/lib/vapes-data'

export default function VapesPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Mini' | 'Pro' | 'Max' | 'Ultra'>('all')

  const filteredVapes = selectedCategory === 'all' 
    ? vapesData 
    : vapesData.filter(v => v.category === selectedCategory)

  const handleVapor = (e: React.MouseEvent) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.className = 'vapor-particle'
      particle.style.left = `${rect.width / 2}px`
      particle.style.top = `${rect.height * 0.15}px`
      
      card.appendChild(particle)
      
      setTimeout(() => particle.remove(), 3000)
    }
  }

  const handleBuyNow = (vape: typeof vapesData[0]) => {
    const message = `Hola! Estoy interesado en comprar:%0A%0A${vape.name}%0ASabor: ${vape.flavor}%0APuffs: ${vape.puffs}%0APrecio: $${vape.price}%0A%0A¿Está disponible?`
    window.open(`https://www.instagram.com/direct/t/17843825013072961?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl mb-4 text-foreground">
            Catálogo de Vapes
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Explora nuestra selección de vapes con los mejores sabores y duraciones
          </p>
        </div>

        {/* Filtros por puffs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            onClick={() => setSelectedCategory('all')}
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
          >
            Todos
          </Button>
          <Button
            onClick={() => setSelectedCategory('Mini')}
            variant={selectedCategory === 'Mini' ? 'default' : 'outline'}
          >
            Mini (600-1000)
          </Button>
          <Button
            onClick={() => setSelectedCategory('Pro')}
            variant={selectedCategory === 'Pro' ? 'default' : 'outline'}
          >
            Pro (2000-3000)
          </Button>
          <Button
            onClick={() => setSelectedCategory('Max')}
            variant={selectedCategory === 'Max' ? 'default' : 'outline'}
          >
            Max (5000-6000)
          </Button>
          <Button
            onClick={() => setSelectedCategory('Ultra')}
            variant={selectedCategory === 'Ultra' ? 'default' : 'outline'}
          >
            Ultra (8000+)
          </Button>
        </div>

        {/* Información de categorías */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="p-4 bg-secondary/50">
            <h3 className="font-semibold mb-2">Mini</h3>
            <p className="text-sm text-muted-foreground">600-1000 puffs. Perfecto para probar sabores</p>
          </Card>
          <Card className="p-4 bg-secondary/50">
            <h3 className="font-semibold mb-2">Pro</h3>
            <p className="text-sm text-muted-foreground">2000-3000 puffs. Uso diario conveniente</p>
          </Card>
          <Card className="p-4 bg-secondary/50">
            <h3 className="font-semibold mb-2">Max</h3>
            <p className="text-sm text-muted-foreground">5000-6000 puffs. Mayor duración</p>
          </Card>
          <Card className="p-4 bg-secondary/50">
            <h3 className="font-semibold mb-2">Ultra</h3>
            <p className="text-sm text-muted-foreground">8000+ puffs. Máxima experiencia</p>
          </Card>
        </div>

        {/* Grid de vapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVapes.map((vape) => (
            <Card
              key={vape.id}
              className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 relative"
              onClick={handleVapor}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <img
                  src={vape.image || "/placeholder.svg"}
                  alt={vape.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-semibold text-sm mb-1">
                    {vape.flavor}
                  </p>
                  <p className="text-white/80 text-xs">
                    {vape.puffs} puffs • {vape.category}
                  </p>
                </div>
              </div>
              
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded mb-2">
                  {vape.puffs} Puffs
                </span>
                <h3 className="font-semibold text-lg mb-2">{vape.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{vape.flavor}</p>
                <p className="text-xl font-bold text-primary mb-3">${vape.price}</p>
                <Button 
                  className="w-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleBuyNow(vape)
                  }}
                >
                  Comprar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
