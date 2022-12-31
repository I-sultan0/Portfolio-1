import React from "react";
import classes from "./Navbar.module.css";
// import { Link } from "react-router-dom";
// import Connect from "../Connect/Connect";

const Navbar = () => {
  const homeScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const aboutScroll = () => {
    window.scrollTo({ top: 600, behavior: "smooth" });
  };
  const projectScroll = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };
  const connectScroll = () => {
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  return (
    <>
      <div className={classes.nav}>
        <div className={classes.logo}>
          <h3>Logo</h3>
        </div>
        <div className={classes.navItems}>
          <ul>
            <li onClick={homeScroll}>Home</li>
            <li onClick={aboutScroll}>About</li>

            <li onClick={projectScroll}>Projects</li>
            <li onClick={connectScroll}>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
