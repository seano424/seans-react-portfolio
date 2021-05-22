import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Sean Patrick OReilly - Developer, designer, maker</title>
      <link rel="shortcut icon" href="favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Sean Patrick OReilly Developer, Creator, Designer`}
      />
    </Head>
  );
}
