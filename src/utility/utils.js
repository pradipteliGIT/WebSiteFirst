import AboutUs from "../Components/Icons/AboutUs";
import ContactUs from "../Components/Icons/ContactUs";
import Home from "../Components/Icons/Home";
import { MENUS } from "../constants/constants";
export const Menus = MENUS();
export const getIcon = (path) => {
  const height = "20px";
  const width = "20px";
  const fill = "#8533ff";
  switch (path) {
    case "Home":
      return <Home fill={fill} height={height} width={width} />;
    case "About":
      return <AboutUs fill={fill} height={height} width="24px" />;
    case "Contact":
      return <ContactUs fill={fill} height={height} width={width} />;
    default:
      return null;
  }
};
export const getMenuLinks = (selectedPath, redirect, isMobileView) => {
  return Menus.map((menu) => {
    return (
      <li
        className={`${selectedPath === menu.url ? "selected" : ""}`}
        key={menu.name}
        onClick={() => redirect(menu.url, isMobileView)}
      >
        {getIcon(menu.url)} &nbsp;
        {menu.name}
      </li>
    );
  });
};
