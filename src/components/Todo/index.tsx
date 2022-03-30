import React, { FC, useState } from 'react';
import * as Styled from '../../styles/global';
import Box from '../Box';
import Button from '../Button';
import EmptyState from '../EmptyState';
import Input from '../Input';

const Todo: FC = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const handleInput = () => {
    console.log('suihashiu');
  };

  const handleClickAdd = () => {
    console.log('suihashiu');
  };

  return (
    <Box>
      <Styled.DFlex gap="16px">
        <Input name="todo" placeholder="Digite" onChange={handleInput} />
        <Button variant="add" onClick={handleClickAdd} />
      </Styled.DFlex>

      {todoList.length < 1 && <EmptyState />}
    </Box>
  );
};

export default Todo;
