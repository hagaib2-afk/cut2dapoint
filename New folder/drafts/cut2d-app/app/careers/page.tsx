import { MapPin, Briefcase, Check } from 'lucide-react'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'
import Button from '@/components/Button'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = {
  title: 'Careers | Cut2D Point',
  description: 'Join the Cut2D Point team. We are hiring engineers, designers, and manufacturing specialists.',
}

export default function CareersPage() {
  const jobOpenings = [
    {
      title: 'AI Researcher',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description:
        'Research and develop machine learning models for precision cutting optimization and predictive maintenance systems.',
      posted: 'Jan 2026',
    },
    {
      title: 'Mechanical Engineer',
      department: 'Product',
      location: 'On-site',
      type: 'Full-time',
      description:
        'Design and refine cutting mechanisms, blade geometries, and control systems for next-generation equipment.',
      posted: 'Jan 2026',
    },
    {
      title: 'Manufacturing Engineer',
      department: 'Operations',
      location: 'On-site',
      type: 'Full-time',
      description:
        'Optimize production processes, quality control, and supply chain for precision-engineered equipment.',
      posted: 'Dec 2025',
    },
  ]

  return (
    <>
      {/* HERO */}
      <Section>
        <Breadcrumb
          items={[
            { label: 'Company', href: '/' },
            { label: 'Careers' },
          ]}
        />
        <div className="py-16 lg:py-32">
          <Eyebrow>We Are Hiring</Eyebrow>
          <h1 className="text-h1 mt-6">Build precision tools with us.</h1>
          <p className="text-body-lg text-gray-custom-500 mt-8 max-w-[640px]">
            Join a team of engineers, designers, and craftspeople committed to
            creating the finest precision cutting equipment in the industry.
          </p>
        </div>
      </Section>

      {/* CULTURE SECTION */}
      <Section background="off-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>Our Culture</Eyebrow>
            <h2 className="text-h2 mt-6">Engineering-first, detail-obsessed.</h2>
            <p className="text-body-lg text-gray-custom-500 mt-6">
              We believe precision is non-negotiable. Every team member, from
              mechanical engineers to customer support specialists, treats quality
              as the only acceptable standard.
            </p>
            <ul className="space-y-4 mt-10">
              {[
                'Competitive salary and equity packages',
                'Health, dental, and vision coverage',
                'Professional development budget',
                'Flexible work arrangements (where applicable)',
                'Direct input on product roadmap',
              ].map((benefit, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check size={20} className="text-brand-blue flex-shrink-0 mt-1" />
                  <span className="text-body text-gray-custom-800">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-off-white rounded-lg p-12 h-[400px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl text-gray-custom-300 mb-4">👥</div>
              <p className="text-body text-gray-custom-500">
                Team culture image placeholder
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* OPEN POSITIONS */}
      <Section>
        <div className="text-center mb-16 max-w-[720px] mx-auto">
          <Eyebrow>Open Positions</Eyebrow>
          <h2 className="text-h2 mt-6">Current opportunities.</h2>
        </div>

        <div className="space-y-6">
          {jobOpenings.map((job, i) => (
            <div
              key={i}
              className="border border-gray-custom-100 rounded-lg p-8 hover:shadow-card transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-h4">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-4 text-small text-gray-custom-500">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                    <div>{job.type}</div>
                    <div>{job.posted}</div>
                  </div>
                  <p className="text-body text-gray-custom-500 mt-4">
                    {job.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button variant="primary" href="#apply">
                    View Role
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* AI RESEARCHER JOB DETAIL */}
      <Section background="off-white" narrow>
        <div className="mb-12">
          <Eyebrow>Featured Role</Eyebrow>
          <h2 className="text-h2 mt-6">AI Researcher</h2>
          <div className="flex flex-wrap gap-4 mt-6 text-small text-gray-custom-500">
            <span>Engineering Department</span>
            <span>Remote</span>
            <span>Full-time</span>
          </div>
        </div>

        <div className="prose-narrow space-y-8">
          <div>
            <h3 className="text-h4 mb-4">About the Role</h3>
            <p className="text-body text-gray-custom-500">
              We are seeking an AI Researcher to develop machine learning models
              that optimize precision cutting performance and predict equipment
              maintenance needs. You will work directly with our engineering team
              to integrate AI capabilities into our product line.
            </p>
          </div>

          <div>
            <h3 className="text-h4 mb-4">Responsibilities</h3>
            <ul className="space-y-3">
              {[
                'Design and train ML models for cut-quality optimization',
                'Develop predictive maintenance algorithms',
                'Collaborate with mechanical engineers on data collection',
                'Implement edge ML for real-time equipment feedback',
                'Document research findings and share with the team',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-body text-gray-custom-500">
                  <Check size={16} className="text-brand-blue flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-h4 mb-4">Required Qualifications</h3>
            <ul className="space-y-3">
              {[
                'MS or PhD in Computer Science, Machine Learning, or related field',
                '3+ years of professional ML development experience',
                'Proficiency in Python, TensorFlow, or PyTorch',
                'Experience with time-series data and predictive modeling',
                'Strong communication skills',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-body text-gray-custom-500">
                  <Check size={16} className="text-brand-blue flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-h4 mb-4">Nice to Have</h3>
            <ul className="space-y-3">
              {[
                'Experience with embedded systems or edge computing',
                'Knowledge of manufacturing or industrial equipment',
                'Familiarity with sensor data and signal processing',
                'Open source contributions',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-body text-gray-custom-500">
                  <span className="text-brand-gold flex-shrink-0 mt-1">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-custom-100">
            <Button variant="primary" href="/contact">
              Apply Now
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-[640px] mx-auto">
          <h3 className="text-h3">Don't see your role?</h3>
          <p className="text-body-lg text-gray-custom-500 mt-6 mb-8">
            We are always interested in exceptional talent. Send us your resume
            and we will keep it on file for future opportunities.
          </p>
          <Button variant="ghost" href="/contact">
            Send Your Resume
          </Button>
        </div>
      </Section>
    </>
  )
}
