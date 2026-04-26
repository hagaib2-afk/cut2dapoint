'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Play, ChevronDown, Target, Wrench, Globe, Check } from 'lucide-react'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'
import Button from '@/components/Button'
import StatBlock from '@/components/StatBlock'
import SplitScreen from '@/components/SplitScreen'

export default function HomePage() {
  const [isHeroMounted, setIsHeroMounted] = useState(false)

  useEffect(() => {
    setIsHeroMounted(true)
  }, [])

  return (
    <>
      {/* HERO */}
      <section
        style={{ minHeight: 'calc(100vh - 72px)' }}
        className="relative bg-white flex flex-col items-center justify-center"
      >
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <Eyebrow>Precision Cutting Systems</Eyebrow>
            <h1 className="text-display mt-6">Cutting, refined.</h1>
            <p className="text-body-lg text-gray-custom-500 mt-6 max-w-[640px]">
              Professional-grade electric and manual shears engineered for
              operators who treat precision as non-negotiable.
            </p>
            <div className="flex gap-4 mt-12 flex-wrap justify-center">
              <Button variant="primary" href="#products">
                Explore Products
              </Button>
              <Button variant="ghost" icon={Play} iconPlacement="left">
                Watch Film
              </Button>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center mt-12">
            <div
              className={`transition-all duration-600 ${
                isHeroMounted
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative shadow-product rounded-lg overflow-hidden">
                <Image
                  src="/hero.jpg"
                  alt="Cut2D Point Product Lineup"
                  width={900}
                  height={500}
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>

          {/* Chevron indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-gray-custom-500 opacity-50" />
          </div>
        </div>
      </section>

      {/* VISION & OFFER */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="text-h2 mt-6">
              Industrial capability, without industrial compromise.
            </h2>
          </div>
          <div className="space-y-10">
            {/* Value Block 1 */}
            <div>
              <div className="flex gap-4">
                <Target size={24} className="text-brand-blue flex-shrink-0" />
                <div>
                  <h3 className="text-h4">Repeatable precision</h3>
                  <p className="text-body text-gray-custom-500 mt-2">
                    Every cut within 0.1mm tolerance, cycle after cycle.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Block 2 */}
            <div>
              <div className="flex gap-4">
                <Wrench size={24} className="text-brand-blue flex-shrink-0" />
                <div>
                  <h3 className="text-h4">Built to be serviced</h3>
                  <p className="text-body text-gray-custom-500 mt-2">
                    Every component accessible, replaceable, and documented.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Block 3 */}
            <div>
              <div className="flex gap-4">
                <Globe size={24} className="text-brand-blue flex-shrink-0" />
                <div>
                  <h3 className="text-h4">Global support network</h3>
                  <p className="text-body text-gray-custom-500 mt-2">
                    Technical backing wherever your operation runs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PRODUCT PREVIEW */}
      <div className="bg-white" id="products">
        <SplitScreen
          leftImage="/products/corner-closed.jpg"
          leftTitle="Cornermate Table"
          leftHref="/cornermate"
          rightImage="/products/electric-front.jpg"
          rightTitle="Electric Shear"
          rightHref="/electric-shear"
        />
        <div className="container">
          <div className="flex justify-center gap-8 my-12 flex-wrap">
            <Button variant="ghost" href="/manual-shear">
              Manual Shear →
            </Button>
            <Button variant="ghost" href="/corner-blades">
              Corner Blades →
            </Button>
          </div>
        </div>
      </div>

      {/* WHY CUT2D POINT */}
      <section className="relative min-h-[600px] overflow-hidden bg-gray-custom-800">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/why-cut2d.jpg"
            alt="Industrial manufacturing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-custom-800 via-gray-custom-800/70 to-gray-custom-800/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="container">
            <div className="py-24 lg:py-32 max-w-[560px]">
              <Eyebrow variant="light">Engineering</Eyebrow>
              <h2 className="text-h2 text-white mt-6">
                Built in-house. Proven in the field.
              </h2>
              <p className="text-body-lg text-white/80 mt-6">
                Every Cut2D Point product is designed, machined, and assembled
                by the same team that stands behind it. No outsourced mystery
                components. No unsupported product lines. Just equipment built
                to outlast the operators who use it.
              </p>

              {/* Bullets */}
              <div className="space-y-4 mt-10">
                {[
                  'Designed and manufactured in-house',
                  '5-year mechanical warranty',
                  'Direct technical support from engineers',
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Check size={20} className="text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-body text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button variant="ghost" href="/about">
                  About Our Process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IN NUMBERS */}
      <Section background="off-white">
        <div className="text-center mb-16 max-w-[720px] mx-auto">
          <Eyebrow>By the Numbers</Eyebrow>
          <h2 className="text-h2 mt-6">Proven at scale.</h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <StatBlock
            label="Precision"
            value="0.1mm"
            description="Repeatable cut tolerance across every unit shipped"
          />
          <StatBlock
            label="Warranty"
            value="5 Years"
            description="Full mechanical coverage on all core components"
          />
          <StatBlock
            label="Units Shipped"
            value="1,200+"
            description="Operating in fabrication shops across North America and Europe"
          />
          <StatBlock
            label="Distributors"
            value="40+"
            description="Active partners serving regional and industry-specific markets"
          />
        </div>
      </Section>

      {/* PARTNERS */}
      <Section>
        <div className="text-center mb-16 max-w-[720px] mx-auto">
          <Eyebrow>Trusted By</Eyebrow>
          <h3 className="text-h3 mt-6">
            Professional operations that chose precision.
          </h3>
        </div>

        <div className="bg-off-white rounded-lg py-12 px-8 flex justify-around items-center gap-8 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-32 h-10 border border-gray-custom-300 rounded flex items-center justify-center text-gray-custom-500 text-sm font-medium opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              PARTNER {String(i + 1).padStart(2, '0')}
            </div>
          ))}
        </div>
      </Section>

      {/* FOUNDING DISTRIBUTOR CTA */}
      <Section>
        <div className="text-center max-w-[720px] mx-auto">
          <Eyebrow variant="gold">Now Accepting Applications</Eyebrow>
          <h2 className="text-h2 mt-6">
            Become a founding Cut2D Point distributor.
          </h2>
          <p className="text-body-lg text-gray-custom-500 mt-6 mb-8">
            We're selecting regional partners to grow with us. Founding
            distributors receive territory protection, preferred margins, and
            direct access to our engineering team.
          </p>
          <Button variant="gold" href="/distributor-program">
            Apply for Territory
          </Button>
          <p className="text-small text-gray-custom-500 mt-6">
            Applications reviewed weekly · Current openings: North America, EU
          </p>
        </div>
      </Section>

      {/* CAREERS CTA */}
      <Section background="off-white">
        <div className="text-center max-w-[720px] mx-auto">
          <Eyebrow>We Are Hiring</Eyebrow>
          <h2 className="text-h2 mt-6">Join our engineering team.</h2>
          <p className="text-body-lg text-gray-custom-500 mt-6 mb-8">
            We're looking for mechanical engineers, AI researchers, and
            manufacturing specialists who are passionate about precision
            engineering. Help us build the next generation of cutting equipment.
          </p>
          <Button variant="primary" href="/careers">
            View Open Positions
          </Button>
          <p className="text-small text-gray-custom-500 mt-6">
            Positions: Remote and on-site · Competitive salaries · Equity packages
          </p>
        </div>
      </Section>
    </>
  )
}
