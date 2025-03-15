"use client"
import React from 'react'
import "../app/globals.css";
import Header from '@/components/header/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '@/components/footer/Footer';
import { useRouter } from 'next/router';
import { Metadata } from '@/interfaces/main';
import { COMPANY_NAME, metadata } from '@/utils/utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()
    const currentPage = router.pathname.substring(1);

    const pageMetadata = (metadata as Metadata)[currentPage] || {
        title: `${COMPANY_NAME}`,
        description: `Welcome to ${COMPANY_NAME}, your gateway to modern web development.`,
        keywords: ["Next.js", "React", "Software Development", "Web Solutions", "nextcode", "NextCode", "NextCode Infotech", "nextcode infotech"]
    };

    return (
        <div>
            <Head>
                <title>{pageMetadata.title}</title>
                <link rel="icon" href="/images/favicon.ico" type="image/png" sizes="32x32" />
                <meta name="description" content={pageMetadata.description} />
                <meta name="keywords" content={pageMetadata.keywords.join(",")} />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}

export default MyApp