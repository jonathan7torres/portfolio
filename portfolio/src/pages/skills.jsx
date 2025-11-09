import LogoLoop from "../components/loops/logoLoop/logoLoop";

const imageLogos = [
  {
    node: <i className="devicon-react-original colored"></i>,
    title: "React",
  },
  {
    node: <i class="devicon-vitejs-plain colored"></i>,
    title: "Vite",
  },
];

export default function Skills() {
  return (
    <div>
      <h2></h2>
      <LogoLoop
        logos={imageLogos}
        speed={50}
        direction="left"
        logoHeight={48}
        gap={20}
        pauseOnHover
        scaleOnHover
        // fadeOut
        // fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
