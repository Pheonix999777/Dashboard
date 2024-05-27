import { TiHome } from "react-icons/ti";
import { AiOutlineLayout } from "react-icons/ai";
import { PiCylinderBold } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { BiWindows } from "react-icons/bi";
import { PiRecord } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { TbWaveSawTool } from "react-icons/tb";

export const useSidebarProps = () => {
  const navList = [
    {
      path: "/home",
      icon: <TiHome />,
    },
    {
      path: "/about",
      icon: <AiOutlineLayout />,
    },
    {
      path: "/wave",
      icon: <TbWaveSawTool />,
    },
    {
      path: "/faq",
      icon: <PiCylinderBold />,
    },
    {
      path: "/window",
      icon: <BiWindows />,
    },
    {
      path: "/email",
      icon: <MdOutlineMailOutline />,
    },

    {
      path: "/cart",
      icon: <LuShoppingCart />,
    },
    {
      path: "/",
      icon: <TiHome />,
    },
    {
      path: "/record",
      icon: <PiRecord />,
    },
    {
      path: "/calendar",
      icon: <CiCalendar />,
    },
  ];

  return { navList };
};
