import React from 'react';
import App, { AppContext } from 'next/app';
import { wrapper } from '../redux/store';

import '../styles/globals.scss'

class MyApp extends App {
  static async getServer({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
// const App = ({ Component, pageProps }: AppProps) => (
//   <>
//     <Head>
//       <title>Куда Пицца</title>
//       <meta name="description" content="Куда Пицца - Лучшая пицца в мире" />
//       <link rel="icon" href="/favicon.png" />
//     </Head>

//     <Navbar />
//     <Header />

//     <Component {...pageProps} />
    
//     <Footer />

//   </>
// );
}

export default wrapper.withRedux(MyApp);