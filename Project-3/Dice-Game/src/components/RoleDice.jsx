import styled from 'styled-components';

const RoleDice = ({ rollDice, CurrentDice }) => {
  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}>
        <img src={`/images/dice/dice_${CurrentDice}.png`} alt={`dice_${CurrentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .dice {
    cursor: pointer;
    transition: transform 0.3s ease;

    img {
      width: 200px;
      height: 200px;
      border-radius: 15px;
    box-shadow: 0 12px 24px rgba(255, 215, 0, 0.5);
      // border: 2px solid #ffd700; /* Gold border */
    }

    &:hover {
      transform: scale(1.05); /* Slight zoom on hover */
      img {
        box-shadow: 0 12px 24px rgba(255, 215, 0, 0.5); /* Brighter gold shadow on hover */
      }
    }
  }

  p {
    font-size: 25px;
    font-weight: 700;
    color: #ffd700; /* Gold text */
    margin-top: 20px;
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.5); /* Subtle gold glow */
  }
`;