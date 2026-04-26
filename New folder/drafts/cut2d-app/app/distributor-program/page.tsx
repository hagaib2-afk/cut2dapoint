import Image from 'next/image'
import { Download, Check } from 'lucide-react'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'
import Button from '@/components/Button'
import Accordion from '@/components/Accordion'

export const metadata = {
  title: 'Become a Cut2D Point Distributor | Founding Program',
  description:
    'Join our founding distributor cohort. Territory protection, preferred margins, and direct engineering support.',
}

export default function DistributorProgramPage() {
  const faqItems = [
    {
      id: 'territories',
      question: 'What territories are open?',
      answer:
        'North America: 12 regional territories available. EU: 4 country-level territories. Applications evaluated by territory, industry focus, and existing distribution strength.',
    },
    {
      id: 'commitment',
      question: "What's the minimum commitment?",
      answer:
        'No minimum purchase requirement for founding distributors. We evaluate partnerships on strategic fit, not volume commitment.',
    },
    {
      id: 'support',
      question: 'What support is provided?',
      answer:
        'Full technical certification, co-branded sales collateral, demo unit program, dedicated account manager, and direct engineering access for technical pre-sales.',
    },
    {
      id: 'approval',
      question: 'How long does approval take?',
      answer:
        'Initial review within 5 business days. Full partnership onboarding typically completes in 2-3 weeks including territory agreement and certification scheduling.',
    },
    {
      id: 'industries',
      question: 'What industries do your distributors serve?',
      answer:
        'Sign fabrication, photo panel production (ChromaLuxe and similar), sheet metal shops, signage and display manufacturers, and sublimation/ACM specialists.',
    },
  ]

  return (
    <>
      {/* HERO */}
      <Section background="off-white">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <Eyebrow variant="gold">Founding Distributor Program</Eyebrow>
            <h1 className="text-h1 mt-6">Grow with Cut2D Point.</h1>
            <p className="text-body-lg text-gray-custom-500 mt-8 max-w-[480px]">
              We're selecting regional distribution partners to join our
              founding cohort. Early partners receive territory protection,
              preferred margin structures, and a direct line to our engineering
              team.
            </p>
            <div className="flex gap-4 mt-12 flex-wrap">
              <Button variant="gold" href="/apply">
                Apply for Territory
              </Button>
              <Button variant="ghost" icon={Download} iconPlacement="left">
                Download Partner Brief
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="shadow-product rounded-lg overflow-hidden">
              <Image
                src="/products/corner-closed.jpg"
                alt="Cornermate Table"
                width={500}
                height={500}
                className="object-contain p-12 bg-off-white"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* WHY PARTNER WITH US */}
      <Section>
        <div className="text-center mb-20 max-w-[720px] mx-auto">
          <Eyebrow>The Opportunity</Eyebrow>
          <h2 className="text-h2 mt-6">A category ready to be upgraded.</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div>
            <div className="text-display text-brand-blue font-bold">01</div>
            <h3 className="text-h4 mt-6">A category due for disruption</h3>
            <p className="text-body text-gray-custom-500 mt-4">
              Manual shears have been the unchallenged standard for decades.
              Premium, electric, and precision-finished alternatives are only
              now reaching the market — and demand is outpacing supply.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="text-display text-brand-blue font-bold">02</div>
            <h3 className="text-h4 mt-6">Margins that reflect the product</h3>
            <p className="text-body text-gray-custom-500 mt-4">
              Cut2D Point is positioned as a premium brand. That means higher
              price points, lower price pressure, and stronger margin structures
              for our distribution partners.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="text-display text-brand-blue font-bold">03</div>
            <h3 className="text-h4 mt-6">A partner, not a supplier</h3>
            <p className="text-body text-gray-custom-500 mt-4">
              Founding distributors get co-developed sales tools, technical
              training, demo units, and direct access to engineering — not a
              portal and a phone number.
            </p>
          </div>
        </div>
      </Section>

      {/* PROGRAM BENEFITS */}
      <Section background="off-white">
        <div className="text-center mb-16 max-w-[720px] mx-auto">
          <Eyebrow>Program Benefits</Eyebrow>
          <h2 className="text-h2 mt-6">
            What founding distributors receive.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {[
            'Competitive margin structure (founding-partner tier)',
            'Exclusive or protected territory rights',
            'Co-branded sales and marketing materials',
            'Demo units at distributor pricing',
            'Technical certification program for your sales team',
            'Priority access to new product lines',
            'Dedicated distributor account manager',
            'Co-op marketing fund for qualified partners',
          ].map((benefit, i) => (
            <div key={i} className="flex gap-4 items-start">
              <Check size={20} className="text-brand-blue flex-shrink-0 mt-1" />
              <span className="text-body text-gray-custom-800">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* APPLICATION CTA */}
      <section className="bg-gray-custom-800 text-white py-24 lg:py-32">
        <div className="container">
          <div className="text-center max-w-[720px] mx-auto">
            <Eyebrow variant="gold">Now Accepting Applications</Eyebrow>
            <h2 className="text-h2 text-white mt-6">
              Ready to build the category with us?
            </h2>
            <p className="text-body-lg text-white/80 mt-6 mb-8">
              Applications reviewed within 5 business days. Founding cohort
              closes when territory coverage is complete.
            </p>
            <Button variant="gold" href="/apply">
              Begin Application
            </Button>
            <p className="text-small text-white/60 mt-6">
              Current openings: North America, Select EU markets
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section className="py-24 lg:py-32" narrow>
        <div className="text-center mb-16">
          <Eyebrow>Common Questions</Eyebrow>
          <h3 className="text-h3 mt-6">What partners ask before applying.</h3>
        </div>

        <Accordion items={faqItems} />
      </Section>
    </>
  )
}
