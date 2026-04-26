import React from 'react'

type EyebrowVariant = 'blue' | 'gold' | 'light'

interface EyebrowProps {
  children: React.ReactNode
  variant?: EyebrowVariant
}

export default function Eyebrow({ children, variant = 'blue' }: EyebrowProps) {
  const variantClasses = {
    blue: 'text-brand-blue',
    gold: 'text-brand-gold',
    light: 'text-brand-blue-light',
  }

  return (
    <div
      className={`${variantClasses[variant]} text-xs font-semibold uppercase tracking-widest`}
    >
      {children}
    </div>
  )
}
