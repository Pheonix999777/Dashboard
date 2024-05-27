import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./styles.scss";

export const MainLayout = () => {
  return (
    <>
      <div className="layout">
        <Sidebar />
        <div className="layout__box">
          <Outlet />
        </div>
      </div>
    </>
  );
};
