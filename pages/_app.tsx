import '../lib/firebase'
import React, { useEffect } from 'react'
import Head from 'next/head';
import { AppProps } from 'next/app'
import { AuthProvider } from '../context/Auth'
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) { 
  return (
      <AuthProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
      
  ) 
}

export default MyApp
