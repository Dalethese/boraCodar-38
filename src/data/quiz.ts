export interface IQuiz {
  id: number;
  question: string;
  options: IOptions[];
  answer: string;
}

export interface IOptions {
  id: number;
  text: string;
  imgSrc: string;
}

export const questions: IQuiz[] = [
  {
    id: 1,
    question: "Qual era o objetivo da personagem?",
    options: [
      {
        id: 1,
        text: "Caçar tesouros",
        imgSrc: "/cardImages/Adventure.svg",
      },
      {
        id: 2,
        text: "Ter mais tempo para ler livros",
        imgSrc: "/cardImages/Imagination.svg",
      },
      {
        id: 3,
        text: "Navegar pelos 7 mares",
        imgSrc: "/cardImages/Success.svg",
      },
    ],
    answer: "Caçar tesouros",
  },
  {
    id: 1,
    question: "Qual o nome da personagem?",
    options: [
      {
        id: 1,
        text: "Maria",
        imgSrc: "/cardImages/Adventure.svg",
      },
      {
        id: 2,
        text: "Joaquina",
        imgSrc: "/cardImages/Imagination.svg",
      },
      {
        id: 3,
        text: "Antonieta",
        imgSrc: "/cardImages/Success.svg",
      },
    ],
    answer: "Joaquina",
  },
];
