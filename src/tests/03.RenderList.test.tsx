import { render, screen } from '@testing-library/react';
import App from '../App';
import Product from '../components/Product';
import ProductsList from '../components/ProductsList';
import productsArray from '../data';

describe('3 - Renderize uma lista com as informações de cada produto', () => {
  it('Será validado se o componente `<ProductsList />` renderiza a quantidade correta de elementos', () => {
    const listChildren = productsArray.map((product) => <Product key={ product.id } productInfo={ product } />);
    render(
      <ProductsList>
        {listChildren}
      </ProductsList>);
    const productCards = screen.getAllByRole("listitem");

    expect(productCards.length).toBe(productsArray.length);
  });

  it('Será validado se todos os elementos da lista são renderizados', () => {
    render(<App />);
    
    productsArray.forEach(({title}) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  })
});
