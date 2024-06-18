import Image from 'next/image';

const ProductDetailComponent = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price Of The Product: {product.price}</p>
      <Image
        src={product.imageSrc}
        alt={product.name}
        width={500}
        height={500}
        layout="responsive"
      />
      {/* Add other product details as needed */}
    </div>
  );
};

export default ProductDetailComponent;