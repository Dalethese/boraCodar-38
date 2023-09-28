import { IQuiz } from "../data/quiz";

export type State = {
  gameStage: string;
  questions: IQuiz[];
  score: number;
  currentPage: number;
  situation: "correct" | "wrong" | "";
  currentQuestion: number;
  answerSelected: boolean;
};

export type Action =
  | { type: "check_answer"; selectedOption: string; answer: string }
  | { type: "change_question" }
  | { type: "reset_game" }
  | { type: "start_game" };
