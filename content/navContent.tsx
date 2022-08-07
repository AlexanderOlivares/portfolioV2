import { GoBeaker, GoCode, GoInfo, GoMention, GoHome } from "react-icons/go";

export const navContent = [
  {
    path: "/",
    title: "Home",
    icon: <GoHome size={28} />,
  },
  {
    path: "/projects",
    title: "Projects",
    icon: <GoBeaker size={28} />,
  },
  {
    path: "/skills",
    title: "Skills",
    icon: <GoCode size={28} />,
  },
  {
    path: "/about",
    title: "About",
    icon: <GoInfo size={28} />,
  },
  {
    path: "/contact",
    title: "Contact",
    icon: <GoMention size={28} />,
  },
];
