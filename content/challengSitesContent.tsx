import { SiCodewars, SiLeetcode } from "react-icons/si";
import { GoCode } from "react-icons/go";

import edbabit from "../public/images/edabit.png";

let challengeSiteConent = [
  {
    icon: <SiCodewars size={25} />,
    site: "Codewars",
    img: "https://www.codewars.com/users/AlexanderOlivares/badges/small",
    link: "https://www.codewars.com/users/AlexanderOlivares/",
    solved: 324,
    shortDescrip: "",
    longDescrip: "",
  },
  {
    icon: <SiLeetcode size={25} />,
    site: "Leetcode",
    img: "https://leetcode-stats.vercel.app/api?username=AlexanderOlivares&theme=Light",
    link: "https://leetcode.com/AlexanderOlivares/",
    solved: 171,
    shortDescrip: "",
    longDescrip: "",
  },
  {
    icon: <GoCode size={25} />,
    site: "Edabit",
    img: edbabit,
    link: "https://edabit.com/user/2Qk2mFu9HBFzrB24i",
    solved: 1548,
    shortDescrip: "",
    longDescrip: "",
  },
];

export default challengeSiteConent;
