import styled, { keyframes } from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <main>
      <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </main>
  );
};

export default TotalScore;

// Keyframes for fade-in animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
`;

const ScoreContainer = styled.div`
  background: #000; /* Black background */
  border: 2px solid #fff; /* White border */
  border-radius: 20px;
  padding: 30px;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2); /* White shadow */
  animation: ${fadeIn} 0.5s ease-out;
  font-family: 'Poppins', sans-serif;
  color: #fff; /* White text */
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(255, 255, 255, 0.3); /* Brighter shadow on hover */
  }

  h1 {
    font-size: 100px;
    line-height: 100px;
    font-weight: 700;
    margin: 0;
    color: #fff; /* White text */
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8); /* Glowing white effect */
  }

  p {
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0 0;
    color: #ccc; /* Light gray for subtle contrast */
  }
`;