import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta charset="utf-8"></meta>
      <title>Sean Patrick OReilly - Developer, designer, maker</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Sean Patrick OReilly Developer, Creator, Designer`}
      />
      <meta
        property="og:title"
        content="Sean Patrick O'Reilly - Developer, Creator, Designer"
      />
      <meta property="og:image" content="/images/seanpatrickio.png" />
      <meta
        property="og:description"
        content="Sean Patrick O'Reilly - Developer, Creator, Designer"
      />
      <meta
        property="og:site_name"
        content="Sean Patrick O'Reilly - Developer, Creator, Designer"
      />
    </Head>
  )
}
