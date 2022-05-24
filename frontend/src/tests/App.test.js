import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';


describe('Tela Tasks', () => {
  test('Verifica se o botão de criar nova tarefa está na tela', () => {
    renderWithRouter( <App /> );
    const linkElement = screen.getByTestId('create-button');
    expect(linkElement).toBeInTheDocument();
  });
  test('Verifica se o select para escolher a ordenação e filtros está na tela', () => {
    renderWithRouter( <App /> );
    const linkElement = screen.getByTestId('sorting-filters-select');
    expect(linkElement).toBeInTheDocument();
  });
});
