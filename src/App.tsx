import './App.css';
import ProductsList from './components/ProductsList';
import Product from './components/Product';
import products from './data';

function App() {
  return (
    <ProductsList>
      {products.map((product) => (
        <Product
          key={ product.id }
          productInfo={ product }
        />
      ))}
    </ProductsList>
  );
}

export default App;
