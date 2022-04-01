import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

const handle = () => false;

jest.mock('../../assets/icons/ic-add.png');

describe('Button', () => {
  it('should img add', () => {
    render(<Button variant="add" onClick={handle} />);

    expect(screen.getByAltText(/Adicionar item/i)).toBeDefined();
  });

  it('snapshot', () => {
    const { container } = render(<Button variant="remove" onClick={handle} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
