import react from "react";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";


function App() {
  const [isgameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
    {
      isgameStarted ? <GamePlay /> : <StartGame
      toggle={toggleGamePlay}
      />
    }
    </>
  )
}


export default App
