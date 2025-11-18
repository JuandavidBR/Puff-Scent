"use client"

import { useRouter } from 'next/navigation'
import { Button } from './button'
import * as React from 'react'
import { ChevronLeft } from 'lucide-react'

type Props = {
  /** If true, render the button styled like the site title (PUFFSCENT) */
  titleMode?: boolean
  /** Optional title text to display when titleMode is true */
  titleText?: string
}

export default function BackButton({ titleMode, titleText }: Props) {
  const router = useRouter()

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  if (titleMode) {
    return (
      <button
        onClick={handleClick}
        className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
        aria-label="Volver"
      >
        <ChevronLeft className="w-6 h-6" />
        <span className="font-serif text-3xl md:text-4xl leading-none tracking-tight text-foreground">
          {titleText ?? 'Puff&Scent'}
        </span>
      </button>
    )
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleClick}>
      Volver
    </Button>
  )
}
