import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon header', () => {
    render(<App />);

    // Targeting the h1 element containing "Little Lemon"
    const headerElement = screen.getByRole('heading', { name: /Little Lemon/i, level: 1 });
    expect(headerElement).toBeInTheDocument();
});
