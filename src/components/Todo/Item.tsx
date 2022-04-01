import React, { FC } from 'react';
import Button from '../Button';

import * as Styled from './styled';

const Item: FC<{ value: string; handleRemove: (i: number) => void; index: number }> = ({
  value,
  handleRemove,
  index,
}) => (
  <Styled.Item>
    {value}

    <Button variant="remove" onClick={() => handleRemove(index)} />
  </Styled.Item>
);
export default Item;
