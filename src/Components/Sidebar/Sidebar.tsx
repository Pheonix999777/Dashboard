import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { TiHome } from "react-icons/ti";
import { AiOutlineLayout } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { BiWindows } from "react-icons/bi";
import { PiRecord } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { TbWaveSawTool } from "react-icons/tb";
import { IoChatboxOutline } from "react-icons/io5";
import { BsServer } from "react-icons/bs";
import "./styles.scss";

interface NavItem {
  path: string;
  icon: JSX.Element;
}

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const navList: NavItem[] = [
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
      icon: <BsServer />,
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
      path: "/chat",
      icon: <IoChatboxOutline />,
    },

    {
      path: "/cart",
      icon: <LuShoppingCart />,
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

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className="sidebar">
      <button className="sidebar__btn">
        <CgMenuLeft />
      </button>
      <nav className="sidebar__nav">
        <ul className="sidebar__ul">
          {navList.map((item: NavItem, index: number) => (
            <li
              className={`sidebar__list  ${
                activeItem === index ? "sidebar__list-color" : ""
              }`}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              <Link
                className={`sidebar__link  ${
                  activeItem === index ? "sidebar__link-color" : ""
                }`}
                to={item.path}
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
