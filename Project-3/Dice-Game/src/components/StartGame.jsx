import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from '../styled/button';

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <StyledImg src="/images/dices.png" alt="dice image" />
      <Content>
        <Title>Dice Game</Title>
        <StyledButton onClick={toggle}>Play Now</StyledButton>
      </Content>
    </Container>
  );
};

export default StartGame;

// Keyframes for fade-in animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Keyframes for glowing effect
const glow = keyframes`
  0% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffd700; }
  50% { text-shadow: 0 0 10px #fff, 0 0 20px #ffd700, 0 0 30px #ffd700; }
  100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffd700; }
`;

const Container = styled.div`
  // max-width: 1180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  background: linear-gradient(135deg, #000, #222); /* Dark gradient background */
  color: #fff; /* White text */
`;

const Content = styled.div`
  text-align: justify;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 7rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
  animation: ${glow} 2s infinite; /* Glowing effect with gold */
  color:rgb(255, 255, 255); /* Gold text */
`;

const StyledImg = styled.img`
  width: 50%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(255, 215, 0, 0.3); /* Gold shadow */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Slight zoom on hover */
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(135deg, #ffd700, #b8860b); /* Gold gradient */
  color: #fff; /* Black text */
  border: none;
  padding: 15px 30px;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(255, 215, 0, 0.3); /* Gold shadow */

  &:hover {
    background: linear-gradient(135deg, #b8860b, #ffd700); /* Reverse gold gradient */
    box-shadow: 0 6px 8px rgba(255, 215, 0, 0.5); /* Brighter gold shadow */
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;