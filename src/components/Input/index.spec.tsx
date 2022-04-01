import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import Input from '.';

const handle = jest.fn();

describe('<Input />', () => {
  test('snapshot', () => {
    const { container } = render(<Input name="teste" onChange={handle} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('onchange', () => {
    const { getByTestId } = render(<Input name="teste" onChange={() => handle} label="Teste" />);
    const input = getByTestId('test-input');

    fireEvent.change(input, { target: { value: 'Rafaela' } });
    expect((input as HTMLInputElement).value).toBe('Rafaela'); // need to make a change so React registers "" as a change
  });
});
