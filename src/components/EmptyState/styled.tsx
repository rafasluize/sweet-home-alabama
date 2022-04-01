import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {

    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {

    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;

export const EmptyState = styled.div`
  height: 280px;
  width: 100%;
  background-color: #f2f2f2;
  border: 1px dashed #cccccc;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  color: #606060;

  animation-name: ${fadeInUp};
  animation-duration: 1s;
  animation-fill-mode: both;
`;

export default EmptyState;
