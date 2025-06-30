import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1073712b-44b3-4b5a-99a7-1e1b00a597c8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("✅ Message sent successfully!");
      event.target.reset(); // Reset form after submission
    } else {
      alert("❌ Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">
        {/* Left side */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm available to collaborate on exciting tech projects. Reach out via email, call, or the form — and I’ll get back to you quickly!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>2200032777cseh@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>7013205834</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Warangal, Telangana</p>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            <span>Submit Now</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
