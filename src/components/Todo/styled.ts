import styled, { keyframes } from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 282px;
`;

export const Item = styled.div`
  background: #eeeeee;
  border-radius: 2px;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 8px 16px;
  color: #606060;
  display: flex;
  justify-content: space-between;
`;

export default List;
