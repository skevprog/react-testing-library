import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

describe('Block 1', () => {
    const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
        return (<BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>)
    }

    test('should render "task" when the number of incomplete tasks are equal to 1', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const footerElement = screen.getByText('1 task left');
        expect(footerElement).toBeInTheDocument();
    });
});

describe('Block 2', () => {
    test('should render the amount of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByTestId('paragraph')
        expect(paragraphElement).toHaveTextContent('5 tasks left')
    });
});


