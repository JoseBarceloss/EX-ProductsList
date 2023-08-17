type PropsType = {
  children: React.ReactNode
};

function ProductsList({ children } : PropsType) {
  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>{children}</ul>
    </>
  );
}

export default ProductsList;
