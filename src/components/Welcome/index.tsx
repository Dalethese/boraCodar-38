import useQuiz from "../../hooks/useQuiz";
import styles from "./style.module.css";

export const Welcome = () => {
  const [, dispatch] = useQuiz();

  return (
    <div className="container">
      <div className={styles.main}>
        <div>
          <h2>Bem-vindo ao</h2>
          <h1 className={styles.title}>
            👋<strong>Quiz</strong>Time
          </h1>
        </div>
        <button
          className={styles.button}
          onClick={() => dispatch({ type: "start_game" })}
        >
          Começar
        </button>
      </div>
    </div>
  );
};
