import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('render signIn button', () => {
  render(<App />);
  const signInButton = screen.getByText(/Sign In/i);
  expect(signInButton).toBeInTheDocument();
  fireEvent.click(signInButton);
});
