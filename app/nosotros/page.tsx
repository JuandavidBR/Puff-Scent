'use client'

import { Button } from "@/components/ui/button"
import { Award, Heart, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function NosotrosPage() {
  const [isSmiling, setIsSmiling] = useState(false)

  const handleImageClick = () => {
    setIsSmiling(!isSmiling)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-1 h-8 bg-foreground" />
            <h1 className="font-serif text-xl tracking-tight text-foreground">
              PUFFSCENT
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <Link href="/#shop" className="text-foreground hover:text-accent transition-colors uppercase">
              Tienda
            </Link>
            <Link href="/#collections" className="text-foreground hover:text-accent transition-colors uppercase">
              Colecciones
            </Link>
            <Link href="/nosotros" className="text-foreground hover:text-accent transition-colors uppercase">
              Nosotros
            </Link>
          </nav>

          <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
            Reservar Cita
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">(Nuestra Historia)</p>
            <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-6 text-balance">
              Excelencia en cada gota
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              En Puffscent, creemos que cada fragancia cuenta una historia única. 
              Nuestra pasión por la perfumería nace del deseo de crear experiencias sensoriales inolvidables.
            </p>
          </div>

          {/* Brand Ambassador Section with Cristiano Ronaldo */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-card p-8 md:p-12 shadow-lg">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-accent" />
                  <p className="text-sm tracking-widest uppercase text-accent font-medium">Embajador de Marca</p>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
                  La excelencia no es un accidente
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  "Como en el fútbol, la perfección en la perfumería requiere dedicación, 
                  pasión y un compromiso inquebrantable con la excelencia. Puffscent representa 
                  esos mismos valores que me han llevado a alcanzar los más altos logros."
                </p>
                <p className="font-serif text-xl text-foreground mb-2">Cristiano Ronaldo</p>
                <p className="text-sm text-muted-foreground">5x Balón de Oro • Leyenda del Fútbol</p>
              </div>
              <div className="order-1 md:order-2">
                <div 
                  className="aspect-[3/4] bg-muted overflow-hidden cursor-pointer relative group"
                  onClick={handleImageClick}
                >
                  <img 
                    src={isSmiling ? "/cristiano-ronaldo-smiling-wearing-elegant-sunglasse.jpg" : "/cristiano-ronaldo-wearing-elegant-sunglasses-holdi.jpg"}
                    alt="Cristiano Ronaldo con el Balón de Oro"
                    className={`w-full h-full object-cover transition-all duration-500 ${isSmiling ? 'brightness-110 scale-105' : ''}`}
                  />
                  {/* Efecto visual cuando sonríe */}
                  {isSmiling && (
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none" />
                  )}
                  {/* Tooltip */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/80 text-background px-4 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Haz clic para ver la sonrisa
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Nuestros Valores</h3>
              <p className="text-muted-foreground text-lg text-pretty">
                Los principios que guían cada decisión en Puffscent
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-card">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-serif text-2xl text-foreground mb-3">Artesanía</h4>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Cada fragancia es creada con técnicas artesanales transmitidas por generaciones 
                  de maestros perfumistas.
                </p>
              </div>

              <div className="text-center p-8 bg-card">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-serif text-2xl text-foreground mb-3">Pasión</h4>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Nuestra pasión por la perfumería impulsa cada decisión, desde la selección 
                  de ingredientes hasta el diseño final.
                </p>
              </div>

              <div className="text-center p-8 bg-card">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-serif text-2xl text-foreground mb-3">Excelencia</h4>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  No aceptamos nada menos que la perfección absoluta en cada aspecto 
                  de nuestras creaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">(Nuestro Proceso)</p>
              <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-balance">
                Del concepto a la obra maestra
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Cada fragancia de Puffscent pasa por un riguroso proceso de creación que puede 
                tomar meses, incluso años, hasta alcanzar la perfección.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="aspect-[4/3] bg-card overflow-hidden">
                <img 
                  src="/luxury-perfume-ingredients-flowers-and-essences.jpg" 
                  alt="Proceso de creación"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <div className="text-accent font-serif text-xl mb-2">01</div>
                  <h4 className="font-serif text-2xl text-foreground mb-3">Selección de Ingredientes</h4>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Viajamos por el mundo en busca de las mejores esencias naturales, 
                    desde rosas búlgaras hasta oud indonesio.
                  </p>
                </div>
                <div>
                  <div className="text-accent font-serif text-xl mb-2">02</div>
                  <h4 className="font-serif text-2xl text-foreground mb-3">Creación Artesanal</h4>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Nuestros maestros perfumistas combinan arte y ciencia para crear 
                    composiciones únicas e inolvidables.
                  </p>
                </div>
                <div>
                  <div className="text-accent font-serif text-xl mb-2">03</div>
                  <h4 className="font-serif text-2xl text-foreground mb-3">Control de Calidad</h4>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Cada lote es probado meticulosamente para garantizar que cumple 
                    con nuestros estándares de excelencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Únete a la familia Puffscent
            </h3>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Descubre cómo nuestras fragancias pueden transformar tu experiencia diaria 
              en algo verdaderamente extraordinario.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#collections">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wider uppercase px-8">
                  Explorar Colecciones
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-sm tracking-wider uppercase px-8 border-2">
                Contactar
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
