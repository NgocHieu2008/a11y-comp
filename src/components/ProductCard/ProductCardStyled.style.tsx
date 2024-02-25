import styled from 'styled-components';

export const StyledProductCard = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #ddd;
border-radius: 4px;
margin: 1rem;
padding: 1rem;
text-decoration: none; /* Remove default link underline */

&:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

a {
  color: inherit;
}

img {
  width: 100%;
  height: auto;
}

h3,
p {
  margin: 0.5rem 0;
}

.discount-badge {
  background-color: #f90;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.rating-info {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  span {
    margin-right: 0.5rem;
  }

  i {
    color: #f90;
  }
}
`;