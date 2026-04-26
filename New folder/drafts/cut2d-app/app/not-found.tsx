import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center max-w-[560px]">
        <Image
          src="/logo.jpeg"
          alt="Cut2D Point"
          width={32}
          height={32}
          className="h-8 w-auto mx-auto mb-16"
        />

        <div className="text-gray-custom-300 font-bold leading-none mb-6">
          <span className="text-display">404</span>
        </div>

        <h2 className="text-h2 text-gray-custom-800">
          This page doesn't exist.
        </h2>

        <p className="text-body-lg text-gray-custom-500 mt-4">
          The link you followed may be broken, or the page may have been moved.
        </p>

        <div className="flex gap-4 justify-center mt-12 flex-wrap">
          <Button variant="primary" href="/">
            Return Home
          </Button>
          <Button variant="ghost" href="/contact">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}
