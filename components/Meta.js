import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta charset="utf-8"></meta>
      <title>Oswaldo Javier Soto Giordanelli - Developer</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Oswaldo Soto, FrontEnd Developer`}
      />
      <meta
        property="og:title"
        content="Oswaldo Soto, FrontEnd Developer"
      />
      <meta property="og:image" content="/images/seanpatrickio.png" />
      <meta
        property="og:description"
        content="Oswaldo Soto, FrontEnd Developer"
      />
      <meta
        property="og:site_name"
        content="Oswaldo Soto, FrontEnd Developer"
      />
    </Head>
  )
}
