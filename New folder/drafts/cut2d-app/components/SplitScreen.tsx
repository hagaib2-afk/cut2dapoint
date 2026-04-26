'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface SplitScreenProps {
  leftImage: string
  leftTitle: string
  leftHref: string
  rightImage: string
  rightTitle: string
  rightHref: string
}

export default function SplitScreen({
  leftImage,
  leftTitle,
  leftHref,
  rightImage,
  rightTitle,
  rightHref,
}: SplitScreenProps) {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null)

  return (
    <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
      {/* Left */}
      <Link href={leftHref}>
        <div
          className="relative overflow-hidden bg-off-white flex items-end justify-start transition-opacity duration-300"
          style={{
            opacity:
              hoveredSide === 'right' ? 0.5 : 1,
          }}
          onMouseEnter={() => setHoveredSide('left')}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <Image
            src={leftImage}
            alt={leftTitle}
            fill
            className="object-contain p-12"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-custom-800 to-transparent p-8">
            <h3 className="text-h3 text-white">{leftTitle}</h3>
          </div>
          {hoveredSide === 'left' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Right */}
      <Link href={rightHref}>
        <div
          className="relative overflow-hidden bg-off-white flex items-end justify-start transition-opacity duration-300"
          style={{
            opacity:
              hoveredSide === 'left' ? 0.5 : 1,
          }}
          onMouseEnter={() => setHoveredSide('right')}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <Image
            src={rightImage}
            alt={rightTitle}
            fill
            className="object-contain p-12"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-custom-800 to-transparent p-8">
            <h3 className="text-h3 text-white">{rightTitle}</h3>
          </div>
          {hoveredSide === 'right' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
