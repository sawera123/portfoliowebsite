import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',     // From EmailJS dashboard
      'your_template_id',    // From EmailJS dashboard
      form.current,
      'your_public_key'      // From EmailJS account (not secret key)
    )
    .then((result) => {
        alert('Message sent successfully!');
        console.log(result.text);
    }, (error) => {
        alert('Failed to send message. Try again.');
        console.log(error.text);
    });

    e.target.reset(); // Clear the form
  };

  return (
    <div>
      <div className="contact-container" id="contact">
        <h2 className="contact-title">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
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
