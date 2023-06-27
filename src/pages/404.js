import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function ErrorPage() {
  const redirectTo = '/';
  const seconds = 5;

  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    if (secondsRemaining === 0) router.push(redirectTo);

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
      if (secondsRemaining === 1) router.push(redirectTo);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [router, secondsRemaining, redirectTo]);

  return (
    <>
      <Head>
        <title>⚠️Page not found⚠️</title>
      </Head>
      <main>
        <h1 style={{color:"var(--black) !important"}} >404</h1>

        <p style={{color:"var(--black) !important"}}>
          This page cannot be found. Redirecting to the homepage in{' '}
          {secondsRemaining} {secondsRemaining > 1 ? 'seconds' : 'second'}.
        </p>
      </main>
    </>
  );
}
