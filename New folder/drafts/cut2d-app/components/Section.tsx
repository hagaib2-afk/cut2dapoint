import React from 'react'

type SectionBackground = 'white' | 'off-white' | 'dark'

interface SectionProps {
  children: React.ReactNode
  background?: SectionBackground
  narrow?: boolean
  className?: string
}

export default function Section({
  children,
  background = 'white',
  narrow = false,
  className = '',
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    'off-white': 'bg-off-white',
    dark: 'bg-gray-custom-800 text-white',
  }

  const innerClasses = narrow ? 'max-w-[960px]' : ''

  return (
    <section
      className={`${bgClasses[background]} py-16 lg:py-32 ${className}`}
    >
      <div className="container">
        <div className={innerClasses}>
          {children}
        </div>
      </div>
    </section>
  )
}
