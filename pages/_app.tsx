import { AppProps } from 'next/app'
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';

import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Куда Пицца</title>
      <meta name="description" content="Куда Пицца - Лучшая пицца в мире" />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <Navbar />
    <Header />

    <Component {...pageProps} />
    
    <Footer />

  </>
);

export default App;