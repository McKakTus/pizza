import '../styles/globals.scss';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import { setUserData } from '../redux/slices/userSlice';
import { Api } from '../utils/api';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Куда Пицца</title>
        <meta name="description" content="Куда Пицца - Лучшая пицца в мире" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const userData = await Api(ctx).user.getMe();
    store.dispatch(setUserData(userData));
  } catch (error) {
    console.log(error, 'test');
  }

  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(App);