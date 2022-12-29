import React from "react";
import classes from "./Works.module.css";
import MyWorks from "./MyWorks";
const Works = (props) => {
  const getValue = (e) => {
    console.log(e.target.value);
    const data = {
      value: e.target.value,
    };
    props.sendValue(data);
  };

  return (
    <>
      <div className={classes.worksContainer}>
        <div className={classes.worksDiv}>
          <div className={classes.worksDiv1}>
            <h2>
              MY RECENT <span>WORKS</span>
            </h2>
            <div className={classes.workCategories}>
              <ul>
                <li value="UI" onClick={getValue}>
                  <button value="UI" onClick={getValue}>
                    UI
                  </button>
                </li>
                <li value="UX" onClick={getValue}>
                  <button value="UX" onClick={getValue}>
                    UX
                  </button>
                </li>
                <li>
                  <button value="Web" onClick={getValue}>
                    WEB
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.worksDiv2}>
            {props.newValue.map((working) => (
              <MyWorks key={working.key} image={working.image} />
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
