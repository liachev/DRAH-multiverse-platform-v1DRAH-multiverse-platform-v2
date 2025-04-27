import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = '/index.html';
  }, []);

  return (
    <div>
      <Head>
        <title>Multiverse Platform for Real Estate Solutions</title>
        <meta name="description" content="Bridging the gap between virtual and physical real estate markets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Redirecting to Multiverse Platform...</h1>
      </main>
    </div>
  );
}
