import { useContext } from "react";
import { QuizContext } from "./contexts/quiz";

import { Question } from "./components/Question";
import { GameOver } from "./components/GameOver";

import "./App.css";
import { Welcome } from "./components/Wellcome";

function App() {
  const [state] = useContext(QuizContext);

  return (
    <div className="app">
      {state.gameStage === "start" && <Welcome />}
      {state.gameStage === "playing" && <Question />}
      {state.gameStage === "end" && <GameOver />}
    </div>
  );
}

export default App;
