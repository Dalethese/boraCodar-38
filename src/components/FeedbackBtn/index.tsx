import "./style.css";

interface props {
  isValid: boolean;
}

export const FeedbackBtn = ({ isValid }: props) => {
  const situation = isValid ? "correct" : "incorrect";

  return <span className={`feedback ${situation}`}></span>;
};
