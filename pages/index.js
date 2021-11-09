import Head from 'next/head'
import Main from '@/components/Main'
import Layout from '../components/Layout'

export default function Home() {
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
