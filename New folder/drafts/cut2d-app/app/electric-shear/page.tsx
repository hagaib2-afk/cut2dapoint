import Image from 'next/image'
import { Download } from 'lucide-react'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'
import Button from '@/components/Button'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Electric Shear | Cut2D Point',
  description: 'Production-grade electric shear engineered for continuous use with consistent force and controlled descent.',
}

export default function ElectricShearPage() {
  return (
    <>
      {/* HERO */}
      <Section>
        <Breadcrumb
          items={[
            { label: 'Products', href: '/' },
            { label: 'Electric Shear' },
          ]}
        />
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] flex items-center">
          <div>
            <Eyebrow>01 — Electric Shear</Eyebrow>
            <h1 className="text-h1 mt-6">The Big Boys Bench Shear.</h1>
            <p className="text-body-lg text-gray-custom-500 mt-8 max-w-[480px]">
              A production-grade electric shear engineered for continuous use.
              Consistent force, controlled descent, and a footprint that fits
              any professional workbench.
            </p>
            <div className="flex gap-4 mt-12 flex-wrap">
              <Button variant="primary" href="#demo">
                Request Demo
              </Button>
              <Button variant="ghost" icon={Download} iconPlacement="left">
                Download Spec Sheet
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/products/electric-front.jpg"
              alt="Electric Shear"
              width={500}
              height={500}
              className="object-contain shadow-product rounded-lg p-12 bg-off-white"
            />
          </div>
        </div>
      </Section>

      {/* SPEC STRIP */}
      <div className="bg-off-white py-12">
        <div className="container">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 lg:gap-0">
            {[
              { label: 'Capacity', value: 'up to 3mm aluminum' },
              { label: 'Cycle Rate', value: '45 cuts/min' },
              { label: 'Power', value: '230V single-phase' },
              { label: 'Weight', value: '42kg' },
              { label: 'Footprint', value: '600 × 400mm' },
            ].map((spec, i) => (
              <div
                key={i}
                className="lg:border-l lg:border-gray-custom-300 lg:pl-8 first:lg:border-l-0 first:lg:pl-0"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-custom-500 mb-2">
                  {spec.label}
                </div>
                <div className="text-h4 text-gray-custom-800">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURE BLOCK 1 */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>02 — Reliability</Eyebrow>
            <h2 className="text-h2 mt-6">
              High reliability, engineered for consistency.
            </h2>
            <p className="text-body-lg text-gray-custom-500 mt-6">
              Industrial-grade components rated for 100,000+ cycles without
              recalibration. Replaceable blade assemblies designed for field
              service in under ten minutes.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src="/products/electric-45.jpg"
              alt="Electric Shear detail"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      {/* FEATURE BLOCK 2 */}
      <Section background="off-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex lg:order-2">
            <Image
              src="/products/electric-front.jpg"
              alt="Electric Shear design"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="lg:order-1">
            <Eyebrow>03 — Design</Eyebrow>
            <h2 className="text-h2 mt-6">
              Professionally designed, quietly powerful.
            </h2>
            <p className="text-body-lg text-gray-custom-500 mt-6">
              Low-profile body, operator-forward controls, and a finish that
              belongs on a showroom floor as much as a production line.
            </p>
          </div>
        </div>
      </Section>

      {/* FEATURE BLOCK 3 */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>04 — Precision</Eyebrow>
            <h2 className="text-h2 mt-6">
              Polished demeanor, uncompromising output.
            </h2>
            <p className="text-body-lg text-gray-custom-500 mt-6">
              Micro-adjustable cutting pressure, hardened tool-steel blades,
              and a guide system calibrated to 0.05mm across the full cutting
              width.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src="/products/electric-45.jpg"
              alt="Electric Shear precision"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      {/* BOTTOM CTA */}
      <Section background="off-white" narrow>
        <div className="text-center">
          <h3 className="text-h3">See it in your operation.</h3>
          <p className="text-body-lg text-gray-custom-500 mt-6 max-w-[560px] mx-auto">
            Request a technical walkthrough with our engineering team. 30
            minutes, your questions, no pitch.
          </p>
          <div className="flex gap-4 justify-center mt-12 flex-wrap">
            <Button variant="primary" href="#demo">
              Request Demo
            </Button>
            <Button variant="ghost" icon={Download} iconPlacement="left">
              Download Full Spec
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
