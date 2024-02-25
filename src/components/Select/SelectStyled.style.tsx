import styled from 'styled-components';

export const StyledSelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledSelectTrigger = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &::after {
    content: '▾';
    font-size: 12px;
    margin-left: 0.5rem;
    transform: translateY(-1px);
  }
`;

export const StyledSelectList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 4px;
  background-color: #fff;

  li {
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;