import { SiCodewars, SiLeetcode, SiGithub } from "react-icons/si";
import { GoCode } from "react-icons/go";

let challengeSiteConent = [
  {
    icon: <SiGithub size={140} />,
    site: "DS&A Repo",
    img: "https://www.codewars.com/users/AlexanderOlivares/badges/small",
    link: "https://github.com/AlexanderOlivares/algosAndDataStructures",
    solved: 0,
    shortDescrip: "Collection of completed code challenges",
    longDescrip: "Includes unit tests",
  },
  {
    icon: <SiCodewars size={140} />,
    site: "Codewars",
    img: "https://www.codewars.com/users/AlexanderOlivares/badges/micro",
    link: "https://www.codewars.com/users/AlexanderOlivares/",
    solved: 326,
    shortDescrip: "Honor percentile: top 1.981%",
    longDescrip: "",
  },
  {
    icon: <SiLeetcode size={140} />,
    site: "Leetcode",
    img: "https://leetcode-stats.vercel.app/api?username=AlexanderOlivares&theme=Light",
    link: "https://leetcode.com/AlexanderOlivares/",
    solved: 171,
    shortDescrip: "Acceptance rate: 76.69%",
    longDescrip: "",
  },
  {
    icon: <GoCode size={140} />,
    site: "Edabit",
    img: "https://leetcode-stats.vercel.app/api?username=AlexanderOlivares&theme=Light",
    link: "https://edabit.com/user/2Qk2mFu9HBFzrB24i",
    solved: 1548,
    shortDescrip: "26,580 XP",
    longDescrip: "",
  },
];

export default challengeSiteConent;
