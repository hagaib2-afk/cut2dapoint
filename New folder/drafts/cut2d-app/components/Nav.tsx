'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const products = [
  {
    name: 'Electric Shear',
    href: '/electric-shear',
    description: 'Production-grade bench shear',
  },
  {
    name: 'Manual Shear',
    href: '/manual-shear',
    description: 'Precision hand-powered cutting',
  },
  {
    name: 'Cornermate Table',
    href: '/cornermate',
    description: 'Corner finishing system',
  },
  {
    name: 'Corner Blades',
    href: '/corner-blades',
    description: 'Interchangeable blade cartridges',
  },
]

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`sticky top-0 z-50 w-full h-[72px] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm border-b border-gray-custom-100 shadow-sm-subtle'
            : 'bg-white'
        }`}
      >
        <div className="container flex items-center justify-between h-full px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="Cut2D Point"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="text-gray-custom-800 text-sm font-medium relative group">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-200 origin-left"></span>
              </button>

              {/* Dropdown Panel */}
              {showDropdown && (
                <div className="absolute top-full left-0 mt-4 w-[640px] bg-white shadow-card rounded-lg p-6 grid grid-cols-2 gap-4">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="p-3 hover:bg-off-white rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 bg-off-white rounded mb-2"></div>
                      <h4 className="text-h4 text-gray-custom-800">
                        {product.name}
                      </h4>
                      <p className="text-small text-gray-custom-500 mt-1">
                        {product.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link href="/videos" className="text-gray-custom-800 text-sm font-medium relative group">
              Videos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-200 origin-left"></span>
            </Link>
            <Link href="/data-sheets" className="text-gray-custom-800 text-sm font-medium relative group">
              Data Sheets
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-200 origin-left"></span>
            </Link>
            <Link href="/distributor-program" className="text-gray-custom-800 text-sm font-medium relative group">
              Distributor Program
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-200 origin-left"></span>
            </Link>
            <Link href="/careers" className="text-gray-custom-800 text-sm font-medium relative group">
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-200 origin-left"></span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button
                variant="gold"
                href="/distributor-program"
                className="!px-6 !py-3 !text-sm"
              >
                Become a Distributor
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-custom-800" />
              ) : (
                <Menu size={24} className="text-gray-custom-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white lg:hidden flex flex-col">
          <div className="flex-1 overflow-auto p-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-h4 text-gray-custom-800 mb-4">Products</h3>
                <div className="space-y-3 ml-4">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block text-body text-gray-custom-800"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/videos"
                className="block text-body text-gray-custom-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Videos
              </Link>
              <Link
                href="/data-sheets"
                className="block text-body text-gray-custom-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Data Sheets
              </Link>
              <Link
                href="/distributor-program"
                className="block text-body text-gray-custom-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Distributor Program
              </Link>
              <Link
                href="/careers"
                className="block text-body text-gray-custom-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
            </div>
          </div>
          <div className="p-12 border-t border-gray-custom-100">
            <Button
              variant="gold"
              href="/distributor-program"
              className="w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Become a Distributor
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
