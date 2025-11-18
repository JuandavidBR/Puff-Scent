export interface Wax {
  id: string
  name: string
  scent: string
  duration: string
  price: number
  image: string
  type: 'Vela' | 'Difusor' | 'Wax Melt'
  description: string
}

export const waxData: Wax[] = [
  { id: 'w1', name: 'Lavanda Serenidad', scent: 'Lavanda', duration: '40 horas', price: 25, image: '/lavender-wax-candle.jpg', type: 'Vela', description: 'Relajación pura' },
  { id: 'w2', name: 'Vainilla Bourbon', scent: 'Vainilla', duration: '45 horas', price: 28, image: '/vanilla-wax-candle.jpg', type: 'Vela', description: 'Dulzura cálida' },
  { id: 'w3', name: 'Bosque de Cedro', scent: 'Cedro', duration: '60 días', price: 35, image: '/cedar-diffuser.jpg', type: 'Difusor', description: 'Madera aromática' },
  { id: 'w4', name: 'Cítricos Frescos', scent: 'Limón y Naranja', duration: '50 días', price: 32, image: '/citrus-diffuser.jpg', type: 'Difusor', description: 'Energía cítrica' },
  { id: 'w5', name: 'Rosa Elegante', scent: 'Rosa', duration: '20 horas', price: 18, image: '/rose-wax-melts.jpg', type: 'Wax Melt', description: 'Romance floral' },
  { id: 'w6', name: 'Ámbar Místico', scent: 'Ámbar', duration: '25 horas', price: 20, image: '/amber-wax-melts.jpg', type: 'Wax Melt', description: 'Calidez oriental' },
  { id: 'w7', name: 'Canela Especiada', scent: 'Canela', duration: '35 horas', price: 22, image: '/cinnamon-wax-candle.jpg', type: 'Vela', description: 'Calidez especiada' },
  { id: 'w8', name: 'Ocean Breeze', scent: 'Brisa Marina', duration: '55 días', price: 33, image: '/ocean-diffuser.jpg', type: 'Difusor', description: 'Frescura del mar' },
]
