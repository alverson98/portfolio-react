import {React, useState} from "react";

function ContactForm() {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

//Gathering input values
const handleInputChange = (e) => {

//Used to determine name and value of the target input
const {name, value} = e.target;


switch(name) {
    case fullName:
        setFullName(value);
        break;
    case email:
        setEmail(value);
        break;
    case message:
        setMessage(value);
        break;
};

};

  return (
    <div id="contact-section">
        <h2>Contact Me</h2>
      <form>
        <div className="contact-form">
          <label htmlFor="fullName">Name:</label>
          <input
            onChange={handleInputChange}
            value={fullName}
            name="fullName"
            type="text"
            placeholder="First Last"
            id="name"
          />
          {/* Need to add email validation */}
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleInputChange}
            value={email}
            name="email"
            type="text"
            placeholder="email@example.com"
            id="email"
          />
          <label htmlFor="message">Message:</label>
          <input
            onChange={handleInputChange}
            value={message}
            name="message"
            type="text"
            placeholder="Type your message here."
            id="message"
          />
          <br />
          <button
            onClick={}
            className="btn btn-primary"
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
