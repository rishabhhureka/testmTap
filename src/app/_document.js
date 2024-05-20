// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                margin: 0;
                font-family: 'Inter', sans-serif;
              }
              .CardContent {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                max-width: 100%;
                resize: horizontal;
                overflow: auto;
              }
              @media screen and (max-width: 768px) {
                .CardContent {
                  flex-direction: column;
                }
              }
              .reviewCardSmallBox {
                width: 80px;
                height: 60px;
                margin-bottom: 1rem;
                cursor: pointer;
                border: 1px solid #ccc;
                border-radius: 8px;
                overflow: hidden;
              }
              .googleReviewCardImage {
                width: 40vw;
                display: flex;
                background: white;
                margin: 5rem;
                justify-content: center;
              }
            `,
          }}
        />
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
