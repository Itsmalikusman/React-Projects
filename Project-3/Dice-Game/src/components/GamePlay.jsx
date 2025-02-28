import React from 'react';
import styled, { keyframes } from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { useState } from 'react';
import { Button } from '../styled/button';
import Rules from './Rules';

const GamePlay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [CurrentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [ShowRules, setShowRules] = useState(false);

  const GenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number");
      return;
    }

    const RandomNumber = GenerateRandomNumber(1, 6);
    setCurrentDice(RandomNumber);
    if (selectedNumber === RandomNumber) {
      setscore((prev) => prev + RandomNumber);
    } else {
      setscore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setscore(0);
    setSelectedNumber(0);
    setCurrentDice(1);
  };

  return (
    <Container>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice CurrentDice={CurrentDice} rollDice={rollDice} />
      <ButtonContainer>
        <StyledButton onClick={resetScore}>Reset</StyledButton>
        <StyledButton onClick={() => setShowRules(!ShowRules)}>
          {ShowRules ? "Hide Rules" : "Show Rules"}
        </StyledButton>
      </ButtonContainer>
      {ShowRules && <Rules />}
    </Container>
  );
};

export default GamePlay;

// Keyframes for button animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  background: linear-gradient(135deg, #000, #222); /* Dark gradient background */
  min-height: 100vh;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff; /* White text */

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    margin-top: 50px;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(135deg, #ffd700, #b8860b); /* Gold gradient */
  color: #000; /* Black text */
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(255, 215, 0, 0.3); /* Gold shadow */
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    background: linear-gradient(135deg, #b8860b, #ffd700); /* Reverse gold gradient */
    box-shadow: 0 6px 8px rgba(255, 215, 0, 0.5); /* Brighter gold shadow */
    transform: translateY(-2px);
    animation: ${pulse} 1s infinite;
  }

  &:active {
    transform: translateY(0);
  }
`;