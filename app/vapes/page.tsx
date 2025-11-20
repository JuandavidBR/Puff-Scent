'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { vapesData } from '@/lib/vapes-data'
import { CartIcon } from '@/components/cart-icon'
import { Menu, Instagram } from 'lucide-react'
import Link from 'next/link'

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
    const message = `Hola! Estoy interesado en comprar:%0A%0A${vape.name}%0ASabor: ${vape.flavor}%0APuffs: ${vape.puffs}%0A%0A¿Está disponible?`
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
              Catálogo de Vapes
            </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Explora nuestra selección de vapes con los mejores sabores y duraciones
          </p>
        </div>
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
                <div className="mb-3">
                  <Button className="w-full" onClick={(e) => { e.stopPropagation(); }}>Consultar precio</Button>
                </div>
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
  </div>
  )
}
