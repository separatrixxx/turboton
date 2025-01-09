import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { setLocale } from '../../helpers/locale.helper';
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{setLocale(router.locale).turboton}</title>
        <meta name='description' content={setLocale(router.locale).turboton} />
        <meta property='og:title' content={setLocale(router.locale).turboton} />
        <meta property='og:description' content={setLocale(router.locale).turboton} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
