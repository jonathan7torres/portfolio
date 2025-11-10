import style from "./styles.module.scss";
import { motion } from "motion/react";
import LogoLoop from "../../components/loops/logoLoop/logoLoop";
import HorizontalLine from "../../components/lines/straight/straight";

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
    node: <i class="devicon-framermotion-original"></i>,
    title: "Framer Motion",
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
    node: <i class="devicon-php-plain colored"></i>,
    title: "PHP",
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
  {
    node: <i class="devicon-selenium-original colored"></i>,
    title: "Selenium",
  },
  {
    node: <i class="devicon-jest-plain colored"></i>,
    title: "Jest",
  },
];

export default function Experience() {
  return (
    <div className={`${style.container}`}>
      <h2 className={`${style.title}`}>Experience</h2>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className={`${style.section}`}
      >
        <h3 className={`${style.sectionTitle}`}>
          Software Engineer (offiical title: Jr System Administrator)
        </h3>
        <div className={`${style.linesContainer}`}>
          <HorizontalLine
            width={`70%`}
            stroke="#00FF99"
            strokeWidth={2}
            duration={2}
            delay={1}
          />
        </div>
        <h5 className={`${style.company}`}>
          KPFF Consulting Engineers | May 2024 - Present
        </h5>
        <p className={`${style.description}`}>
          I design and build full-stack applications using technologies like
          Vite, React, Express.js, and Framer Motion, with an emphasis on
          responsive interfaces and smooth user interactions. I develop and
          optimize scalable backend APIs to ensure reliable client-server
          communication and data flow. I also create automation tools using
          Puppeteer to streamline repetitive user workflows and improve
          operational efficiency. I continually research and integrate new tools
          and techniques across the stack to improve performance,
          maintainability, and development speed.
        </p>
        <LogoLoop
          logos={kpffLogos}
          speed={20}
          direction="left"
          logoHeight={30}
          gap={20}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#30363d"
          ariaLabel="Technology partners"
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className={`${style.section}`}
      >
        <h3 className={`${style.sectionTitle}`}>
          Jr Software Engineer (offiical title: Jr System Administrator)
        </h3>
        <div className={`${style.linesContainer}`}>
          <HorizontalLine
            width={"60%"}
            stroke="#00FF99"
            strokeWidth={2}
            duration={2}
            delay={2}
          />
        </div>

        <h5 className={`${style.company}`}>
          Upwards (formerly WeeCare) | December 2020 - November 2023
        </h5>
        <p className={`${style.description}`}>
          I designed and maintained scalable API endpoints in PHP to support
          platform growth and backend performance. On the frontend, I
          contributed new features and refactored a significant portion of the
          React codebase to TypeScript, improving code stability and developer
          productivity. I reverse engineered complex API interactions to process
          more than 150,000 records, enabling key data flows that directly
          supported a substantial portion of company revenue. Additionally, I
          handled QA responsibilities by building and running unit, integration,
          and UAT tests using Selenium, Jest, and PHPUnit to ensure reliability
          before deployment. I also documented development workflows and best
          practices to help standardize processes and improve collaboration
          across teams.
        </p>
        <LogoLoop
          logos={upwardsLogos}
          speed={20}
          direction="left"
          logoHeight={30}
          gap={20}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#30363d"
          ariaLabel="Technology partners"
        />
      </motion.section>
    </div>
  );
}
