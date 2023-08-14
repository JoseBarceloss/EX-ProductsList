import { render, screen } from '@testing-library/react';
import App from '../App';
import ProductsList from '../components/ProductsList';

describe('2 - Crie o componente `<ProductsList />`', () => {
  it('O componente `<ProductsList />` renderiza a tag `h1` com o texto `Lista de produtos`', () => {
    render(<ProductsList children="" />);
    
    const titleElement = screen.getByRole('heading', { level: 1, name: 'Lista de produtos' });
    expect(titleElement).toBeInTheDocument();
  });
  
  it('O componente `<ProductsList />` renderiza o conteúdo da prop `children` dentro da tag `ul`', () => {
    render(<ProductsList>Testando ProductsList</ProductsList>);
      
    const listElement = screen.getByRole('list');
    expect(listElement).toHaveTextContent("Testando ProductsList");
  });

  it('O componente `<ProductsList />` é renderizado no `App.tsx`', () => {
    render(<App />);
    
    const titleText = screen.getByText('Lista de produtos');
    expect(titleText).toBeInTheDocument();
  });
});
