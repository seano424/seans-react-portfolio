import Layout from '@/components/Layout'
import Image from 'next/image'

export default function index() {
  return (
    <Layout>
      <div className="relative h-screen w-screen">
        <a href="/images/resume.pdf" target="_blank">
          <Image
            className="object-scale-down"
            src="/images/resume.png"
            alt="resume image"
            layout="fill"
          />
        </a>
      </div>
    </Layout>
  )
}
