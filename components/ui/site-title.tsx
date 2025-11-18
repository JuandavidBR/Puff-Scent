"use client"

import Link from 'next/link'
import * as React from 'react'

export default function SiteTitle() {
  return (
    <Link href="/" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors" aria-label="Ir a inicio">
      <div className="w-1 h-8 bg-foreground" />
      <span className="font-serif text-xl md:text-2xl tracking-tight text-foreground">Puff&Scent</span>
    </Link>
  )
}
