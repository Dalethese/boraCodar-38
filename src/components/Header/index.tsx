import useQuiz from "../../hooks/useQuiz";
import { Score } from "../Score";
import styles from "./styles.module.css";

export const Header = () => {
  const [{ score }] = useQuiz();

  return (
    <div className={styles.header}>
      <span>
        👋<strong>Quiz</strong>Time
      </span>
      <Score points={score} />
    </div>
  );
};
