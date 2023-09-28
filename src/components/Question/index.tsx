import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz";
import { IOptions } from "../../data/quiz";
import { Button } from "../Button";
import { Card } from "../Card";
import styles from "./styles.module.css";
import { Header } from "../Header";

export const Question = () => {
  const [state, dispatch] = useContext(QuizContext);

  const { questions, currentPage, currentQuestion } = state;

  const onSelectOption = (option: IOptions) => {
    dispatch({
      type: "check_answer",
      selectedOption: option.text,
      answer: questions[currentQuestion].answer,
    });
  };

  return (
    <div className="container">
      <Header />
      <div className={styles.main}>
        <h1 className={styles["heading-1"]}>{questions[currentQuestion].question}</h1>
        <div className={styles.questions}>
          {questions[currentQuestion].options.map((option) => (
            <Card
              key={option.id}
              option={option}
              answer={questions[currentQuestion].answer}
              selectOption={() => onSelectOption(option)}
            />
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <span>
          {currentPage}/{questions.length}
        </span>
        <Button btnIcon="chevronRight" />
      </div>
    </div>
  );
};
