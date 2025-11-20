export interface Vape {
  id: string
  name: string
  flavor: string
  puffs: string
  price: number
  image: string
  category: 'Mini' | 'Pro' | 'Max' | 'Ultra'
  size?: string
  description: string
}

export const vapesData: Vape[] = [
  { id: 'v1', name: 'Tropical Paradise', flavor: 'Frutas Tropicales', puffs: '600', price: 8, image: '/modern-sleek-vape-device-tropical-colors.jpg', category: 'Mini', description: 'Explosión de sabores tropicales' },
  { id: 'v2', name: 'Ice Mint', flavor: 'Menta Helada', puffs: '800', price: 10, image: '/elegant-mint-blue-vape-device.jpg', category: 'Mini', description: 'Frescura extrema' },
  { id: 'v3', name: 'Berry Blast', flavor: 'Frutos Rojos', puffs: '2000', price: 15, image: '/red-berry-colored-modern-vape.jpg', category: 'Pro', description: 'Mezcla de bayas dulces' },
  { id: 'v4', name: 'Gold Tobacco', flavor: 'Tabaco Premium', puffs: '2500', price: 18, image: '/elegant-gold-tobacco-vape-device.jpg', category: 'Pro', description: 'Sabor clásico refinado' },
  { id: 'v5', name: 'Mango Passion', flavor: 'Mango', puffs: '5000', price: 22, image: '/orange-yellow-mango-vape-device.jpg', category: 'Max', description: 'Mango tropical maduro' },
  { id: 'v6', name: 'Grape Ice', flavor: 'Uva Helada', puffs: '6000', price: 24, image: '/purple-grape-colored-vape-device.jpg', category: 'Max', description: 'Uva con toque refrescante' },
  { id: 'v7', name: 'Watermelon Fresh', flavor: 'Sandía', puffs: '8000', price: 28, image: '/pink-watermelon-vape-device-modern.jpg', category: 'Ultra', description: 'Sandía jugosa' },
  { id: 'v8', name: 'Peach Dream', flavor: 'Melocotón', puffs: '10000', price: 32, image: '/peach-orange-colored-premium-vape.jpg', category: 'Ultra', description: 'Melocotón suave y dulce' },
]
