import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from '.';

describe('Todo list', () => {
  it('should be able to add a task', async () => {
    render(<Todo />);

    const taskInput = screen.getByPlaceholderText('Digite');
    const addButton = screen.getByTestId('button-add');

    userEvent.type(taskInput, 'Comer bolo de chocolate');
    userEvent.click(addButton);

    const addedFirstTaskTitle = screen.getByText('Comer bolo de chocolate');

    expect(addedFirstTaskTitle).toHaveTextContent('Comer bolo de chocolate');

    userEvent.type(taskInput, 'Tomar cafézin');

    userEvent.click(addButton);

    const addedSecondTaskTitle = screen.getByText('Tomar cafézin');
    expect(addedSecondTaskTitle).toHaveTextContent('Tomar cafézin');
  });

  it('should not be able to add a task with a empty title', () => {
    render(<Todo />);

    const addButton = screen.getByTestId('button-add');

    userEvent.click(addButton);

    expect(screen.queryByTestId('item-list')).not.toBeInTheDocument();
  });

  it('should be able to remove a task', async () => {
    render(<Todo />);

    const taskInput = screen.getByPlaceholderText('Digite');
    const addButton = screen.getByTestId('button-add');

    userEvent.type(taskInput, 'Comer pão de queijo');
    userEvent.click(addButton);

    userEvent.type(taskInput, 'Levar a Amy para passear');

    userEvent.click(addButton);

    const addedFirstTaskTitle = screen.getByText('Comer pão de queijo');
    const addedSecondTaskTitle = screen.getByText('Levar a Amy para passear');

    expect(addedFirstTaskTitle).toBeInTheDocument();
    expect(addedSecondTaskTitle).toBeInTheDocument();

    const [addedFirstTaskRemoveButton] = screen.getAllByTestId('button-remove');

    userEvent.click(addedFirstTaskRemoveButton);

    expect(addedFirstTaskTitle).not.toBeInTheDocument();
    expect(screen.getByText('Levar a Amy para passear')).toBeInTheDocument();
  });
});
