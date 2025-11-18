export interface Perfume {
  id: string
  name: string
  brand: string
  price: number
  image: string
  gender: 'Hombre' | 'Mujer' | 'Unisex'
  notes: string
  description: string
}

export const perfumesData: Perfume[] = [
  // Antonio Banderas
  { id: 'ab-1', name: 'King of Seduction', brand: 'Antonio Banderas', price: 45, image: '/antonio-banderas-king-perfume.jpg', gender: 'Hombre', notes: 'Bergamota, Lavanda, Ámbar', description: 'Fragancia masculina seductora' },
  { id: 'ab-2', name: 'Her Secret Flame', brand: 'Antonio Banderas', price: 42, image: '/antonio-banderas-perfume-red-bottle.jpg', gender: 'Mujer', notes: 'Rosa, Vainilla, Pachulí', description: 'Sensual y femenina' },
  { id: 'ab-3', name: 'Power of Seduction', brand: 'Antonio Banderas', price: 40, image: '/antonio-banderas-perfume-black-bottle.jpg', gender: 'Hombre', notes: 'Cardamomo, Madera, Almizcle', description: 'Poder y seducción' },
  { id: 'ab-4', name: 'Her Secret Temptation', brand: 'Antonio Banderas', price: 42, image: '/antonio-banderas-perfume-purple-bottle.jpg', gender: 'Mujer', notes: 'Frambuesa, Vainilla, Sándalo', description: 'Tentación irresistible' },
  { id: 'ab-5', name: 'King of Seduction Absolute', brand: 'Antonio Banderas', price: 50, image: '/antonio-banderas-absolute-perfume.jpg', gender: 'Hombre', notes: 'Bergamota, Ámbar, Cuero', description: 'La versión más intensa' },
  
  // Abercrombie & Fitch
  { id: 'af-1', name: 'Authentic', brand: 'Abercrombie & Fitch', price: 65, image: '/abercrombie-authentic-perfume.jpg', gender: 'Unisex', notes: 'Iris, Lavanda, Ámbar', description: 'Auténtico y fresco' },
  { id: 'af-2', name: 'Authentic Night', brand: 'Abercrombie & Fitch', price: 68, image: '/abercrombie-authentic-perfume.jpg', gender: 'Hombre', notes: 'Pimienta, Incienso, Madera', description: 'Para las noches especiales' },
  
  // Armaf
  { id: 'ar-1', name: 'Club de Nuit Intense', brand: 'Armaf', price: 55, image: '/armaf-club-nuit-perfume.jpg', gender: 'Hombre', notes: 'Limón, Pachulí, Vainilla', description: 'Intenso y duradero' },
  { id: 'ar-2', name: 'Club de Nuit Woman', brand: 'Armaf', price: 52, image: '/armaf-club-woman-perfume.jpg', gender: 'Mujer', notes: 'Lichi, Peonía, Vainilla', description: 'Elegancia nocturna' },
  { id: 'ar-3', name: 'Milestone', brand: 'Armaf', price: 48, image: '/armaf-milestone-perfume.jpg', gender: 'Hombre', notes: 'Bergamota, Jengibre, Ámbar', description: 'Un hito en fragancias' },
  { id: 'ar-4', name: 'Venetian Blue', brand: 'Armaf', price: 45, image: '/armaf-venetian-perfume.jpg', gender: 'Hombre', notes: 'Bergamota, Salvia, Cedro', description: 'Frescura mediterránea' },
  { id: 'ar-5', name: 'Hunter Intense', brand: 'Armaf', price: 50, image: '/armaf-hunter-perfume.jpg', gender: 'Hombre', notes: 'Tabaco, Cuero, Madera', description: 'Intensidad cazadora' },
  { id: 'ar-6', name: 'Tres Nuit', brand: 'Armaf', price: 48, image: '/armaf-tres-nuit-perfume.jpg', gender: 'Hombre', notes: 'Limón, Violeta, Sándalo', description: 'Tres noches de pasión' },
  
  // Dior
  { id: 'di-1', name: "J'adore", brand: 'Dior', price: 120, image: '/dior-jadore-perfume.jpg', gender: 'Mujer', notes: 'Ylang-ylang, Rosa, Jazmín', description: 'Icónico y floral' },
  { id: 'di-2', name: 'Sauvage', brand: 'Dior', price: 115, image: '/dior-sauvage-perfume.jpg', gender: 'Hombre', notes: 'Bergamota, Pimienta, Ambroxan', description: 'Salvaje y magnético' },
  { id: 'di-3', name: 'Miss Dior', brand: 'Dior', price: 118, image: '/dior-miss-perfume.jpg', gender: 'Mujer', notes: 'Rosa, Peonía, Iris', description: 'Romance parisino' },
  { id: 'di-4', name: 'Fahrenheit', brand: 'Dior', price: 110, image: '/dior-fahrenheit-perfume.jpg', gender: 'Hombre', notes: 'Violeta, Cuero, Cedro', description: 'Calor intenso' },
  
  // Chanel
  { id: 'ch-1', name: 'Nº 5', brand: 'Chanel', price: 145, image: '/chanel-no5-perfume.jpg', gender: 'Mujer', notes: 'Aldehídos, Rosa, Vainilla', description: 'El perfume más icónico' },
  { id: 'ch-2', name: 'Bleu de Chanel', brand: 'Chanel', price: 135, image: '/chanel-bleu-perfume.jpg', gender: 'Hombre', notes: 'Cítricos, Incienso, Cedro', description: 'Azul intenso' },
  { id: 'ch-3', name: 'Coco Mademoiselle', brand: 'Chanel', price: 140, image: '/chanel-coco-perfume.jpg', gender: 'Mujer', notes: 'Naranja, Rosa, Pachulí', description: 'Seducción moderna' },
  { id: 'ch-4', name: 'Chance', brand: 'Chanel', price: 130, image: '/chanel-chance-perfume.jpg', gender: 'Mujer', notes: 'Pimienta, Jazmín, Ámbar', description: 'Una oportunidad de suerte' },
  
  // Versace
  { id: 've-1', name: 'Eros', brand: 'Versace', price: 95, image: '/versace-eros-perfume.jpg', gender: 'Hombre', notes: 'Menta, Vainilla, Madera', description: 'Pasión griega' },
  { id: 've-2', name: 'Dylan Blue', brand: 'Versace', price: 92, image: '/versace-dylan-perfume.jpg', gender: 'Hombre', notes: 'Bergamota, Pimienta, Incienso', description: 'Azul profundo' },
  { id: 've-3', name: 'Bright Crystal', brand: 'Versace', price: 90, image: '/versace-crystal-perfume.jpg', gender: 'Mujer', notes: 'Granada, Peonía, Ámbar', description: 'Cristal brillante' },
  { id: 've-4', name: 'Eros Pour Femme', brand: 'Versace', price: 93, image: '/versace-eros-femme-perfume.jpg', gender: 'Mujer', notes: 'Limón, Jazmín, Sándalo', description: 'Pasión femenina' },
  
  // Carolina Herrera
  { id: 'car-1', name: '212 VIP', brand: 'Carolina Herrera', price: 85, image: '/carolina-212-perfume.jpg', gender: 'Mujer', notes: 'Champagne, Gardenia, Almizcle', description: 'Fiesta exclusiva' },
  { id: 'car-2', name: 'Good Girl', brand: 'Carolina Herrera', price: 110, image: '/carolina-goodgirl-perfume.jpg', gender: 'Mujer', notes: 'Almendra, Café, Tuberosa', description: 'Dulce y rebelde' },
  { id: 'car-3', name: 'Bad Boy', brand: 'Carolina Herrera', price: 105, image: '/carolina-badboy-perfume.jpg', gender: 'Hombre', notes: 'Pimienta, Salvia, Cacao', description: 'Chico malo' },
  { id: 'car-4', name: 'CH Men', brand: 'Carolina Herrera', price: 88, image: '/carolina-chmen-perfume.jpg', gender: 'Hombre', notes: 'Pomelo, Cuero, Madera', description: 'Masculinidad elegante' },
  
  // Paco Rabanne
  { id: 'pr-1', name: 'One Million', brand: 'Paco Rabanne', price: 95, image: '/paco-million-perfume.jpg', gender: 'Hombre', notes: 'Pomelo, Canela, Cuero', description: 'Riqueza dorada' },
  { id: 'pr-2', name: 'Invictus', brand: 'Paco Rabanne', price: 92, image: '/paco-invictus-perfume.jpg', gender: 'Hombre', notes: 'Pomelo, Laurel, Ámbar', description: 'Victoria invencible' },
  { id: 'pr-3', name: 'Olympea', brand: 'Paco Rabanne', price: 90, image: '/paco-olympea-perfume.jpg', gender: 'Mujer', notes: 'Jengibre, Vainilla, Ámbar', description: 'Diosa olímpica' },
  { id: 'pr-4', name: 'Fame', brand: 'Paco Rabanne', price: 88, image: '/paco-fame-perfume.jpg', gender: 'Mujer', notes: 'Mango, Incienso, Vainilla', description: 'Fama sensual' },
  
  // YSL
  { id: 'ysl-1', name: 'Y', brand: 'Yves Saint Laurent', price: 105, image: '/ysl-y-perfume.jpg', gender: 'Hombre', notes: 'Bergamota, Salvia, Cedro', description: 'La pregunta esencial' },
  { id: 'ysl-2', name: 'Libre', brand: 'Yves Saint Laurent', price: 120, image: '/ysl-libre-perfume.jpg', gender: 'Mujer', notes: 'Lavanda, Naranja, Vainilla', description: 'Libertad audaz' },
  { id: 'ysl-3', name: 'La Nuit de LHomme', brand: 'Yves Saint Laurent', price: 98, image: '/ysl-nuit-perfume.jpg', gender: 'Hombre', notes: 'Cardamomo, Cedro, Cumarina', description: 'Seductor nocturno' },
  { id: 'ysl-4', name: 'Black Opium', brand: 'Yves Saint Laurent', price: 115, image: '/ysl-opium-perfume.jpg', gender: 'Mujer', notes: 'Café, Vainilla, Flor de naranja', description: 'Adicción oscura' },
  
  // Giorgio Armani
  { id: 'ga-1', name: 'Acqua di Giò', brand: 'Giorgio Armani', price: 105, image: '/armani-acqua-perfume.jpg', gender: 'Hombre', notes: 'Bergamota, Neroli, Pachulí', description: 'Agua marina' },
  { id: 'ga-2', name: 'Sí', brand: 'Giorgio Armani', price: 115, image: '/armani-si-perfume.jpg', gender: 'Mujer', notes: 'Grosella, Vainilla, Pachulí', description: 'Di sí a todo' },
  { id: 'ga-3', name: 'Armani Code', brand: 'Giorgio Armani', price: 98, image: '/armani-code-perfume.jpg', gender: 'Hombre', notes: 'Limón, Anís, Tabaco', description: 'Código de seducción' },
  { id: 'ga-4', name: 'My Way', brand: 'Giorgio Armani', price: 110, image: '/armani-myway-perfume.jpg', gender: 'Mujer', notes: 'Bergamota, Flor de naranja, Vainilla', description: 'Mi camino' },
]
