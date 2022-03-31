import React from 'react';
import App, { AppContext } from 'next/app';
import { wrapper } from '../redux/store';
import { setUserData } from '../redux/slices/userSlice';
import { checkAuth } from '../utils/checkAuth';

import '../styles/globals.scss';

class MyApp extends App {
  static async getServer({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const user = await checkAuth(ctx);

    store.dispatch(setUserData(user));
  } catch (error) {
    if (ctx.asPath === '/write') {
      ctx.res.writeHead(302, {
        Location: '/403',
      });
      ctx.res.end();
    }
    console.log(error);
  }

  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(MyApp);