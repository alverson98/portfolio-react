import { React, useState } from "react";

function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //used to show required field
  const [fullNameAlert, setFullNameAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [messageAlert, setMessageAlert] = useState("");

  //Gathering input values
  const handleInputChange = (e) => {
    //Used to determine name and value of the target input
    const { name, value } = e.target;

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
              value={fullName}
              name="fullName"
              type="text"
              placeholder="First Last"
              id="name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            {/* Need to add email validation */}
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              onChange={handleInputChange}
              value={email}
              name="email"
              type="text"
              placeholder="email@example.com"
              id="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message:
            </label>
            <textarea
              onChange={handleInputChange}
              value={message}
              name="message"
              type="text"
              placeholder="Type your message here."
              id="message"
              className="form-control"
            />
          </div>
          <br />
          <button
            onClick={handleFormSubmit}
            className="btn btn-dark"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    //name
    //email
    //message

    //INCLUDE
    //notification if invalid email - regex
    //notification of required fields when moving cursor out of input
  );
}

export default ContactForm;
