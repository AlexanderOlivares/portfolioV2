import { IconType } from "react-icons";
import { FaJsSquare, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiPostgresql,
  SiFirebase,
  SiMaterialui,
  SiBootstrap,
  SiGit,
  SiExpress,
  SiTypescript,
  SiStyledcomponents,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiJest,
} from "react-icons/si";

export const skillIcons: IconType[] = [
  FaNodeJs,
  //   FaJsSquare,
  FaReact,
  SiTypescript,
  FaPython,
  SiPostgresql,
  SiExpress,
  SiBootstrap,
  SiMaterialui,
  SiFirebase,
  SiGit,
  SiTailwindcss,
  SiStyledcomponents,
  SiNextdotjs,
  SiJest,
  SiHtml5,
  SiCss3,
];

const skillIconNameLookup = {
  NodeJs: "Node.js",
  JsSquare: "JavaScript",
  React: "React",
  Typescript: "TypeScript",
  Python: "Python",
  Postgresql: "PostgreSQL",
  Bootstrap: "Bootstrap",
  Materialui: "Material UI",
  Firebase: "Firebase",
  Git: "Git",
  Express: "Express.js",
  Styledcomponents: "Styled Components",
  Tailwindcss: "Tailwind CSS",
  Nextdotjs: "Next.js",
  Jest: "Jest",
  Html5: "HTML5",
  Css3: "CSS3",
};

export default skillIconNameLookup;
