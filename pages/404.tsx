import Head from 'next/head';
import ErrorPage from '../components/content/error-page/ErrorPage';

const Error = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <ErrorPage />
    </>
  );
};

export default Error;
