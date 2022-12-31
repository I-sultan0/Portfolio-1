import React from "react";
import classes from "./Hero.module.css";
import curlyArrow from "../../Assets/curlyArrow.png";
import sittingPerson from "../../Assets/sittingIcon.png";
import Resume from "../../Assets/Resume.pdf";

const Hero = () => {
  const connectScroll = () => {
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  return (
    <>
      <div className={classes.heroDiv}>
        <div className={classes.heroDiv1}>
          <div className={classes.heroDiv1Container}>
            <div className={classes.heroContainer1}>
              <img src={curlyArrow} alt="Curly Arrow" />
            </div>
            <div className={classes.heroContainer2}>
              <h1>CREATIVE UI</h1>
              <h1>DEVELOPER</h1>
              <div className={classes.buttons}>
                <button onClick={connectScroll}>Hire Me</button>
                <a href={Resume} download>
                  <button>Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.heroDiv2}>
          <img src={sittingPerson} alt="Sitting Person with Laptop Icon" />
        </div>
      </div>
    </>
  );
};

export default Hero;
