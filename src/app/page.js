import Head from 'next/head';
import HomePage from "../components/HomePage"
export default function Home() {

    return(
        <>
        <Head>
          <meta property="og:image" content="https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2024-01/image.png" />
          <meta property="og:url" content="https://mtap.byklabs.store/" />
    <meta name="description" content="Digital business cards by mTap allow you to instantly share contact info, social media & more with just a tap. Create your digital business card for free today." />
    <meta name="keywords" content="Digital Business Card, Digital Business Cards, Create digital business card, digital profiles" />
   
        </Head>
        <main>
<HomePage />
        </main>
        </>
    )
}
