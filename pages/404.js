import Layout from '@/components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
function Custom404() {
  const router = useRouter()
  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left max-w-md md:max-w-max font-sans mb-20 overflow-hidden">
        <div className="flex md:-mr-20 md:ml-20 md:mt-24 flex-col space-y-8 mb-12 md:mb-0">
          <div className="flex flex-col space-y-4">
            <h1 className="text-7xl font-bold">Oh my...</h1>
            <p className="text-gray-600 md:text-xl px-10 md:px-0">
              Looks like you should get out of here!
            </p>
          </div>
          <button
            onClick={() => router.push('/')}
            className="bg-secondary hidden md:inline-flex justify-center text-3xl font-bold text-white py-3 px-5 rounded-lg max-w-max"
          >
            Come Home
          </button>
        </div>

        <div className="relative h-[400px] w-[700px] md:h-[500px] xl:w-[1000px] -mt-10 md:mt-0">
          <Image
            src="/images/error.svg"
            alt="Errors Image"
            layout="fill"
            className="object-cover"
          />
        </div>

        <button
          onClick={() => router.push('/')}
          className="bg-secondary md:hidden text-3xl font-bold text-white w-full py-3 px-6 rounded-full"
        >
          Back to Home
        </button>
      </div>
    </Layout>
  )
}

export default Custom404
