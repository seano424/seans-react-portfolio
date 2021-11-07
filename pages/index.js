import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Main from '@/components/Home/Main'
import Layout from '../components/Layout'
import { getBrowserTheme } from 'hooks/useBrowserTheme'

export default function Home() {
  const { setTheme } = useTheme()
  useEffect(() => {
    const originalTheme = getBrowserTheme()
    setTheme(originalTheme)
  }, [])
  return (
    <Layout>
      <Head>
        <title>Sean Patrick OReilly - Developer, designer, maker</title>
        <link rel="icon" href="favicon.png" />
      </Head>
      <Main />
    </Layout>
  )
}
