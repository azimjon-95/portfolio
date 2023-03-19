import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { SiCodeproject } from "react-icons/si";
import { RxResume } from "react-icons/rx";
export const navData = [
  {
    id: 2,
    name: "ABOUT.ME",
    icon: <BsInfoCircle />,
    to: "/about",
  },
  {
    id: 3,
    name: "SKILLS",
    icon: <GiSkills />,
    to: "/skills",
  },
  {
    id: 1,
    name: "HOME",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    id: 4,
    name: "RESUME",
    icon: <RxResume />,
    to: "/resume",
  },
  {
    id: 5,
    name: "PROJECTS",
    icon: <SiCodeproject />,
    to: "/portfolio",
  },
];
