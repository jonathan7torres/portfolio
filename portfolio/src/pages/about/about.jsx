import style from "./styles.module.scss";
import { motion } from "motion/react";
import HorizontalLine from "../../components/lines/straight/straight";

export default function About() {
  return (
    <div className={`${style.container}`}>
      <h2 className={`${style.title}`}>About</h2>
    </div>
  );
}
