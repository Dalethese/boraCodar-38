import { BsCheck } from "react-icons/bs";
import styles from "./styles.module.css";

interface props {
  points: number;
}

export const Score = ({ points }: props) => {
  return (
    <div className={styles.scoreContainer}>
      <BsCheck />
      <p className="score">{points}</p>
    </div>
  );
};
