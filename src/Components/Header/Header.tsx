import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import "./styles.scss";

export const Header = () => {
  return (
    <div className="admin-panel">
      <Link to="/" className="sidebar__logo">
        <h2 className="sidebar__title">
          <span>UZLOYAL</span>
        </h2>
      </Link>
      <span className="title">
        <span className="admin-text">
          <span className="title-admin">ADMINPANEL</span>
        </span>
      </span>
      <ul className="menu">
        <li className="dropdown">
          <button type="button" className="dropdown-toggle">
            <IoMdSettings />
          </button>
        </li>
      </ul>
    </div>
  );
};
