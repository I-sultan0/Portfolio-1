import React from "react";
import classes from "./About.module.css";
import aboutImage from "../../Assets/about.png";
import aboutArrow from "../../Assets/aboutArrow.png";
import aboutPerson from "../../Assets/aboutPerson.png";

const About = () => {
  return (
    <>
      <div className={classes.aboutDiv}>
        <div className={classes.aboutDiv1}>
          <div className={classes.aboutText1}>
            <div className={classes.aboutTextImg}>
              <img src={aboutImage} alt="Text showing About" />
            </div>
            <div className={classes.aboutText}>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.... Read more
              </h3>
            </div>
          </div>
          <div className={classes.aboutText2}>
            <img src={aboutArrow} alt="An icon of curly Arrow" />
          </div>
        </div>
        <div className={classes.aboutDiv2}>
          <img src={aboutPerson} alt="An icon of Person taking nap" />
        </div>
      </div>
    </>
  );
};

export default About;
