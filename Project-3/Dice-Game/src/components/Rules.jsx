import styled, { keyframes } from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <p>1. Select a number from 1 to 6</p>
        <p>2. Click on the dice to roll</p>
        <p>3. If the number you selected matches the dice number, you will get the dice number as score</p>
        <p>4. If the number you selected does not match the dice number, you will lose 2 points</p>
        <p>5. You can reset the score at any time</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

// Keyframes for smooth fade-in animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const RulesContainer = styled.div`
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 25px;
  max-width: 500px;
  margin: 20px auto;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeIn} 0.5s ease-out;

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  .text {
    p {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 15px;
      color: #555;
      line-height: 1.6;
      position: relative;
      padding-left: 20px;

      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color:rgb(36, 36, 36);
        font-size: 24px;
        line-height: 1;
      }
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
`;