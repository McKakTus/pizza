import { AppProps } from 'next/app'
import Head from 'next/head';

import Cookies from 'nookies';
import { Axios } from '../core/axios';

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

export const getServerSideProps = (ctx) => {
  const cookies = Cookies.get(ctx);
  if (cookies.token) {
    Axios.defaults.headers.Authorization = `Bearer ${cookies.token}`;
  }
};


export default App;