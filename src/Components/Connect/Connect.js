import React from "react";
import classes from "./Connect.module.css";
import connectImg from "../../Assets/ConnectImg.png";

const Connect = () => {
  return (
    <>
      <div className={classes.connect}>
        <div className={classes.connect1}>
          <img src={connectImg} alt="Person Reaching Towards Goal" />
        </div>
        <div className={classes.connect2}>
          <form
            action="https://formsubmit.co/akhtersultan007@gmail.com"
            method="POST"
          >
            <div className={classes.nameEmail}>
              <div>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div>
                <label>Your Email</label>
                <input type="email" name="email" placeholder="Email" required />
              </div>
            </div>

            <div className={classes.message}>
              <label>Your Message</label>

              <textarea name="message" placeholder="Message" required />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Connect;
