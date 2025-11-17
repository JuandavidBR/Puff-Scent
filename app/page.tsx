'use client'

import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function PerfumeLandingPage() {
  const [sprayingId, setSprayingId] = useState<number | null>(null)
  const [rotatingId, setRotatingId] = useState<number | null>(null)

  const handleSpray = (id: number) => {
    setSprayingId(id)
    setRotatingId(id)
    setTimeout(() => setSprayingId(null), 2500)
    setTimeout(() => setRotatingId(null), 600)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-foreground" />
            <h1 className="font-serif text-xl tracking-tight text-foreground">
              PUFFSCENT
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <a href="#shop" className="text-foreground hover:text-accent transition-colors uppercase">
              Tienda
            </a>
            <a href="#collections" className="text-foreground hover:text-accent transition-colors uppercase">
              Colecciones
            </a>
            <Link href="/nosotros" className="text-foreground hover:text-accent transition-colors uppercase">
              Nosotros
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-foreground hover:text-accent transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="md:hidden text-foreground">
              <Menu className="w-5 h-5" />
            </button>
            <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
              Reservar Cita
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight text-foreground mb-8 text-balance">
              La Perfumeria de confianza
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 text-pretty">
              Transforma cada momento en una experiencia sensorial única con nuestras fragancias exclusivas, 
              cuidadosamente seleccionadas para revelar tu esencia más auténtica.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wider uppercase px-8">
                Descubrir Colección
              </Button>
              <Button size="lg" variant="outline" className="text-sm tracking-wider uppercase px-8 border-2">
                Explorar Fragancias
              </Button>
            </div>
          </div>

          <div className="mt-20 relative aspect-[16/9] max-w-3xl mx-auto">
            <img 
              src="/elegant-perfume-bottle-on-minimalist-pedestal.jpg" 
              alt="Perfume elegante"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">(Colecciones)</p>
              <h3 className="font-serif text-5xl md:text-6xl text-foreground text-balance">
                Nuestras fragancias exclusivas
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Collection 1 */}
              <div 
                className="group cursor-pointer"
                onClick={() => handleSpray(1)}
              >
                <div className={`aspect-[3/4] bg-card mb-4 overflow-hidden relative ${rotatingId === 1 ? 'animate-rotate' : ''}`}>
                  <img 
                    src="/luxury-floral-perfume-bottle.jpg" 
                    alt="Colección Floral"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {sprayingId === 1 && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(40)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-white/70 rounded-full animate-spray shadow-lg"
                          style={{
                            width: `${3 + Math.random() * 6}px`,
                            height: `${3 + Math.random() * 6}px`,
                            left: `${47 + Math.random() * 6}%`,
                            top: `${15 + Math.random() * 5}%`,
                            animationDelay: `${i * 30}ms`,
                            animationDuration: `${2000 + Math.random() * 1000}ms`,
                            boxShadow: '0 2px 8px rgba(255,255,255,0.3)'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h4 className="font-serif text-2xl text-foreground mb-2">Jardín Secreto</h4>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Notas florales delicadas que evocan un jardín en primavera
                  </p>
                  <p className="text-accent font-medium">Desde €120</p>
                </div>
              </div>

              {/* Collection 2 */}
              <div 
                className="group cursor-pointer"
                onClick={() => handleSpray(2)}
              >
                <div className={`aspect-[3/4] bg-card mb-4 overflow-hidden relative ${rotatingId === 2 ? 'animate-rotate' : ''}`}>
                  <img 
                    src="/masculine-woody-perfume-bottle.jpg" 
                    alt="Colección Amaderada"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {sprayingId === 2 && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(40)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-amber-400/70 rounded-full animate-spray shadow-lg"
                          style={{
                            width: `${3 + Math.random() * 6}px`,
                            height: `${3 + Math.random() * 6}px`,
                            left: `${47 + Math.random() * 6}%`,
                            top: `${15 + Math.random() * 5}%`,
                            animationDelay: `${i * 30}ms`,
                            animationDuration: `${2000 + Math.random() * 1000}ms`,
                            boxShadow: '0 2px 8px rgba(251,191,36,0.3)'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h4 className="font-serif text-2xl text-foreground mb-2">Bosque Místico</h4>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Maderas nobles y especias que desprenden masculinidad
                  </p>
                  <p className="text-accent font-medium">Desde €145</p>
                </div>
              </div>

              {/* Collection 3 */}
              <div 
                className="group cursor-pointer"
                onClick={() => handleSpray(3)}
              >
                <div className={`aspect-[3/4] bg-card mb-4 overflow-hidden relative ${rotatingId === 3 ? 'animate-rotate' : ''}`}>
                  <img 
                    src="/oriental-amber-perfume-bottle.jpg" 
                    alt="Colección Oriental"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {sprayingId === 3 && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(40)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute bg-rose-300/70 rounded-full animate-spray shadow-lg"
                          style={{
                            width: `${3 + Math.random() * 6}px`,
                            height: `${3 + Math.random() * 6}px`,
                            left: `${47 + Math.random() * 6}%`,
                            top: `${15 + Math.random() * 5}%`,
                            animationDelay: `${i * 30}ms`,
                            animationDuration: `${2000 + Math.random() * 1000}ms`,
                            boxShadow: '0 2px 8px rgba(253,164,175,0.3)'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h4 className="font-serif text-2xl text-foreground mb-2">Noche Oriental</h4>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Ámbar y vainilla envueltos en misterio sensual
                  </p>
                  <p className="text-accent font-medium">Desde €165</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-card overflow-hidden">
                <img 
                  src="/luxury-perfume-ingredients-flowers-and-essences.jpg" 
                  alt="Ingredientes naturales"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Descubre</p>
              <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
                Ingredientes de la más alta calidad
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
                Cada fragancia es una obra maestra artesanal, elaborada con los ingredientes más puros y raros 
                del mundo. Desde las rosas búlgaras hasta el oud de Asia, seleccionamos cuidadosamente cada 
                esencia para crear perfumes inolvidables.
              </p>
              <Button variant="outline" className="border-2">
                Conoce Nuestro Proceso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
              Únete a nuestra comunidad exclusiva
            </h3>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed text-pretty">
              Recibe ofertas especiales, lanzamientos anticipados y consejos de expertos 
              sobre el mundo de las fragancias de lujo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-3 bg-primary-foreground text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-8 bg-foreground" />
                <h4 className="font-serif text-lg tracking-tight text-foreground">
                  PUFFSCENT
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Experiencias sensoriales únicas a través de fragancias exclusivas que definen tu esencia.
              </p>
            </div>
            
            <div>
              <h5 className="text-sm font-medium uppercase tracking-wider mb-4 text-foreground">Tienda</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Fragancias</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Colecciones</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Nuevos Lanzamientos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Ediciones Limitadas</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-medium uppercase tracking-wider mb-4 text-foreground">Contacto</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Reservar Cita</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Atención al Cliente</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Ubicaciones</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Preguntas Frecuentes</a></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2025 Puffscent. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors">Facebook</a>
              <a href="#" className="hover:text-foreground transition-colors">Pinterest</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
