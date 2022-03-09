import Head from 'next/head';
import AboutPage from '../../components/content/aboutpage/AboutPage';

const About = () => {
  return (
    <>
      <Head>
        <meta name='description' content='about page' />
        <meta name='keywords' content='about page' />
        <title>About Page</title>
      </Head>
      <AboutPage />
    </>
  );
};

export default About;
