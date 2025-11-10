import Aurora from "../backgorunds/aurora";
import styles from "./styles.module.scss";
import me from "../../assets/me.jpeg";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className={`${styles.textContainer}`}
      >
        <h1 className={`${styles.header}`}>Jonathan Torres</h1>
        <h2 className={`${styles.subheader}`}>
          Software Engineer | Full Stack Developer
        </h2>
        <p className={`${styles.description}`}>
          Software engineer with full stack capabilities, experienced in
          developing scalable applications and intuitive user interfaces. I
          focus on writing maintainable code, improving performance, and
          delivering a clear and reliable user experience.
        </p>
        <ul className={`${styles.navList}`}>
          <li className={`${styles.navListItem}`}>
            <a className={`${styles.navListLink}`} href="/about">
              About
            </a>
          </li>
          <li className={`${styles.navListItem}`}>
            <a className={`${styles.navListLink}`} href="/experience">
              Experience
            </a>
          </li>
        </ul>
      </motion.div>
      <div className={`${styles.imageContainer}`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className={`${styles.imageController}`}
        >
          <img className={`${styles.image}`} src={me} alt="me" />
        </motion.div>
      </div>
    </div>
  );
}
