import React from "react";
import "./ContactUsStyles.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-main">
        <div>
          <h4>Newslleter</h4>
          <p>Get news about articles and updates in your inbox.</p>
        </div>

        <div>
          <form className="contact-us-form">
            <input className="contact-us-ip" placeholder="NAME" type="text" />

            <input className="contact-us-ip" placeholder="EMAIL" type="email" />

            <input
              className="contact-us-ip"
              placeholder="MESSAGE"
              type="text"
            />
          </form>
        </div>
      </div>

      <div className="">
        <div className="git-text">
          <p>GET </p>
          <p>IN TOUCH</p>
        </div>

        <p className="submit-btn">SEND</p>
      </div>
    </div>
  );
};

export default ContactUs;
