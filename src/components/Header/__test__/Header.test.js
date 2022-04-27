import { render, screen } from '@testing-library/react';
import Header from '../Header';

// test('should render same text passed into title prop', async () => {
//     render(<Header title="Testing Header" />);
//     const headingElement = screen.getByText('Testing Header');
//     expect(headingElement).toBeInTheDocument();
// });

// Another way to do the upper test
test('should render same text passed into title prop', () => {
    render(<Header title="Testing Header" />);
    const headingElement = screen.getByRole('heading', { name: 'Testing Header'});
    expect(headingElement).toBeInTheDocument();
});

test('should render correct role',  () => {
    render(<Header title="test"/>);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
})

test('should return quantity of elements by role', () => {
    render(<Header title="test"/>);
    const headingElements = screen.getAllByRole('heading');
    expect(headingElements.length).not.toBe(2);
})