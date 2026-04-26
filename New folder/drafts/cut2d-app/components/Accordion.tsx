'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="space-y-0 border-t border-gray-custom-300">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full py-6 border-b border-gray-custom-300 flex justify-between items-center hover:bg-off-white transition-colors"
            >
              <span className="text-body font-medium text-gray-custom-800 text-left">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 ml-4 text-gray-custom-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="bg-off-white py-6 px-0">
                <p className="text-body text-gray-custom-500 max-w-prose-narrow leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
