import { React, useState } from "react";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //used to show required field
  const [fullNameAlert, setFullNameAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [messageAlert, setMessageAlert] = useState("");

  const alertOnClick = (e) => {
    e.preventDefault();

    let emailRegex = /^([a-z0-9_.-]+)@([\da-z\.-]+)\.([a-z.]{2,6})$/;
    //boolean - true once matches regex
    let isValidEmail = emailRegex.test(email);

    //setting a message if the email is not valid
    !isValidEmail
      ? setEmailAlert("Please enter a valid email address.")
      : setEmailAlert("");

    //name is required
    fullName === ""
      ? setFullNameAlert("Full Name is required.")
      : setFullNameAlert("");

    //message is required
    message === ""
      ? setMessageAlert("A message is required.")
      : setMessageAlert("");
  };

  //Gathering input values
  const handleInputChange = (e) => {
    let emailRegex = /^([a-z0-9_.-]+)@([\da-z\.-]+)\.([a-z.]{2,6})$/;
    //boolean - true once matches regex
    let isValidEmail = emailRegex.test(email);

    //setting a message if the email is not valid
    !isValidEmail
      ? setEmailAlert("Please enter a valid email address.")
      : setEmailAlert("");

    //name is required
    fullName === ""
      ? setFullNameAlert("Full Name is required.")
      : setFullNameAlert("");

    //message is required
    message === ""
      ? setMessageAlert("A message is required.")
      : setMessageAlert("");

    //Used to determine name and value of the target input
    const { name, value } = e.target;

    // eslint-disable-next-line default-case
    //determining the input the user is typing in
    name === "fullName"
      ? setFullName(value)
      : name === "email"
      ? setEmail(value)
      : setMessage(value);

    return;
  };

  //Sending the message
  const handleFormSubmit = (e) => {
    //Preventing page from refreshing on submit
    e.preventDefault();

    //Clearing inputs
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact-section">
      <h2>Contact Me</h2>
      <form>
        <div className="contact-form w-75 mb-15">
          <div className="mb-3">
            <label className="form-label" htmlFor="fullName">
              Name:
            </label>
            <input
              onChange={handleInputChange}
              onClick={alertOnClick}
              value={fullName}
              name="fullName"
              type="text"
              placeholder="First Last"
              id="name"
              className="form-control"
            />
            <span className="form-alert">{fullNameAlert}</span>
          </div>
          <div className="mb-3">
            {/* Need to add email validation */}
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              onChange={handleInputChange}
              onClick={alertOnClick}
              value={email}
              name="email"
              type="text"
              placeholder="email@example.com"
              id="email"
              className="form-control"
            />
            <span className="form-alert">{emailAlert}</span>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message:
            </label>
            <textarea
              onChange={handleInputChange}
              onClick={alertOnClick}
              value={message}
              name="message"
              type="text"
              placeholder="Type your message here."
              id="message"
              className="form-control"
            />
            <span className="form-alert">{messageAlert}</span>
          </div>
          <br />
          <button
            onClick={handleFormSubmit}
            className="btn btn-light"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
