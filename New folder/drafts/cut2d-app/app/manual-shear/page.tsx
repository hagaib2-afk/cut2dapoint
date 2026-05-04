import Image from 'next/image'
import { Download } from 'lucide-react'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'
import Button from '@/components/Button'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Manual Shear | Cut2D Point',
  description: 'Bench-mounted manual shear with tactile control for precision metal and plastic cutting.',
}

export default function ManualShearPage() {
  const model45 = {
    name: 'Model 45',
    sku: 'RA10073',
    cuttingWidth: '45cm',
    dimensions: '71 × 35.5 × 21cm',
    specs: [
      { label: 'Maximum Cutting Width', value: '450mm' },
      { label: 'Aluminum Capacity', value: '1mm' },
      { label: 'Engravers Brass Capacity', value: '0.5mm' },
      { label: 'Plated Steel Capacity', value: '0.38mm' },
      { label: 'Plastic Capacity', value: '3mm' },
      { label: 'Blade Material', value: 'Manganese steel (T10), 52+ HRC' },
      { label: 'Overall Dimensions', value: '710 × 355 × 210mm' },
      { label: 'Bench-mounted', value: 'Yes, with mounting holes' },
    ],
  }

  const currentModel = model45

  return (
    <>
      {/* HERO */}
      <Section>
        <Breadcrumb
          items={[
            { label: 'Products', href: '/' },
            { label: 'Manual Shear' },
          ]}
        />
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh] flex items-center">
          <div>
            <Eyebrow>02 — Manual Shear</Eyebrow>
            <h1 className="text-h1 mt-6">
              Perception-enabled precision.
            </h1>
            <p className="text-body-lg text-gray-custom-500 mt-8 max-w-[480px]">
              A bench-mounted manual shear that translates operator feedback
              directly into cut quality. Built for shops where tactile control
              matters.
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
              src="/products/hand-cutter-open.jpg"
              alt="Manual Shear"
              width={500}
              height={500}
              className="object-contain shadow-product rounded-lg p-12 bg-off-white"
            />
          </div>
        </div>
      </Section>

      {/* SPEC TABLE */}
      <Section narrow>
        <Eyebrow>Specifications</Eyebrow>
        <h3 className="text-h3 mt-6 mb-12">Model 45 (RA10073) — Professional Cutting Shear</h3>

        {/* Model Info */}
        <div className="bg-off-white rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-custom-500 mb-2">
                Item Number
              </div>
              <div className="text-h4 text-gray-custom-800">{currentModel.sku}</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-custom-500 mb-2">
                Cutting Width
              </div>
              <div className="text-h4 text-gray-custom-800">{currentModel.cuttingWidth}</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-custom-500 mb-2">
                Overall Dimensions
              </div>
              <div className="text-h4 text-gray-custom-800">{currentModel.dimensions}</div>
            </div>
          </div>
        </div>

        {/* Specifications Table */}
        <div className="space-y-0 border-t border-gray-custom-100">
          {currentModel.specs.map((spec, i) => (
            <div
              key={i}
              className="flex justify-between items-start py-4 border-b border-gray-custom-100"
            >
              <span className="text-body text-gray-custom-500">{spec.label}</span>
              <span className="text-body font-medium text-gray-custom-800">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURE BLOCK 1 */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>Design</Eyebrow>
            <h2 className="text-h2 mt-6">
              Human-centered design, mechanical honesty.
            </h2>
            <p className="text-body-lg text-gray-custom-500 mt-6">
              Every contact surface shaped by the operator's hand. Every moving
              part accessible with standard tools. Sintered bronze bearings
              provide smooth, maintenance-light operation across tens of
              thousands of cycles.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src="/products/hand-cutter-back.jpg"
              alt="Manual Shear design"
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
              src="/products/hand-cutter-open.jpg"
              alt="Manual Shear materials"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
          <div className="lg:order-1">
            <Eyebrow>Materials</Eyebrow>
            <h2 className="text-h2 mt-6">
              Engineered for the materials you actually cut.
            </h2>
            <p className="text-body-lg text-gray-custom-500 mt-6">
              Validated across aluminum, brass, copper, soft steel, and
              engineering plastics. Blade geometry optimized to prevent
              deformation at the cut edge — no burrs, no secondary finishing.
            </p>
          </div>
        </div>
      </Section>

      {/* FEATURE BLOCK 3 */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>Built to Last</Eyebrow>
            <h2 className="text-h2 mt-6">
              Low emissions, long service life.
            </h2>
            <p className="text-body-lg text-gray-custom-500 mt-6">
              No motor, no maintenance contract, no parts obsolescence. The
              manual shear is the reference tool in shops that have been cutting
              the same way for thirty years — and intend to for thirty more.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src="/products/hand-cutter-back.jpg"
              alt="Manual Shear durability"
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
