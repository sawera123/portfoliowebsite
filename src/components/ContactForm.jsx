import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div>
    <div className="contact-container"  id="contact">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
   
    </div>
       <h2 className="time-is-price">Time is Price</h2>
       </div>
  );
};

export default ContactForm;
