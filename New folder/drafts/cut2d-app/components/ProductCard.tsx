import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProductCardProps {
  image: string
  name: string
  tagline: string
  href: string
}

export default function ProductCard({
  image,
  name,
  tagline,
  href,
}: ProductCardProps) {
  return (
    <Link href={href}>
      <div className="group bg-white rounded-lg p-8 border border-transparent shadow-card hover:shadow-product hover:-translate-y-1 transition-all duration-400 cursor-pointer">
        <div className="aspect-square bg-off-white rounded-lg p-4 flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <h3 className="text-h4 text-gray-custom-800 mt-6">{name}</h3>
        <p className="text-body text-gray-custom-500 mt-2">{tagline}</p>
        <div className="flex items-center text-brand-blue text-sm font-semibold mt-6">
          <span>Learn more</span>
          <ArrowRight
            size={16}
            className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
          />
        </div>
      </div>
    </Link>
  )
}
