import { BsCheck, BsX } from "react-icons/bs";
import { IOptions } from "../../data/quiz";
import styles from "./styles.module.css";
import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz";

interface props {
  option: IOptions;
  answer: string;
  selectOption: () => void;
}

export const Card = ({ option, answer, selectOption }: props) => {
  const [{ answerSelected }] = useContext(QuizContext);

  const situation = () => {
    if (answerSelected && option.text === answer) return "correct";
    if (answerSelected && option.text !== answer) return "wrong";

    return "";
  };

  return (
    <div
      className={`${styles.card} ${styles[situation()]}`}
      onClick={() => selectOption()}
    >
      <span className={`${styles.feedback} ${styles[situation()]}`}>
        {situation() === "correct" && <BsCheck />}
        {situation() === "wrong" && <BsX />}
      </span>
      <img src={option.imgSrc} alt="" />
      <p className="heading-2">{option.text}</p>
    </div>
  );
};
