import styled from 'styled-components';

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #f0f0f0;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ActiveButton = styled(Button)`
  background-color: #e0e0e0;
  font-weight: bold;
`;

export const PageLink = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
`;