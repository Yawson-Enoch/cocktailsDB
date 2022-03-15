import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='cocktails showcase with thecocktaildb api'
        />
        <meta name='keywords' content='cocktails showcase' />
        <meta name='author' content='yawson enoch' />
        <meta name='theme-color' content='#000000' />
        <title>Cocktails</title>
        <link rel='shortcut icon' href='./favicon.ico' type='image/x-icon' />
        {/* <link rel='stylesheet' href='./font.css' /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
