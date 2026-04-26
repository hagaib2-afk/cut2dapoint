import Image from 'next/image'
import { Download } from 'lucide-react'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'
import Button from '@/components/Button'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Corner Blades | Cut2D Point',
  description: 'Precision-ground blade cartridges for the Cornermate Table with thousands of cycles per blade.',
}

export default function CornerBladesPage() {
  const blades = [
    {
      eyebrow: 'Blade — RC6',
      title: 'Round Corner, 6mm Radius',
      description:
        'The signature ChromaLuxe finish. Smooth, uniform radius across aluminum and composite panels.',
      specs: [
        { label: 'Radius', value: '6mm' },
        { label: 'Material', value: 'Tool steel' },
        { label: 'Rated cycles', value: '50,000+' },
      ],
    },
    {
      eyebrow: 'Blade — NC6',
      title: 'Notch Corner, 6mm',
      description:
        'Clean 90° notch cuts for precision assemblies and signage mounting systems.',
      specs: [
        { label: 'Depth', value: '6mm' },
        { label: 'Material', value: 'Tool steel' },
        { label: 'Rated cycles', value: '50,000+' },
      ],
    },
    {
      eyebrow: 'Blade — CC12',
      title: 'Chamfer Corner, 12mm',
      description:
        'Professional 45° chamfer for premium edge treatments and display finishing.',
      specs: [
        { label: 'Chamfer', value: '12mm @ 45°' },
        { label: 'Material', value: 'Tool steel' },
        { label: 'Rated cycles', value: '40,000+' },
      ],
    },
  ]

  const materials = [
    'Aluminum',
    'ACM',
    'ChromaLuxe',
    'Brass',
    'Copper',
    'Engineering plastic',
    'Acrylic',
    'Dibond',
  ]

  return (
    <>
      {/* HERO */}
      <Section>
        <Breadcrumb
          items={[
            { label: 'Products', href: '/' },
            { label: 'Corner Blades' },
          ]}
        />
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] flex items-center">
          <div>
            <Eyebrow>04 — Corner Blades</Eyebrow>
            <h1 className="text-h1 mt-6">Interchangeable blades. Uncompromising edges.</h1>
            <p className="text-body-lg text-gray-custom-500 mt-8 max-w-[480px]">
              Precision-ground blade cartridges engineered for the Cornermate
              Table. Swap in seconds, cut for thousands of cycles.
            </p>
            <div className="flex gap-4 mt-12 flex-wrap">
              <Button variant="primary" href="#quote">
                Add to Quote
              </Button>
              <Button variant="ghost" icon={Download} iconPlacement="left">
                Download Spec Sheet
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/products/corner-closed.jpg"
              alt="Corner Blades"
              width={500}
              height={500}
              className="object-contain shadow-product rounded-lg p-12 bg-off-white"
            />
          </div>
        </div>
      </Section>

      {/* 3-BLADE GRID */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-8">
          {blades.map((blade, i) => (
            <div key={i} className="bg-white shadow-card rounded-lg p-8">
              {/* Blade visual */}
              <div className="aspect-square bg-off-white rounded-lg flex items-center justify-center mb-6">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="text-brand-blue"
                >
                  {i === 0 && (
                    <circle
                      cx="60"
                      cy="60"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  )}
                  {i === 1 && (
                    <rect
                      x="40"
                      y="40"
                      width="40"
                      height="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  )}
                  {i === 2 && (
                    <line
                      x1="30"
                      y1="90"
                      x2="90"
                      y2="30"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  )}
                </svg>
              </div>

              {/* Content */}
              <Eyebrow>{blade.eyebrow}</Eyebrow>
              <h4 className="text-h4 mt-2">{blade.title}</h4>
              <p className="text-body text-gray-custom-500 mt-4">{blade.description}</p>

              {/* Specs */}
              <div className="space-y-3 mt-6 pt-6 border-t border-gray-custom-100">
                {blade.specs.map((spec, j) => (
                  <div key={j} className="flex justify-between items-center">
                    <span className="text-small text-gray-custom-500">
                      {spec.label}
                    </span>
                    <span className="text-small font-medium text-gray-custom-800">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Button
                variant="ghost"
                href="#quote"
                className="w-full justify-center mt-8"
              >
                Add to Quote
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* MATERIAL COMPATIBILITY */}
      <Section background="off-white" narrow>
        <div className="text-center mb-12">
          <Eyebrow>Validated Materials</Eyebrow>
          <h3 className="text-h3 mt-6">Tested across every substrate we support.</h3>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {materials.map((material, i) => (
            <button
              key={i}
              className="border border-gray-custom-300 rounded-full px-5 py-2 text-small text-gray-custom-800 hover:border-brand-blue hover:text-brand-blue transition-colors duration-200"
            >
              {material}
            </button>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section narrow>
        <div className="text-center">
          <h3 className="text-h3">Need a custom blade geometry?</h3>
          <p className="text-body-lg text-gray-custom-500 mt-6 max-w-[560px] mx-auto">
            Our engineering team builds to spec for distributors and enterprise
            customers.
          </p>
          <Button variant="primary" href="/contact" className="mt-12 mx-auto">
            Contact Engineering
          </Button>
        </div>
      </Section>
    </>
  )
}
