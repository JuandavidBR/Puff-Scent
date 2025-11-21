'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { perfumesData } from '@/lib/perfumes-data'
import { CartIcon } from '@/components/cart-icon'
import { useCart } from '@/lib/cart-context'
import { Menu, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function PerfumesPage() {
  const [selectedGender, setSelectedGender] = useState<'all' | 'Hombre' | 'Mujer' | 'Unisex'>('all')

  // Filters
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const prices = perfumesData.map(p => typeof p.price === 'number' ? p.price : NaN).filter(Number.isFinite)
  const dataMinPrice = prices.length ? Math.min(...prices) : 0
  const dataMaxPrice = prices.length ? Math.max(...prices) : 0
  // prices in data are in units; display/filter should treat them as thousands (CRC)
  const [minPrice, setMinPrice] = useState<number>(dataMinPrice * 1000)
  const [maxPrice, setMaxPrice] = useState<number>(dataMaxPrice * 1000)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 24

  const filteredPerfumes = useMemo(() => {
    let list = selectedGender === 'all' ? perfumesData : perfumesData.filter(p => p.gender === selectedGender)

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase()
      list = list.filter(p => (p.name || '').toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q))
    }

    if (selectedBrands.length > 0) {
      list = list.filter(p => selectedBrands.includes(p.brand))
    }

    list = list.filter(p => {
      if (typeof p.price !== 'number') return true
      const scaled = p.price * 1000
      return scaled >= minPrice && scaled <= maxPrice
    })

    return list
  }, [selectedGender, searchTerm, selectedBrands, minPrice, maxPrice])

  const availableBrands = useMemo(() => {
    const list = (selectedGender === 'all' ? perfumesData : perfumesData.filter(p => p.gender === selectedGender))
    return Array.from(new Set(list.map(p => p.brand))).sort()
  }, [selectedGender])

  const brandCounts = useMemo(() => {
    const list = (selectedGender === 'all' ? perfumesData : perfumesData.filter(p => p.gender === selectedGender))
    const map: Record<string, number> = {}
    list.forEach(p => { map[p.brand] = (map[p.brand] || 0) + 1 })
    return map
  }, [selectedGender])

  const sizeOptions = useMemo(() => {
    const set = new Set<string>()
    perfumesData.forEach(p => { if (p.size) set.add(p.size) })
    return Array.from(set).sort()
  }, [])

  const sizeCounts = useMemo(() => {
    const map: Record<string, number> = {}
    perfumesData.forEach(p => { if (p.size) map[p.size] = (map[p.size] || 0) + 1 })
    return map
  }, [])

  const genderCounts = useMemo(() => {
    const map: Record<string, number> = { Hombre: 0, Mujer: 0, Unisex: 0 }
    perfumesData.forEach(p => { if (p.gender) map[p.gender] = (map[p.gender] || 0) + 1 })
    return map
  }, [])

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filterActive = Boolean(searchTerm.trim() || selectedBrands.length > 0 || minPrice !== dataMinPrice || maxPrice !== dataMaxPrice)
  const totalPages = Math.max(1, Math.ceil(filteredPerfumes.length / perPage))
  const pageStart = (currentPage - 1) * perPage
  const pageItems = filteredPerfumes.slice(pageStart, pageStart + perPage)

  const toggleBrand = (brand: string) => {
    setCurrentPage(1)
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand])
  }

  const resetFilters = () => {
    setSearchTerm('')
    setSelectedBrands([])
    setMinPrice(dataMinPrice * 1000)
    setMaxPrice(dataMaxPrice * 1000)
    setCurrentPage(1)
  }

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
    const message = `Hola! Estoy interesado en comprar:%0A%0A${perfume.brand} - ${perfume.name}%0A%0A¿Está disponible?`
    window.open(`https://www.instagram.com/direct/t/17843825013072961?text=${message}`, '_blank')
  }
  const handleReservarCita = () => {
    window.open('https://www.instagram.com/direct/t/17843825013072961', '_blank')
  }
  const { addToCart } = useCart()

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

      {/* Uploader eliminado según solicitud */}
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

        {/* Mobile Filter & Sort trigger (like Adidas) */}
        <div className="md:hidden flex justify-end mb-6">
          <button
            className="px-4 py-2 border rounded flex items-center gap-2"
            onClick={() => setMobileFiltersOpen(true)}
          >
            FILTER &amp; SORT
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"/></svg>
          </button>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Sidebar filters */}
            <aside className="w-full md:w-72">
              <div className="p-4 border rounded bg-background/50">
                <h3 className="font-semibold mb-3">Filtros</h3>

                <div className="mb-3">
                  <input
                    type="search"
                    placeholder="Buscar por nombre o marca"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1) }}
                    className="w-full px-3 py-2 border rounded focus:outline-none"
                  />
                </div>

                <div className="mb-3">
                  <details className="mb-2" open>
                    <summary className="cursor-pointer font-medium">Marcas <span className="text-sm text-muted-foreground">({Object.keys(brandCounts).length})</span></summary>
                    <div className="mt-2 flex flex-col gap-2 max-h-48 overflow-auto pr-2">
                      {availableBrands.map(brand => (
                        <label key={brand} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => { toggleBrand(brand) }} />
                            <span className="truncate">{brand}</span>
                          </div>
                          <span className="text-muted-foreground text-xs">{brandCounts[brand] || 0}</span>
                        </label>
                      ))}
                    </div>
                  </details>
                </div>

                <div className="mb-3">
                  <details className="mb-2" open>
                    <summary className="cursor-pointer font-medium">Género</summary>
                    <div className="mt-2 flex flex-col gap-2">
                      {(['Hombre','Mujer','Unisex'] as const).map(g => (
                        <label key={g} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <input type="radio" name="gender" checked={selectedGender === g} onChange={() => { setSelectedGender(g); setCurrentPage(1) }} />
                            <span>{g}</span>
                          </div>
                          <span className="text-muted-foreground text-xs">{genderCounts[g]}</span>
                        </label>
                      ))}
                      <label className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <input type="radio" name="gender" checked={selectedGender === 'all'} onChange={() => { setSelectedGender('all'); setCurrentPage(1) }} />
                          <span>Todos</span>
                        </div>
                        <span className="text-muted-foreground text-xs">{perfumesData.length}</span>
                      </label>
                    </div>
                  </details>

                  <details className="mb-2">
                    <summary className="cursor-pointer font-medium">Tamaño</summary>
                    <div className="mt-2 flex flex-col gap-2 max-h-48 overflow-auto pr-2">
                      {sizeOptions.map(s => (
                        <label key={s} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" checked={false} onChange={() => { /* placeholder for size filtering */ }} />
                            <span className="truncate">{s}</span>
                          </div>
                          <span className="text-muted-foreground text-xs">{sizeCounts[s] || 0}</span>
                        </label>
                      ))}
                    </div>
                  </details>

                  <details className="mb-2" open>
                    <summary className="cursor-pointer font-medium">Rango de precio (CRC)</summary>
                    <div className="mt-2 flex items-center gap-2">
                      <input type="number" className="w-28 px-2 py-1 border rounded" value={minPrice} onChange={e => { setMinPrice(Number(e.target.value || (dataMinPrice * 1000))); setCurrentPage(1) }} />
                      <span>-</span>
                      <input type="number" className="w-28 px-2 py-1 border rounded" value={maxPrice} onChange={e => { setMaxPrice(Number(e.target.value || (dataMaxPrice * 1000))); setCurrentPage(1) }} />
                    </div>
                  </details>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <Button variant="outline" onClick={resetFilters}>Limpiar</Button>
                  <div className="text-sm text-muted-foreground">{filteredPerfumes.length} resultados</div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1">
              {filterActive ? (
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {pageItems.map(perfume => (
                      <Card
                        key={perfume.id}
                        className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 relative"
                        onClick={(e) => handleSpray(e, perfume)}
                      >
                        <div className="relative aspect-square overflow-hidden bg-secondary/30">
                          <img src={perfume.image || "/placeholder.svg"} alt={perfume.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground mb-1">{perfume.brand}</p>
                          <h3 className="font-semibold text-lg mb-2 text-balance">{perfume.name}</h3>
                          {perfume.size && <p className="text-sm text-muted-foreground mb-2">{perfume.size}</p>}
                          <div className="mb-3">
                            {typeof perfume.price === 'number' ? (
                              <p className="text-lg font-semibold">{(perfume.price * 1000).toLocaleString('es-CR', { style: 'currency', currency: 'CRC' })}</p>
                            ) : (
                              <Button className="w-full" onClick={(e) => { e.stopPropagation(); }}>Consultar precio</Button>
                            )}
                          </div>
                          <Button className="w-full" onClick={(e) => { e.stopPropagation(); addToCart({ id: perfume.id, name: perfume.name, price: perfume.price, image: perfume.image || '/placeholder.svg', type: 'perfume', size: perfume.size }); import('sonner').then(m => m.toast.success('Añadido al carrito')) }}>Añadir al carrito</Button>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-8">
                    <Button variant="outline" disabled={currentPage <= 1} onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>Anterior</Button>
                    <div>Pagina {currentPage} / {totalPages}</div>
                    <Button variant="outline" disabled={currentPage >= totalPages} onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}>Siguiente</Button>
                  </div>
                </div>
              ) : (
                (() => {
                  const brands = Array.from(new Set(filteredPerfumes.map(p => p.brand)));
                  if (brands.length === 0) {
                    return (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">No se encontraron perfumes en esta categoría</p>
                      </div>
                    )
                  }

                  return (
                    <div className="space-y-12">
                      {brands.map((brand) => {
                        const byBrand = filteredPerfumes.filter(p => p.brand === brand)
                        const hombres = byBrand.filter(p => p.gender === 'Hombre')
                        const mujeres = byBrand.filter(p => p.gender === 'Mujer')
                        const unisex = byBrand.filter(p => p.gender === 'Unisex')

                        return (
                          <section key={brand} className="bg-background/50 p-6 rounded-lg border border-border">
                            <div className="flex items-center justify-between mb-4">
                              <h2 className="text-2xl font-semibold">{brand}</h2>
                              <p className="text-sm text-muted-foreground">{byBrand.length} fragancias</p>
                            </div>

                            {/* Hombre */}
                            {hombres.length > 0 && (
                              <div className="mb-6">
                                <h3 className="text-xl font-medium mb-3">Hombre</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                  {hombres.map(perfume => (
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
                                      </div>
                                      <div className="p-4">
                                        <p className="text-sm text-muted-foreground mb-1">{perfume.brand}</p>
                                        <h3 className="font-semibold text-lg mb-2 text-balance">{perfume.name}</h3>
                                        {perfume.size && (
                                          <p className="text-sm text-muted-foreground mb-2">{perfume.size}</p>
                                        )}
                                        <div className="mb-3">
                                          {typeof perfume.price === 'number' ? (
                                                        <p className="text-lg font-semibold">{(perfume.price * 1000).toLocaleString('es-CR', { style: 'currency', currency: 'CRC' })}</p>
                                                      ) : (
                                                        <Button className="w-full" onClick={(e) => { e.stopPropagation(); }}>Consultar precio</Button>
                                                      )}
                                        </div>
                                        <Button className="w-full" onClick={(e) => { e.stopPropagation(); addToCart({ id: perfume.id, name: perfume.name, price: perfume.price, image: perfume.image || '/placeholder.svg', type: 'perfume', size: perfume.size }); import('sonner').then(m => m.toast.success('Añadido al carrito')) }}>Añadir al carrito</Button>
                                      </div>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Mujer */}
                            {mujeres.length > 0 && (
                              <div className="mb-6">
                                <h3 className="text-xl font-medium mb-3">Mujer</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                  {mujeres.map(perfume => (
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
                                      </div>
                                      <div className="p-4">
                                        <p className="text-sm text-muted-foreground mb-1">{perfume.brand}</p>
                                        <h3 className="font-semibold text-lg mb-2 text-balance">{perfume.name}</h3>
                                        <div className="mb-3">
                                          {typeof perfume.price === 'number' ? (
                                            <p className="text-lg font-semibold">{(perfume.price * 1000).toLocaleString('es-CR', { style: 'currency', currency: 'CRC' })}</p>
                                          ) : (
                                            <Button className="w-full" onClick={(e) => { e.stopPropagation(); }}>Consultar precio</Button>
                                          )}
                                        </div>
                                        <Button className="w-full" onClick={(e) => { e.stopPropagation(); addToCart({ id: perfume.id, name: perfume.name, price: perfume.price, image: perfume.image || '/placeholder.svg', type: 'perfume' }) }}>Añadir al carrito</Button>
                                      </div>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Unisex */}
                            {unisex.length > 0 && (
                              <div>
                                <h3 className="text-xl font-medium mb-3">Unisex</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                  {unisex.map(perfume => (
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
                                      </div>
                                      <div className="p-4">
                                        <p className="text-sm text-muted-foreground mb-1">{perfume.brand}</p>
                                        <h3 className="font-semibold text-lg mb-2 text-balance">{perfume.name}</h3>
                                        <div className="mb-3">
                                          {typeof perfume.price === 'number' ? (
                                            <p className="text-lg font-semibold">{(perfume.price * 1000).toLocaleString('es-CR', { style: 'currency', currency: 'CRC' })}</p>
                                          ) : (
                                            <Button className="w-full" onClick={(e) => { e.stopPropagation(); }}>Consultar precio</Button>
                                          )}
                                        </div>
                                        <Button className="w-full" onClick={(e) => { e.stopPropagation(); addToCart({ id: perfume.id, name: perfume.name, price: perfume.price, image: perfume.image || '/placeholder.svg', type: 'perfume' }) }}>Añadir al carrito</Button>
                                      </div>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            )}
                          </section>
                        )
                      })}
                    </div>
                  )
                })()
              )}
            </main>
          </div>
        </div>

        {/* Mobile filters modal/drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 flex">
            <div className="w-3/4 bg-background p-4 overflow-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filtros</h3>
                <div className="flex items-center gap-2">
                  <button className="text-sm" onClick={() => { resetFilters() }}>Clear all</button>
                  <button className="text-sm" onClick={() => setMobileFiltersOpen(false)}>X</button>
                </div>
              </div>
              <div>
                {/* Reuse the same filter markup as the sidebar - simple copy of elements */}
                <div className="mb-4">
                  <input
                    type="search"
                    placeholder="Buscar por nombre o marca"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1) }}
                    className="w-full px-3 py-2 border rounded focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <details className="mb-2" open>
                    <summary className="cursor-pointer font-medium">Marcas <span className="text-sm text-muted-foreground">({Object.keys(brandCounts).length})</span></summary>
                    <div className="mt-2 flex flex-col gap-2 max-h-48 overflow-auto pr-2">
                      {availableBrands.map(brand => (
                        <label key={brand} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => { toggleBrand(brand) }} />
                            <span className="truncate">{brand}</span>
                          </div>
                          <span className="text-muted-foreground text-xs">{brandCounts[brand] || 0}</span>
                        </label>
                      ))}
                    </div>
                  </details>
                </div>

                <div className="mb-4">
                  <details className="mb-2" open>
                    <summary className="cursor-pointer font-medium">Género</summary>
                    <div className="mt-2 flex flex-col gap-2">
                      {(['Hombre','Mujer','Unisex'] as const).map(g => (
                        <label key={g} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <input type="radio" name="gender-mobile" checked={selectedGender === g} onChange={() => { setSelectedGender(g); setCurrentPage(1) }} />
                            <span>{g}</span>
                          </div>
                          <span className="text-muted-foreground text-xs">{genderCounts[g]}</span>
                        </label>
                      ))}
                      <label className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <input type="radio" name="gender-mobile" checked={selectedGender === 'all'} onChange={() => { setSelectedGender('all'); setCurrentPage(1) }} />
                          <span>Todos</span>
                        </div>
                        <span className="text-muted-foreground text-xs">{perfumesData.length}</span>
                      </label>
                    </div>
                  </details>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button variant="outline" onClick={() => { resetFilters(); setMobileFiltersOpen(false) }}>Limpiar</Button>
                  <Button onClick={() => setMobileFiltersOpen(false)}>Aplicar</Button>
                </div>
              </div>
            </div>
            <div className="flex-1" onClick={() => setMobileFiltersOpen(false)} />
          </div>
        )}
      </div>
    </div>
  </div>  
  )
}
