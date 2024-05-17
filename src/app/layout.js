import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Review Cards",
  description: "Elevate your Google Review strategy with the Google Review Cards component. Designed for seamless integration into your Next.js application, this component offers a visually appealing way to showcase customer reviews. Customize card colors, upload your business logo, and choose the card pack size that suits your needs. Engage customers effortlessly with a QR code linked to your Google Review profile. Boost positive feedback and simplify review management with this intuitive solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
