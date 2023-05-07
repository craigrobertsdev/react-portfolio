/* eslint-disable default-case */
import React, { useState } from "react";
import "../../assets/css/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitMessageHidden, setSubmitMessageHidden] = useState("hidden");
  const [errorMessageHidden, setErrorMessageHidden] = useState("hidden");

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  }

  // performs validation for fields that don't require regex
  function validateTextField(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (value) {
      setErrorMessage("");
      setErrorMessageHidden("hidden");
      return;
    }

    if (name === "name") {
      setErrorMessage("Please enter your name.");
      setErrorMessageHidden("");
    } else {
      setErrorMessage("Please enter a message.");
      setErrorMessageHidden("");
    }
  }

  function validateEmail(event) {
    const value = event.target.value;
    if (!value) {
      setErrorMessage("An email address is required.");
      setErrorMessageHidden("");
      return;
    }

    const validEmail = value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (!validEmail) {
      setErrorMessage("Email address is invalid.");
      setErrorMessageHidden("");
    }
  }

  function validateForm(event) {
    event.preventDefault();
    setSubmitMessageHidden("");
    // do nothing if the form is invalid
    if (errorMessage) return;

    setTimeout(() => setSubmitMessageHidden("hidden"), 3000);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div id="contact" className="portfolio-section section">
      <div className="flex content-center items-center">
        <h2 className="section-header">Contact Me</h2>
      </div>
      <div className="section contact-section">
        <form onSubmit={validateForm} className="contact-form flex column mb-1">
          <label className="mb-1" htmlFor="name">
            Name
          </label>
          <input
            value={name}
            onBlur={validateTextField}
            className="mb-2"
            onChange={handleOnChange}
            name="name"
            type="text"
          />
          <label className="mb-1" htmlFor="email">
            Email
          </label>
          <input
            value={email}
            className="mb-2"
            onChange={handleOnChange}
            onBlur={validateEmail}
            name="email"
            type="email"
          />
          <label className="mb-1" htmlFor="message">
            Your message
          </label>
          <textarea
            value={message}
            className="mb-2"
            onChange={handleOnChange}
            onBlur={validateTextField}
            name="message"
            type="text"
          />
          <button className="button">Submit</button>
        </form>
        <p id="error-message" className={errorMessageHidden}>
          {errorMessage}
        </p>
        <p id="message-submitted" className={submitMessageHidden}>
          Thank you for getting in touch!
        </p>
      </div>
    </div>
  );
};

export default Contact;
