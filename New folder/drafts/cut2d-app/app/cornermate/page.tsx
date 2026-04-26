import Image from 'next/image'
import { Download, Zap, Layers, Shield, Ruler } from 'lucide-react'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'
import Button from '@/components/Button'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Cornermate Table | Cut2D Point',
  description: 'Dedicated corner-finishing system for radius, notch, and chamfer cuts in one unit.',
}

export default function CornermatePage() {
  const capabilities = [
    {
      icon: Zap,
      title: 'One-Step Operation',
      description: 'Pull the lever. Corner done. No setup between cuts.',
    },
    {
      icon: Layers,
      title: 'Interchangeable Blades',
      description: 'Swap between radius, notch, and chamfer in under 30 seconds.',
    },
    {
      icon: Shield,
      title: 'Operator-Safe Design',
      description: 'Enclosed cut path. Finger guards standard. Meets CE and OSHA.',
    },
    {
      icon: Ruler,
      title: 'Repeatable Accuracy',
      description: 'Blade cartridges pre-calibrated. First cut and thousandth cut are identical.',
    },
  ]

  const press = [
    {
      publication: 'Signs Industry Weekly',
      headline: 'A quiet revolution in panel finishing.',
      date: 'January 2026',
    },
    {
      publication: 'Fabrication Journal',
      headline: 'Cut2D Point challenges incumbents with Cornermate.',
      date: 'December 2025',
    },
    {
      publication: 'ChromaLuxe Insider',
      headline: 'The corner cutter the industry did not know it needed.',
      date: 'November 2025',
    },
  ]

  return (
    <>
      {/* HERO */}
      <Section>
        <Breadcrumb
          items={[
            { label: 'Products', href: '/' },
            { label: 'Cornermate Table' },
          ]}
        />
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] flex items-center">
          <div>
            <Eyebrow>03 — Cornermate Table</Eyebrow>
            <h1 className="text-h1 mt-6">Redefining the way you cut corners.</h1>
            <p className="text-body-lg text-gray-custom-500 mt-8 max-w-[480px]">
              A dedicated corner-finishing system that delivers radius, notch,
              and chamfer cuts with a single lever pull. Replaces three tools
              and six operator adjustments with one unit.
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
              src="/products/corner-closed.jpg"
              alt="Cornermate Table"
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
              { label: 'Cut Types', value: 'Radius / Notch / Chamfer' },
              { label: 'Radius', value: '6mm' },
              { label: 'Chamfer', value: '12mm' },
              { label: 'Materials', value: 'Aluminum, ACM, ChromaLuxe, plastic' },
              { label: 'Cycle Time', value: '<2 seconds' },
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

      {/* CAPABILITIES CAROUSEL */}
      <Section>
        <div className="text-center mb-16 max-w-[720px] mx-auto">
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="text-h2 mt-6">One table, three finishes, zero compromise.</h2>
        </div>

        <div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <div
                key={i}
                className="flex-shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] snap-start bg-off-white hover:bg-white hover:shadow-card rounded-lg p-8 min-h-[280px] flex flex-col justify-between transition-all duration-300"
              >
                <Icon size={32} className="text-brand-blue" />
                <div>
                  <h3 className="text-h4 mt-6">{cap.title}</h3>
                  <p className="text-body text-gray-custom-500 mt-3">
                    {cap.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* IMAGE SHOWCASE */}
      <Section background="off-white" narrow>
        <div className="text-center mb-16">
          <Eyebrow>Construction</Eyebrow>
          <h2 className="text-h2 mt-6">Built like a machine tool.</h2>
          <p className="text-body-lg text-gray-custom-500 mt-6 max-w-[640px] mx-auto">
            Welded steel base. Precision-machined cutting head. Components
            specified to the same tolerances as production machine tools.
          </p>
        </div>
        <Image
          src="/products/corner-back.jpg"
          alt="Cornermate construction"
          width={900}
          height={600}
          className="w-full object-contain shadow-product rounded-lg p-8 bg-white"
        />
      </Section>

      {/* IN THE PRESS */}
      <Section>
        <div className="text-center mb-16 max-w-[720px] mx-auto">
          <Eyebrow>In the Press</Eyebrow>
          <h3 className="text-h3 mt-6">What industry publications are saying.</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {press.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-custom-100 rounded-lg p-8 hover:shadow-card transition-all duration-300"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-custom-500 mb-4">
                {item.publication}
              </div>
              <h4 className="text-h4 mb-4">{item.headline}</h4>
              <div className="flex justify-between items-end">
                <span className="text-small text-gray-custom-500">{item.date}</span>
                <a href="#" className="text-small font-medium text-brand-blue hover:text-brand-blue-dark transition-colors">
                  Read →
                </a>
              </div>
            </div>
          ))}
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
