import React, { FC, useState } from 'react';
import * as Styled from '../../styles/global';
import Box from '../Box';
import Button from '../Button';
import EmptyState from '../EmptyState';
import Input from '../Input';
import Item from './Item';
import List from './styled';

const Todo: FC = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [value, setValue] = useState<string>('');

  const handleClickAdd = () => {
    if (value) {
      setTodoList([...todoList, value]);
      setValue('');
    }
  };

  const handleRemove = (index: number) => {
    setTodoList(todoList.filter((element, i) => i !== index));
  };

  return (
    <Box>
      <Styled.DFlex gap="16px">
        <Input
          name="todo"
          placeholder="Digite"
          onChange={(e: string) => setValue(e)}
          type="text"
          value={value}
          maxLength={35}
        />
        <Button variant="add" onClick={handleClickAdd} />
      </Styled.DFlex>

      {todoList.length > 0 ? (
        <List>
          {todoList.map((item, key) => (
            <Item
              value={item}
              handleRemove={(index: number) => handleRemove(index)}
              key={item + Math.random()}
              index={key}
            />
          ))}
        </List>
      ) : (
        <EmptyState />
      )}
    </Box>
  );
};

export default Todo;
