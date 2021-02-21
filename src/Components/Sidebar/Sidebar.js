import { React } from "react";
import { APP_TITLE } from "../../constants/constants";
import { getMenuLinks } from "../../utility/utils";
import "./Sidebar.css";
const Sidebar = ({ open, selectedPath, redirect }) => {
  return (
    <div className={`sidebar ${open && "open"}`}>
      <div className="sidebar__title">{APP_TITLE}</div>
      <div className="sidebar__menus">
        {getMenuLinks(selectedPath, redirect, true)}
      </div>
    </div>
  );
};
export default Sidebar;
