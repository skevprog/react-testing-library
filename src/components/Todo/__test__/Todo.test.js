import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';


const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText('Add a new task here...');
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task }});
        fireEvent.click(buttonElement);
    });
}

// Integration Test
describe('Todo', () => {
   test('Should render the input value (task name) on the screen after pressing the add button', () => {
    const MockTodo = (<BrowserRouter><Todo /></BrowserRouter>);
    render(MockTodo);
    addTask(['Buy things']);
    const taskElement = screen.getByText('Buy things');
    expect(taskElement).toBeInTheDocument();
   });

   test('Should render tasks names that were added', () => {
    const MockTodo = (<BrowserRouter><Todo /></BrowserRouter>);
    render(MockTodo);
    addTask(['Buy things', 'Read new book', 'Go to the cinema']);
    const taskElements = screen.getAllByTestId('task-container');
    expect(taskElements.length).toBe(3);
   });

//    className={`todo-item ${todo.completed && "todo-item-active"}`}
   test('Should set the "todo-item-active" class if the task is completed (it was clicked)', () => {
    const MockTodo = (<BrowserRouter><Todo /></BrowserRouter>);
    render(MockTodo);
    addTask(['Test functionality']);
    const taskElement = screen.getByText('Test functionality');
    fireEvent.click(taskElement);
    expect(taskElement).toHaveClass('todo-item-active');
   });

});
