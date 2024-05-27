import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";
import { useSidebarProps, NavListItem } from "./useSidebarProps";
import "./styles.scss";

const Sidebar: React.FC = () => {
  const { navList } = useSidebarProps();
  const [activeItem, setActiveItem] = useState<number>(0);

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
          {navList.map((item: NavListItem, index: number) => (
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
