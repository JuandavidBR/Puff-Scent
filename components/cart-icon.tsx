'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export function CartIcon() {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const [pop, setPop] = useState(false)
  const prev = useRef<number>(totalItems)

  useEffect(() => {
    if (prev.current !== totalItems) {
      setPop(true)
      const t = setTimeout(() => setPop(false), 350)
      prev.current = totalItems
      return () => clearTimeout(t)
    }
  }, [totalItems])

  const display = totalItems > 9 ? '9+' : String(totalItems)

  return (
    <Link href="/carrito" className="relative text-foreground hover:text-accent transition-colors">
      <ShoppingBag className="w-5 h-5" />
      {totalItems > 0 && (
        <span className={`absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium cart-badge ${pop ? 'cart-badge-pop' : ''}`}>
          {display}
        </span>
      )}
    </Link>
  )
}
