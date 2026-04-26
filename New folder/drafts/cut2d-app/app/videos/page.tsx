'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'

export default function VideosPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = [
    'All',
    'Electric Shear',
    'Manual Shear',
    'Cornermate',
    'Corner Blades',
    'Tutorials',
  ]

  const videos = [
    {
      category: 'Cornermate',
      title: 'How to use the Cornermate Cutting System',
      date: 'Jan 2026',
      duration: '4:32',
    },
    {
      category: 'Tutorials',
      title: 'How to cut holes in ChromaLuxe panels',
      date: 'Jan 2026',
      duration: '3:15',
    },
    {
      category: 'Electric Shear',
      title: 'Electric Shear: unboxing and first cut',
      date: 'Dec 2025',
      duration: '5:47',
    },
    {
      category: 'Manual Shear',
      title: 'Manual Shear maintenance in 5 minutes',
      date: 'Dec 2025',
      duration: '5:12',
    },
    {
      category: 'Corner Blades',
      title: 'Blade changeover walkthrough',
      date: 'Nov 2025',
      duration: '2:08',
    },
    {
      category: 'Tutorials',
      title: 'Material compatibility guide',
      date: 'Nov 2025',
      duration: '6:43',
    },
  ]

  const filteredVideos =
    activeFilter === 'All'
      ? videos
      : videos.filter((v) => v.category === activeFilter)

  return (
    <>
      {/* HERO */}
      <Section className="min-h-[40vh] flex items-center">
        <div className="text-center max-w-[640px] mx-auto">
          <Eyebrow>Resources</Eyebrow>
          <h1 className="text-h1 mt-6">Watch and learn.</h1>
          <p className="text-body-lg text-gray-custom-500 mt-6">
            Technical walkthroughs, product demonstrations, and operator
            training from the Cut2D Point engineering team.
          </p>
        </div>
      </Section>

      {/* FILTER BAR */}
      <div className="bg-white border-b border-gray-custom-100">
        <div className="container py-8">
          <div className="flex gap-3 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-small rounded-full transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-brand-blue text-white border border-brand-blue'
                    : 'bg-transparent border border-gray-custom-300 text-gray-custom-800 hover:border-gray-custom-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* VIDEO GRID */}
      <Section className="pt-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredVideos.map((video, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-video bg-off-white rounded-lg flex items-center justify-center overflow-hidden group-hover:shadow-card transition-all duration-300">
                <Play
                  size={48}
                  className="text-brand-blue group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-custom-500 mt-4 mb-2">
                {video.category}
              </div>
              <h4 className="text-h4 group-hover:text-brand-blue transition-colors">
                {video.title}
              </h4>
              <div className="text-small text-gray-custom-500 mt-3">
                {video.date} · {video.duration}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
