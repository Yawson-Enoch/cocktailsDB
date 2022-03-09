import { useRouter } from 'next/router';
import { ErrorPageWrapper } from './ErrorPage.styles';

const ErrorPage = () => {
  const router = useRouter();

  return (
    <ErrorPageWrapper>
      <p>Page Not Found</p>
      <button type='button' onClick={() => router.push('/')}>
        Back To Home
      </button>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
