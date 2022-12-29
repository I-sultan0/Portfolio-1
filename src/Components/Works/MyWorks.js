import React from "react";
import classes from "./MyWorks.module.css";

const MyWorks = (props) => {
  return (
    <div className={classes.imgContainer}>
      <img src={props.image} alt="Work" />
    </div>
  );
};

export default MyWorks;
