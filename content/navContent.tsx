import { GoBeaker, GoCode, GoMention, GoHome } from "react-icons/go";

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
    path: "/contact",
    title: "Contact",
    icon: <GoMention size={28} />,
  },
];
