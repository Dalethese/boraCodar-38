import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { stages } from "../constants/stages";
import { questions } from "../data/quiz";
import { Action, State } from "./types";

const initialState: State = {
  gameStage: stages[0],
  questions,
  score: 0,
  currentPage: 1,
  situation: "",
  currentQuestion: 0,
  answerSelected: false,
};

const quizReducer = (state: State, action: Action) => {
  const nextQuestion = state.currentQuestion + 1;
  let endGame = false;

  switch (action.type) {
    case "start_game":
      return {
        ...state,
        gameStage: stages[1],
      };
    case "check_answer":
      if (state.answerSelected) return state;

      return {
        ...state,
        score: action.answer === action.selectedOption ? state.score + 1 : state.score,
        answerSelected: true,
      };
    case "change_question":
      if (!questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? stages[2] : state.gameStage,
        answerSelected: false,
      };
    case "reset_game":
      return initialState;
    default:
      return state;
  }
};

export const QuizContext = createContext<[State, Dispatch<Action>]>(
  {} as [State, Dispatch<Action>]
);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
