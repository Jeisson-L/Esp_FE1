import { render, screen } from '@testing-library/react';
import { BrowserRouter  } from "react-router-dom";
import App from './App';

test('renders pokemon home', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Ingresar pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
