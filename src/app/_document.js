// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/mtapLogo.png" />
        <link rel="canonical" href="https://mtap.byklabs.store/" />
        <link rel="preload" href="/globals.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        <noscript>
          <link rel="stylesheet" href="/globals.css" />
        </noscript>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
