import React from 'react';
import styled, { keyframes } from 'styled-components';

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrnumber = [1, 2, 3, 4, 5, 6];

  const NumberSelecterhandler = (Value) => {
    setSelectedNumber(Value);
    setError("");
  };

  return (
    <NumberSelecterContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
        {arrnumber.map((Value, i) => (
          <Box
            isselcted={Value === selectedNumber}
            key={i}
            onClick={() => NumberSelecterhandler(Value)}
          >
            {Value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelecterContainer>
  );
};

export default NumberSelector;

// Keyframes for error message animation
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const NumberSelecterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  p {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
    line-height: 1.5;
    color: #333;
  }

  .error {
    color: red;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 15px;
    animation: ${shake} 0.5s ease-in-out;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 2px solid #333;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${props => props.isselcted ? '#333' : 'white'};
  color: ${props => props.isselcted ? 'white' : '#333'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.isselcted ? '#444' : '#f0f0f0'};
  }

  &:active {
    transform: translateY(0);
  }
`;