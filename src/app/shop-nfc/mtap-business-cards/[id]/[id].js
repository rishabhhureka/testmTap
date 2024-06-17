import { useRouter } from 'next/router';
import ProductDetailComponent from '../../../components/ProductDetailComponent';

const ProductDetail = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <ProductDetailComponent product={product} />;
};

export const getServerSideProps = async ({ params }) => {
  const products = [
    {
      id: 1,
      name: "NFC Enabled Plastic Clear Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC-Enabled-Plastic-Business-Card.jpg",
      imageAlt: "Google Review Card",
      price: "$4.99",
    },
    {
      id: 2,
      name: "NFC Enabled Flexible Card",
      href: "#",
      imageSrc:
        "https://mtap-assets-prod.s3.amazonaws.com/s3fs-public/2021-12/NFC%20Enabled%20Paper%20Card3.jpg",
      imageAlt: "Custom Google Review Card",
      price: "$4.99",
    },
  ];

  const product = products.find((product) => product.id.toString() === params.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductDetail;