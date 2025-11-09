import style from "./styles.module.scss";
import LogoLoop from "../../components/loops/logoLoop/logoLoop";

const kpffLogos = [
  {
    node: <i className="devicon-react-original colored"></i>,
    title: "React",
  },
  {
    node: <i class="devicon-vitejs-plain colored"></i>,
    title: "Vite",
  },
  {
    node: <i class="devicon-express-original"></i>,
    title: "Express",
  },
  {
    node: <i class="devicon-sass-original colored"></i>,
    title: "Sass",
  },
  {
    node: <i class="devicon-puppeteer-plain colored"></i>,
    title: "Puppeteer",
  },
];

const upwardsLogos = [
  {
    node: <i className="devicon-react-original colored"></i>,
    title: "React",
  },

  {
    node: <i class="devicon-puppeteer-plain colored"></i>,
    title: "Puppeteer",
  },
  {
    node: <i class="devicon-datadog-original colored"></i>,
    title: "DataDog",
  },
  {
    node: <i class="devicon-jenkins-line colored"></i>,
    title: "Jenkins",
  },
];

export default function Experience() {
  return (
    <div className={`${style.container}`}>
      <h2 className={`${style.title}`}>Experience</h2>
      <section className={`${style.section}`}>
        <h3 className={`${style.sectionTitle}`}>
          Software Engineer (offiical title: Jr System Administrator)
        </h3>
        <h5 className={`${style.company}`}>
          KPFF Consulting Engineers | May 2024 - Present
        </h5>
        <p className={`${style.description}`}>Test Description</p>
        <LogoLoop
          logos={kpffLogos}
          speed={20}
          direction="left"
          logoHeight={30}
          gap={20}
          pauseOnHover
          scaleOnHover
          // fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </section>
      <section className={`${style.section}`}>
        <h3 className={`${style.sectionTitle}`}>
          Software Engineer (offiical title: Jr System Administrator)
        </h3>
        <h5 className={`${style.company}`}>
          Upwards (formerly WeeCare) | December 2020 - November 2023
        </h5>
        <p className={`${style.description}`}>Test Description</p>
        <LogoLoop
          logos={upwardsLogos}
          speed={20}
          direction="left"
          logoHeight={30}
          gap={20}
          pauseOnHover
          scaleOnHover
          // fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </section>
    </div>
  );
}
