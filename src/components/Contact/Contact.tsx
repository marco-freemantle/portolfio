import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
