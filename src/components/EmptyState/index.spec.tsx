import React from 'react';
import { render } from '@testing-library/react';
import EmptyState from '.';

describe('Empty state', () => {
  it('Should render message', () => {
    const { getByText } = render(<EmptyState />);

    const message = getByText('Nenhum item cadastrado');

    expect(message).toBeVisible();
  });

  it('snapshot', () => {
    const { container } = render(<EmptyState />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
