import { GoBeaker, GoCode, GoInfo, GoMention, GoGear } from "react-icons/go";

export const navContent = [
  {
    path: "/",
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
  {
    path: "/settings",
    title: "Settings",
    icon: <GoGear size={28} />,
  },
];
