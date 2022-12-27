import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/projects">
        Projects
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default Sidebar;
