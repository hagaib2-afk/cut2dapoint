import React from 'react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

type ButtonVariant = 'primary' | 'ghost' | 'gold'
type IconPlacement = 'left' | 'right'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
  href?: string
  icon?: LucideIcon
  iconPlacement?: IconPlacement
  className?: string
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  children,
  href,
  icon: Icon,
  iconPlacement = 'right',
  className = '',
  onClick,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 px-8 py-4 rounded-[4px] font-semibold text-base transition-all duration-200 cursor-pointer'

  const variantClasses = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue-dark',
    ghost: 'bg-transparent border border-gray-custom-300 text-gray-custom-800 hover:border-gray-custom-800 hover:bg-off-white',
    gold: 'bg-white border-[1.5px] border-brand-gold text-gray-custom-800 hover:bg-brand-gold hover:text-white px-9 py-[18px]',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  const content = (
    <>
      {Icon && iconPlacement === 'left' && <Icon size={18} />}
      {children}
      {Icon && iconPlacement === 'right' && <Icon size={18} />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
