import Product from "../components/Product";
import Head from 'next/head';

export default function Home() {

    return(
        <>
        <Head>
          <title>mTap</title>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "mTap",
              "url": "https://mtap.byklabs.store/",
              "logo": "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2022-04/mTapSocialImage.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-555-5555",
                "contactType": "Customer Service"
              }
            })}
          </script>
        </Head>
        <main>
    <Product />
        </main>
        </>
    )
}
