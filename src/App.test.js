import { fireEvent, getByDisplayValue, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe('Test Home Page', () => {

})

describe('Test Store Page', () => {
  it('expect store page to be rendered', () => {
    render(<App />);
    const button = screen.getByText("Jokes");
    fireEvent.click(button);
    const linkElement = screen.getByText(/Programming/i);
    expect(linkElement).toBeInTheDocument();
  });
})
describe('Test Product Page', () => {
  it('expect product page to be rendered', () => {
    render(<App />);
    const button = screen.getByText("Jokes");
    fireEvent.click(button);
    const pageBtn = screen.getByText('Programming');
    fireEvent.click(pageBtn);
    const title = screen.getByText(/Programming Humor/i);
    expect(title).toBeInTheDocument();
  });
  it('Adding items changes cart count', () => {
    render(<App />);
    const button = screen.getByText("Jokes");
    fireEvent.click(button);
    const pageBtn = screen.getByText('Programming');
    fireEvent.click(pageBtn);
    const input = screen.getByDisplayValue(1);
    fireEvent.change(input, { target: { value: 5 } });
    const submitBtn = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn);
    const cartCount = screen.getByTestId('cart-count');
    expect(cartCount.innerHTML).toBe('5');
  });
  it('Adding more items increments cart count', () => {
    render(<App />);
    const button = screen.getByText("Jokes");
    fireEvent.click(button);
    const pageBtn = screen.getByText('Programming');
    fireEvent.click(pageBtn);
    let input = screen.getByDisplayValue(1);
    fireEvent.change(input, { target: { value: 5 } });
    let submitBtn = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn);
    fireEvent.click(button);
    const dark = screen.getByText("Dark");
    fireEvent.click(dark);
    input = screen.getByDisplayValue(1)
    fireEvent.change(input, { target: { value: 6 } });
    submitBtn = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn);
    const cartCount = screen.getByTestId('cart-count');
    expect(cartCount.innerHTML).toBe('11');
  });
})

describe('Test Cart Page', () => {
  /*the input controls are nearly identical to the
  store page input so I'm not gunna bother testing it*/
  it('expect correct item to be rendered in cart', () => {
    render(<App />);
    const button = screen.getByText("Jokes");
    fireEvent.click(button);
    const pageBtn = screen.getByText('Programming');
    fireEvent.click(pageBtn);
    const input = screen.getByDisplayValue(1);
    fireEvent.change(input, { target: { value: 5 } });
    const submitBtn = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn);
    const title = screen.getByText("Programming (One-Liner)");
    expect(title).toBeInTheDocument();
  });
  it('Adding same item twice increments cart count', () => {
    render(<App />);
    const button = screen.getByText("Jokes");
    fireEvent.click(button);
    const pageBtn = screen.getByText('Programming');
    fireEvent.click(pageBtn);
    const input = screen.getByDisplayValue(1);
    fireEvent.change(input, { target: { value: 5 } });
    const submitBtn = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn);
    fireEvent.click(button);
    const pageBtn2 = screen.getByText('Programming');
    fireEvent.click(pageBtn2);
    const input2 = screen.getByDisplayValue(1);
    fireEvent.change(input2, { target: { value: 6 } });
    const submitBtn2 = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn2);
    expect(screen.getByDisplayValue(11)).toBeInTheDocument();
  });
  it('Removing an item actually removes it', () => {
    render(<App />);
    const button = screen.getByText("Jokes");
    fireEvent.click(button);
    const pageBtn = screen.getByText('Programming');
    fireEvent.click(pageBtn);
    const submitBtn = screen.getByText("Add to Cart");
    fireEvent.click(submitBtn);
    const removeBtn = screen.getByText("remove");
    const item = screen.getByText("Programming (One-Liner)");
    fireEvent.click(removeBtn);
    expect(item).not.toBeInTheDocument();
  });
})

describe('Test Earn Page', () => {
  
})