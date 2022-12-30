import React from "react";
import classes from "./Footer.module.css";
import fb from "../../Assets/socialFb.png";
import insta from "../../Assets/SocialInsta.png";
import twitter from "../../Assets/socialTwit.png";
import yt from "../../Assets/socialYt.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.socials}>
        <ul>
          <li>
            <img src={fb} alt="socials" />
          </li>
          <li>
            <img src={insta} alt="socials" />
          </li>
          <li>
            <img src={twitter} alt="socials" />
          </li>
          <li>
            <img src={yt} alt="socials" />
          </li>
        </ul>
      </div>
      <div className={classes.email}>
        <h4>akhersultan007@gmail.com</h4>
      </div>
    </div>
  );
};

export default Footer;
