import { Download, FileText } from 'lucide-react'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'
import Button from '@/components/Button'

export const metadata = {
  title: 'Data Sheets | Cut2D Point',
  description: 'Technical documentation, specification sheets, and compliance documents for Cut2D Point products.',
}

export default function DataSheetsPage() {
  const datasheets = [
    {
      title: 'Electric Shear — Full Specification Sheet',
      description: 'Complete technical specifications, dimensions, and installation requirements',
      fileSize: '2.4 MB',
      date: 'Updated Jan 2026',
    },
    {
      title: 'Manual Shear — Full Specification Sheet',
      description: 'Material capacities, dimensional drawings, and replacement part listings',
      fileSize: '1.8 MB',
      date: 'Updated Jan 2026',
    },
    {
      title: 'Cornermate Table — Product Specification',
      description: 'Cut geometries, blade compatibility, electrical and mechanical specs',
      fileSize: '2.1 MB',
      date: 'Updated Dec 2025',
    },
    {
      title: 'Corner Blades — Compatibility Matrix',
      description: 'Blade-to-material compatibility chart with recommended cycle limits',
      fileSize: '1.2 MB',
      date: 'Updated Dec 2025',
    },
    {
      title: 'Installation & Safety Manual',
      description: 'Combined installation, operation, and safety documentation',
      fileSize: '3.6 MB',
      date: 'Updated Nov 2025',
    },
    {
      title: 'Distributor Product Catalog (2026)',
      description: 'Complete product lineup with distributor pricing structure',
      fileSize: '5.2 MB',
      date: 'Updated Oct 2025',
    },
  ]

  return (
    <>
      {/* HERO */}
      <Section className="min-h-[40vh] flex items-center">
        <div className="text-center max-w-[640px] mx-auto">
          <Eyebrow>Documentation</Eyebrow>
          <h1 className="text-h1 mt-6">Technical documentation.</h1>
          <p className="text-body-lg text-gray-custom-500 mt-6">
            Specification sheets, installation guides, and compliance documents
            for every Cut2D Point product.
          </p>
        </div>
      </Section>

      {/* DOWNLOADS LIST */}
      <Section narrow>
        <div className="space-y-0 border-t border-gray-custom-100">
          {datasheets.map((sheet, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-6 border-b border-gray-custom-100 hover:bg-off-white transition-colors px-4 -mx-4"
            >
              <div className="flex items-start gap-4 flex-1">
                <FileText
                  size={24}
                  className="text-brand-blue flex-shrink-0 mt-1"
                />
                <div>
                  <h4 className="text-h4">{sheet.title}</h4>
                  <p className="text-body text-gray-custom-500 mt-2">
                    {sheet.description}
                  </p>
                  <div className="text-small text-gray-custom-500 mt-3">
                    PDF · {sheet.fileSize} · {sheet.date}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                icon={Download}
                iconPlacement="left"
                className="flex-shrink-0 ml-4"
              >
                Download
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="off-white" narrow>
        <div className="text-center">
          <h3 className="text-h3">Need something else?</h3>
          <p className="text-body-lg text-gray-custom-500 mt-6 max-w-[560px] mx-auto">
            Contact our team for custom documentation, regional compliance
            certificates, or integration specs.
          </p>
          <Button variant="primary" href="/contact" className="mt-12 mx-auto">
            Contact Support
          </Button>
        </div>
      </Section>
    </>
  )
}
