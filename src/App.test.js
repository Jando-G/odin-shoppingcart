import { fireEvent, getByDisplayValue, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('Test Home Page', () => {

})

describe('Test Store Page', () => {
  it('expect store page to be rendered', () => {
    render(<App />);
    const button = screen.getByText('Jokes');
    fireEvent.click(button);
    const linkElement = screen.getByText(/Programming/i);
    expect(linkElement).toBeInTheDocument();
  });
})
describe('Test Product Page', () => {
  it('expect product page to be rendered', () => {
    render(<App />);
    const button = screen.getByText('Jokes');
    fireEvent.click(button);
    const pageBtn = screen.getByText('Programming');
    fireEvent.click(pageBtn);
    const title = screen.getByText(/Programming Humor/i);
    expect(title).toBeInTheDocument();
  });
  it('Adding items changes cart count', () => {
    render(<App />);
    const button = screen.getByText('Jokes');
    fireEvent.click(button);
    const pageBtn = screen.getByText('Programming');
    fireEvent.click(pageBtn);
    const input = screen.getByDisplayValue(1);
    fireEvent.change(input, {target: {value: 5}});
    const submitBtn = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn);
    const cartCount = screen.getByTestId('cart-count');
    expect(cartCount.innerHTML).toBe('5');
  });
  it('Adding more items increments cart count', () => {
    render(<App />);
    const button = screen.getByText('Jokes');
    fireEvent.click(button);
    const pageBtn = screen.getByText('Programming');
    fireEvent.click(pageBtn);
    let input = screen.getByDisplayValue(1);
    fireEvent.change(input, {target: {value: 5}});
    let submitBtn = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn);
    fireEvent.click(button);
    const dark = screen.getByText("Dark");
    fireEvent.click(dark);
    input = screen.getByDisplayValue(1)
    fireEvent.change(input, {target: {value: 6}});
    submitBtn = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn);
    const cartCount = screen.getByTestId('cart-count');
    expect(cartCount.innerHTML).toBe('11');
  });
})

describe('Test Cart Page', () => {
  
})

describe('Test Earn Page', () => {
  
})