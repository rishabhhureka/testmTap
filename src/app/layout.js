import React, { Suspense } from 'react';
import { Inter } from "next/font/google";
import "./globals.css"
import Header from '../components/Header';
// import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });
const Footer = React.lazy(() => import('../components/Footer'));
export const metadata = {
  title: "mTap",
  description: "Digital business cards by mTap allow you to instantly share contact info, social media & more with just a tap. Create your digital business card for free today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://mtap.byklabs.store/" />
        <link rel="icon"  href="/mtaplogoWeb.png"  />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "mTap",
              "url": "https://mtap.byklabs.store/",
              "logo": "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/mTapSocialImage.png",
              "sameAs": [
                "https://www.facebook.com/mTap.Magic.Marketing",
                "https://www.instagram.com/mtappro/",
                "https://www.tiktok.com/@mtapsocial"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer Service"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
      </body>
    </html>
  );
}
