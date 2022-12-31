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
            <a href="https://www.facebook.com/" target="blank">
              <img src={fb} alt="socials" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="blank">
              <img src={insta} alt="socials" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="blank">
              <img src={twitter} alt="socials" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="blank">
              <img src={yt} alt="socials" />
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.email}>
        <h4>akhtersultan007@gmail.com</h4>
      </div>
    </div>
  );
};

export default Footer;
