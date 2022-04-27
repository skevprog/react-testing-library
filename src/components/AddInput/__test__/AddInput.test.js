import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn();
const mockedAddInput = <AddInput todos={[]} setTodos={mockedSetTodos} />;

describe('AddInput Unit test', () => {

    const inputPlaceholderText = 'Add a new task here...';

    test('Should render input element', () => {
        render(mockedAddInput);
        const inputElement = screen.getByPlaceholderText(inputPlaceholderText);
        expect(inputElement).toBeInTheDocument();
    });

    test('Should have empty input when Add button is clicked', () => {
        render(mockedAddInput);
        const inputElement = screen.getByPlaceholderText(inputPlaceholderText);
        const buttonElement = screen.getByRole('button',{ name: 'Add' });
        fireEvent.change(inputElement, { target: { value: 'Grocery'}});
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe('');
    })

    test('Should be able to type in input', () => {
        render(mockedAddInput);
        const inputElement = screen.getByPlaceholderText(inputPlaceholderText);
        fireEvent.change(inputElement, { target: { value: 'Grocery'}});
        expect(inputElement.value).toBe('Grocery');
    });

});

describe('button unit test', () => {
    test('Should render button element', () => {
        render(mockedAddInput);
        const buttonElement = screen.getByRole('button',{ name: 'Add' });
        expect(buttonElement).toBeInTheDocument();
    });
});
