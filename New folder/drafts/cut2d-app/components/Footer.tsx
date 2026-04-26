import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="bg-gray-custom-800 text-white py-24 lg:py-32">
      <div className="container">
        {/* Logo */}
        <Image
          src="/logo.jpeg"
          alt="Cut2D Point"
          width={40}
          height={40}
          className="h-10 w-auto mb-16 invert"
        />

        {/* Grid */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
              Products
            </h3>
            <div className="space-y-3">
              <Link
                href="/electric-shear"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Electric Shear
              </Link>
              <Link
                href="/manual-shear"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Manual Shear
              </Link>
              <Link
                href="/cornermate"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Cornermate Table
              </Link>
              <Link
                href="/corner-blades"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Corner Blades
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
              Resources
            </h3>
            <div className="space-y-3">
              <Link
                href="/videos"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Videos
              </Link>
              <Link
                href="/data-sheets"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Data Sheets
              </Link>
              <Link
                href="/distributor-program"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Distributor Program
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
              Company
            </h3>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/careers"
                className="block text-body text-white/80 hover:text-white transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-6">
              Subscribe
            </h3>
            <p className="text-body text-white/80 mb-6">
              Get product updates and distributor news.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 outline-none focus:border-white transition-colors"
              />
              <Button
                variant="primary"
                className="w-full justify-center !px-0 !py-3"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col lg:flex-row gap-6 text-xs text-white/60">
            <span>© 2026 Cut2D Point. All rights reserved.</span>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility Statement
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://linkedin.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://facebook.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
