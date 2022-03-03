import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import React from 'react';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
