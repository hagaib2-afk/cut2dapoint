'use client'

import React, { useEffect, useRef, useState } from 'react'
import Eyebrow from './Eyebrow'

interface StatBlockProps {
  label: string
  value: string
  description: string
}

export default function StatBlock({
  label,
  value,
  description,
}: StatBlockProps) {
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          // Extract numeric part and prefix/suffix
          const match = value.match(/^([^\d]*)(\d+)(.*)$/)
          if (match) {
            const [, prefix, numStr, suffix] = match
            const endNum = parseInt(numStr, 10)
            const startTime = performance.now()
            const duration = 1500

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              const easeOut = 1 - Math.pow(1 - progress, 3)
              const current = Math.floor(endNum * easeOut)

              setDisplayValue(`${prefix}${current}${suffix}`)

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }

            requestAnimationFrame(animate)
          }
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [value, hasAnimated])

  return (
    <div ref={ref}>
      <Eyebrow>{label}</Eyebrow>
      <div className="text-display text-gray-custom-800 mt-4 leading-none">
        {displayValue}
      </div>
      <div className="w-10 h-0.5 bg-brand-blue my-6"></div>
      <p className="text-xs text-gray-custom-500">{description}</p>
    </div>
  )
}
