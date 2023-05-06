import React from "react";
import "../../assets/css/Contact.css";

const Contact = () => {
  function handleOnChange() {}

  return (
    <div id="contact" className="portfolio-section section">
      <div className="flex content-center items-center">
        <h2 className="section-header">Contact Me</h2>
      </div>
      <div className="section contact-section">
        <form className="contact-form flex column">
          <label className="mb-1" htmlFor="name">
            Name
          </label>
          <input className="mb-2" onChange={handleOnChange} name="name" type="text" />
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input className="mb-2" onChange={handleOnChange} name="email" type="email" />
          <label className="mb-1" htmlFor="message">
            Your message
          </label>
          <textarea className="mb-2" onChange={handleOnChange} name="message" type="text" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
