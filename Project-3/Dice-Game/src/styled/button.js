import styled from 'styled-components';
export
const Button = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: auto; /* Moves button to the right */
  &:hover {
    background-color: #fff;
    color: black;
  }
`;
