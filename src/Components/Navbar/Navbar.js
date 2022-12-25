import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={classes.nav}>
        <div className={classes.logo}>
          <h3>Logo</h3>
        </div>
        <div className={classes.navItems}>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
