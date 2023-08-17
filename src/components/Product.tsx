import './Product.css';

type ProductInfoProps = {
  productInfo: {
    id: number,
    title: string,
    description: string,
    price: number,
    brand: string,
    category: string,
    image: string,
    rating: number,
    stock: number,
  }
};

function Product({ productInfo }: ProductInfoProps) {
  const {
    title,
    description,
    price,
    image,
  } = productInfo;
  return (
    <li className="product-cnt">
      <h2>{title}</h2>
      <img src={ image } alt={ title } />
      <p>{description}</p>
      <h3>{`R$${price}`}</h3>
    </li>
  );
}

export default Product;
