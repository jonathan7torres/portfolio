import style from "./styles.module.scss";
import { motion } from "motion/react";
import HorizontalLine from "../../components/lines/straight/straight";
import me from "../../assets/me_bike.jpeg";

export default function About() {
  return (
    <div className={`${style.container}`}>
      <h2 className={`${style.title}`}>About</h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className={`${style.paragraph}`}
      >
        I am a full stack software engineer with over three years of experience
        building web applications and working across both frontend and backend
        systems. I like solving problems, making things feel smooth to use, and
        learning new tools along the way. I enjoy the process of figuring out
        how everything fits together and turning ideas into something real that
        people can interact with.
        <br />
        <br />
        <img className={`${style.image}`} src={me} alt="me" />
        When I am not coding, I like staying active. I swim pretty often, and I
        also enjoy hiking and biking when the weather is good. I think the same
        things that make those activities fun are what I enjoy about engineering
        too. There is always something to improve, a new challenge to take on,
        and a sense of progress that keeps things interesting.
        <br />
        <br />
        One project I am especially proud of is{" "}
        <a
          className={`${style.greenLink}`}
          href="https://flutterkick.com"
          target="_blank"
        >
          Flutterkick
        </a>
        , a web app I built for swimmers. It lets people create and customize
        their own swim workouts in a way that feels simple and flexible. I
        started it because I could not find a good tool that matched how
        swimmers actually train, so I just made one myself. Building it let me
        combine something I care about with my skills as an engineer, and it
        taught me a lot along the way.
      </motion.p>
      <div className={`${style.linkContainer}`}>
        <a className={`${style.link}`} href="/">
          {`<< Back`}
        </a>
      </div>
    </div>
  );
}
