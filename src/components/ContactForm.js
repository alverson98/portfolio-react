import React from "react";

function ContactForm() {
  return (
    <div id="contact-section">
        <h2>Contact Me</h2>
      <form>
        <div className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            onChange={}
            value={}
            name="name"
            type="text"
            placeholder="First Last"
            id="name"
          />
          {/* Need to add email validation */}
          <label htmlFor="email">Email:</label>
          <input
            onChange={}
            value={}
            name="email"
            type="text"
            placeholder="email@example.com"
            id="email"
          />
          <label htmlFor="message">Message:</label>
          <input
            onChange={}
            value={}
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
