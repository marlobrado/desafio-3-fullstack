import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 2px;
  border-radius: 5px;
  width: 250px;
  height: 38px;

  input {
    border: none;
    width: 100%;
  }

  svg {
    color: #f10;
  }
`;

export const Error = styled.div`
  position: relative;
  display: flex;

  &:hover span {
    opacity: 1;
  }

  span {
    position: absolute;
    background-color: #f10;
    padding: 4px 15px;
    border-radius: 3px;
    left: 25px;
    top: -1px;
    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      content: '';
      border-style: solid;
      border-width: 10px 7px 0 7px;
      transform: rotate(90deg);
      border-color: #f10 transparent;
      position: absolute;
      top: 4px;
      left: -7px;
    }
  }
`;
