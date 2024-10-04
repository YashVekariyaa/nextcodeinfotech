import React from 'react'
import "../app/globals.css";
import Header from '@/components/header/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <Head>
                <title></title>
                <link rel="icon" href="/images/favicon.ico" type="image/png" sizes="32x32" />
                <meta name="description" content="" />
                <meta name="keywords" content="Your Keywords Here" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp