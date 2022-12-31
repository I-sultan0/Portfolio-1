import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.css";

const Sidebar = (props) => {
  const homeScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const aboutScroll = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };
  const projectScroll = () => {
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };
  const connectScroll = () => {
    window.scrollTo({ top: 2800, behavior: "smooth" });
  };
  return (
    <Menu right>
      <a className="menu-item" onClick={homeScroll}>
        Home
      </a>
      <a className="menu-item" onClick={aboutScroll}>
        About
      </a>
      <a className="menu-item" onClick={projectScroll}>
        Projects
      </a>
      <a className="menu-item" onClick={connectScroll}>
        Contact
      </a>
    </Menu>
  );
};

export default Sidebar;
