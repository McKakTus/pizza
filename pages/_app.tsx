import { AppProps } from 'next/app'
import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';

import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Куда Пицца</title>
      <meta name="description" content="Куда Пицца - Лучшая пицца в мире" />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <Navbar />
    
    <Component {...pageProps} />
  </>
);

export default App;