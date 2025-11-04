import Aurora from "../backgorunds/aurora";
import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={`${styles.textContainer}`}>
        <h1 className={`${styles.header}`}>Jonathan Torres</h1>
        <h2 className={`${styles.subheader}`}>
          Software Engineer | Full Stack Developer
        </h2>
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
      </div>
      <div className={`${styles.imageContainer}`}></div>
    </div>
  );
}
