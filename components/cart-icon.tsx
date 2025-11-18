'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import Link from 'next/link'

export function CartIcon() {
  const { totalItems } = useCart()

  return (
    <Link href="/carrito" className="relative text-foreground hover:text-accent transition-colors">
      <ShoppingBag className="w-5 h-5" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
