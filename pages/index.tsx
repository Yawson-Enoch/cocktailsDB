import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from '../components/content/homepage/HomePage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='search for cocktails' />
        <meta name='keywords' content='cocktails showcase' />
        <title>Cocktails Showcase</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
