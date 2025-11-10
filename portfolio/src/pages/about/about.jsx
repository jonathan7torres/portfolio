import style from "./styles.module.scss";
import { motion } from "motion/react";
import HorizontalLine from "../../components/lines/straight/straight";

export default function About() {
  return (
    <div className={`${style.container}`}>
      <h2 className={`${style.title}`}>About</h2>
      <p className={`${style.paragraph}`}>
        I am a software engineer with full stack skills and over three years of
        experience. I enjoy turning ideas into working products, solving
        challenging problems, building intuitive interfaces, and creating
        reliable backend systems that make technology easier and more enjoyable
        to use.
      </p>
    </div>
  );
}
