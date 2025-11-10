import styles from "./styles.module.scss";
import logo from "../../assets/jt_logo.png";

export default function Navbar() {
  return (
    <div className={`${styles.container}`}>
      <a className={`${styles.logoContainer}`} href="/">
        <img className={`${styles.logo}`} src={logo} alt="logo" />
      </a>
      <div className={`${styles.linksContainer}`}>
        <a
          className={`${styles.link}`}
          href="mailto:jon7torres@gmail.com"
          target="_blank"
        >
          Contact me
        </a>
        <a
          className={`${styles.link}`}
          href="https://www.linkedin.com/in/jonathanatorres/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className={`${styles.link}`}
          href="https://github.com/jonathan7torres"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
