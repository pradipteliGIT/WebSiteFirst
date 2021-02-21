import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../Icons/Logo";
import Hamburger from "../Icons/Hamburger";
import Sidebar from "../Sidebar/Sidebar";
import Backdrop from "../Backdrop/Backdrop";
import { getMenuLinks } from "../../utility/utils";
import { APP_TITLE } from "../../constants/constants";
import "./Header.css";

const Header = () => {
  const [selectedPath, selectPath] = React.useState("Home");
  const [isSidebarOpen, setSidebar] = React.useState(false);
  const History = useHistory();
  const redirect = (path, isMobileView = false) => {
    selectPath(path);
    if (isMobileView) {
      setSidebar(!isSidebarOpen);
    }
    History.push(`/${path}`);
  };
  return (
    <>
      <Sidebar
        open={isSidebarOpen}
        selectedPath={selectedPath}
        redirect={redirect}
      />
      {isSidebarOpen && <Backdrop setSidebar={setSidebar} />}
      <div className="app-header">
        <div className="app-header-logo">
          <span className="app-header-logo__label">OM</span>
          <Logo />
        </div>
        <div className="app-header-title">
          <span>{APP_TITLE}</span>
          <Hamburger
            height={"20px"}
            width={"20px"}
            fill={"#FFFFFF"}
            setSidebar={() => setSidebar(!isSidebarOpen)}
          />
        </div>
        <div className="app-header-links">
          {getMenuLinks(selectedPath, redirect, false)}
          <div className="modal-menu"></div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Header);
