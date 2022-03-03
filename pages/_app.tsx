import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Куда Пицца</title>
        <meta name="description" content="Куда Пицца - Лучшая пицца в мире" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Header />

      <Component { ... pageProps} />
    </>
  );
}

export default MyApp
