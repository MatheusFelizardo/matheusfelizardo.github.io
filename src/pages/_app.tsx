import {AppProps} from 'next/app';
import {Router} from 'next/router'
import React from 'react';
import { Header } from '../components/Header';
import NProgress from 'nprogress'
import '../styles/global.scss';
import '../styles/nprogress.scss';
// Router.events.on('routeChangeStart', (url) => {
//   NProgress.start();
// })

// Router.events.on('routeChangeComplete', () => { NProgress.done(); })
// Router.events.on('routeChangeError', () => { NProgress.done(); })

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
