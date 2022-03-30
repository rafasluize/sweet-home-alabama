import { render } from '@testing-library/react';
import Box from './index';

describe('Box', () => {
  it('base styles', () => {
    const { container } = render(<Box />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
