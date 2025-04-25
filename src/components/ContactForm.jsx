import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div>
      <div className="contact-container" id="contact">
        <h2 className="contact-title">Contact Us</h2>
        <form 
          className="contact-form" 
          action="https://formsubmit.co/saweragulshan2@gmail.com" 
          method="POST"
        >
          <div className="input-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

          {/* Optional: Prevent spam with a hidden honeypot */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Optional: Redirect to thank-you page */}
          {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <h2 className="time-is-price">Time is Price</h2>
    </div>
  );
};

export default ContactForm;
