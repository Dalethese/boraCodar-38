import useQuiz from "../../hooks/useQuiz";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import styles from "./style.module.css";

interface props {
  btnIcon: string;
}

export const Button = ({ btnIcon }: props) => {
  const [{ answerSelected }, dispatch] = useQuiz();

  return (
    <button
      className={styles.button}
      onClick={() => dispatch({ type: "change_question" })}
      disabled={answerSelected ? false : true}
    >
      {btnIcon === "chevronRight" && <BsChevronRight />}
      {btnIcon === "chevronLeft" && <BsChevronLeft />}
    </button>
  );
};
