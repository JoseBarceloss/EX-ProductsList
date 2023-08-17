import './ProductsList.css';

type PropsType = {
  children: React.ReactNode
};

function ProductsList({ children } : PropsType) {
  return (
    <>
      <h1>Lista de produtos</h1>
      <ul className="container-Product">{children}</ul>
    </>
  );
}

export default ProductsList;
