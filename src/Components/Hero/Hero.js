import React from "react";
import classes from "./Hero.module.css";
import curlyArrow from "../../Assets/curlyArrow.png";
import sittingPerson from "../../Assets/sittingIcon.png";

const Hero = () => {
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
                <button>Hire Me</button>
                <button>Download CV</button>
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
