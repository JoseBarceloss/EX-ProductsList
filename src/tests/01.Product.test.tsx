import { render, screen } from '@testing-library/react';
import Product from '../components/Product';
import productsArray from '../data';

describe('1 - Crie o componente `<Product />`', () => {
  it('Será verificado se o componente possui a tag `li` envolvendo seu conteúdo', () => {
    const product = productsArray[0];
    render(<Product productInfo={product} />);
    
    const productItem = screen.getByRole('listitem');
    expect(productItem).toBeInTheDocument();
  });

  it('Será verificado se o componente renderiza as informações corretamente', () => {
    const product = productsArray[0];
    render(<Product productInfo={product} />);
    
    const { title, price, image } = product;
    
    const productName = screen.getByText(title);
    const productPrice = screen.getByText(price, { exact: false });
    const productImage = screen.getByAltText(title) as HTMLImageElement;
    

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(productImage.src).toBe(image);
  });
});
