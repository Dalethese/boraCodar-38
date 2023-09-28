import useQuiz from "../../hooks/useQuiz";
import { Header } from "../Header";
import styles from "./styles.module.css";

export const GameOver = () => {
  const [{ score, questions }, dispatch] = useQuiz();

  const questionsQty = questions.length;

  return (
    <div className="container">
      <Header />
      <div className={styles.main}>
        <h1 className={styles.title}>Fim de Jogo</h1>
        <p>
          Você acertou {score} de {questionsQty} perguntas!
        </p>
        <button
          className={styles.button}
          onClick={() => dispatch({ type: "reset_game" })}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};
