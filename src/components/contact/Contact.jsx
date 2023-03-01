import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>samuel.ingvarsson@hotmail.com</h5>
            <a
              href="mailto:samuel.ingvarsson@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send me a email
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
export default Contact;
