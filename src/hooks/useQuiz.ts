import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

export default function useQuiz() {
  return useContext(QuizContext);
}
