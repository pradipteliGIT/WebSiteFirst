import { React } from "react";
import "./Backdrop.css";
const Backdrop = ({ setSidebar }) => {
  return <div className="backdrop" onClick={() => setSidebar(false)}></div>;
};
export default Backdrop;
