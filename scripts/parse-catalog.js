const fs = require('fs')
const path = require('path')

const src = path.join(__dirname, '..', 'lib', 'data', 'CatalogoPerfumes.txt')
const out = path.join(__dirname, '..', 'lib', 'perfumes-data.ts')

function slugify(s){
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g,'')
}

function parseBlocks(text){
  const lines = text.split(/\r?\n/)
  const blocks = []
  let cur = {}
  for(let i=0;i<lines.length;i++){
    const l = lines[i].trim()
    if(!l){
      if(Object.keys(cur).length) { blocks.push(cur); cur = {} }
      continue
    }
    if(/^[-]{2,}$/.test(l)){
      if(Object.keys(cur).length) { blocks.push(cur); cur = {} }
      continue
    }
    const m = l.match(/^([^:]+):\s*(.*)$/)
    if(m){
      const k = m[1].trim()
      const v = m[2].trim()
      cur[k] = v
    }
  }
  if(Object.keys(cur).length) blocks.push(cur)
  return blocks
}

function parseMl(presentacion){
  if(!presentacion) return 100
  const m = presentacion.match(/(\d{2,3})\s*ml/i)
  if(m) return parseInt(m[1],10)
  const m2 = presentacion.match(/(\d{2,3})/)
  if(m2) return parseInt(m2[1],10)
  return 100
}

function mapGender(g, name, brand){
  // Normalize inputs
  const tokens = (str) => (str||'').toLowerCase()
  const gstr = tokens(g)
  const nstr = tokens(name)
  const bstr = tokens(brand)

  const female = ['mujer','woman','femme','pour femme','for her','fem','femenino','feminin']
  const male = ['hombre','man','pour homme','for him','homme','men','masculino']

  // If explicit gender field present, prefer it
  if(gstr){
    if(gstr.includes('hombre')) return 'Hombre'
    if(gstr.includes('mujer')) return 'Mujer'
    if(gstr.includes('unisex')) return 'Unisex'
  }

  // Infer from name or brand tokens
  for(const t of female){ if(nstr.includes(t) || bstr.includes(t)) return 'Mujer' }
  for(const t of male){ if(nstr.includes(t) || bstr.includes(t)) return 'Hombre' }

  // Fallback
  return 'Unisex'
}

function estimatePrice(brand, ml){
  const brandKey = (brand||'').toLowerCase()
  const high = ['dior','chanel','ysl','yves saint laurent','giorgio armani','giorgio armani','armani']
  const mid = ['paco rabanne','versace','carolina herrera','paco','versace','carolina']
  const affordable = ['abercrombie & fitch','abercrombie','armaf','al haramain','afnan','afnan','ariana grande','antonio banderas','ariana','antonio banderas']

  let base = 60
  if(high.some(b=>brandKey.includes(b))) base = 120
  else if(mid.some(b=>brandKey.includes(b))) base = 95
  else if(affordable.some(b=>brandKey.includes(b))) base = 45
  else base = 60

  let factor = 1
  if(ml >= 200) factor = 1.8
  else if(ml === 150) factor = 1.4
  else if(ml === 100) factor = 1.0
  else if(ml === 50) factor = 0.6
  else if(ml < 50) factor = 0.4
  else factor = 1

  return Math.round(base * factor)
}

function uniqBy(arr, keyFn){
  const seen = new Set()
  const out = []
  for(const it of arr){
    const k = keyFn(it)
    if(seen.has(k)) continue
    seen.add(k)
    out.push(it)
  }
  return out
}

function main(){
  const txt = fs.readFileSync(src, 'utf8')
  const blocks = parseBlocks(txt)
  const items = blocks.map((b,i)=>{
    const name = b['Nombre'] || b['Name'] || ''
    const brand = b['Marca'] || b['Brand'] || ''
    const gender = mapGender(b['Género'] || b['Genero'] || b['Gender'], name, brand)
    const pres = b['Presentación'] || b['Presentacion'] || b['Presentacion'] || ''
    const ml = parseMl(pres)
    const price = estimatePrice(brand, ml)
    const size = pres && /no especific/i.test(pres) ? `${ml} ml` : (pres || `${ml} ml`)
    const id = slugify(brand + ' ' + name + ' ' + ml)
    // choose an image based on gender or brand as a reasonable placeholder
    let image = ''
    const brandKeyLower = (brand||'').toLowerCase()
    if(gender === 'Hombre') image = '/masculine-woody-perfume-bottle.jpg'
    else if(gender === 'Mujer') image = '/luxury-floral-perfume-bottle.jpg'
    else image = '/oriental-amber-perfume-bottle.jpg'

    // brand-specific overrides (common designer logos/placeholders)
    if(brandKeyLower.includes('chanel') || brandKeyLower.includes('dior')){
      image = '/luxury-perfume-ingredients-flowers-and-essences.jpg'
    }

    return {
      id,
      name: name || 'Sin nombre',
      brand: brand || 'Sin marca',
      price,
      image,
      gender,
      size: `${ml} ml`,
      notes: '',
      description: ''
    }
  })

  // dedupe by brand+name+size
  const uniq = uniqBy(items, it => `${it.brand}:::${it.name}:::${it.size}`)

  const tsLines = []
  tsLines.push("export interface Perfume {")
  tsLines.push("  id: string")
  tsLines.push("  name: string")
  tsLines.push("  brand: string")
  tsLines.push("  price: number")
  tsLines.push("  image: string")
  tsLines.push("  gender: 'Hombre' | 'Mujer' | 'Unisex'")
  tsLines.push("  size?: string")
  tsLines.push("  notes: string")
  tsLines.push("  description: string")
  tsLines.push("}")
  tsLines.push('')
  tsLines.push('export const perfumesData: Perfume[] = [')

  for(const p of uniq){
    const safeName = p.name.replace(/"/g, '\\"')
    const safeBrand = p.brand.replace(/"/g, '\\"')
    const notes = p.notes.replace(/"/g, '\\"')
    const desc = p.description.replace(/"/g, '\\"')
    tsLines.push('  {')
    tsLines.push(`    id: '${p.id}',`)
    tsLines.push(`    name: "${safeName}",`)
    tsLines.push(`    brand: "${safeBrand}",`)
    tsLines.push(`    price: ${p.price},`)
    tsLines.push(`    image: "${p.image}",`)
    tsLines.push(`    gender: '${p.gender}',`)
    tsLines.push(`    size: "${p.size}",`)
    tsLines.push(`    notes: "${notes}",`)
    tsLines.push(`    description: "${desc}"`)
    tsLines.push('  },')
  }

  tsLines.push(']')

  fs.writeFileSync(out, tsLines.join('\n'), 'utf8')
  console.log('Wrote', uniq.length, 'perfumes to', out)
}

main()
