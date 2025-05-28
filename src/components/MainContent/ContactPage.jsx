import React, { useState } from 'react';

const ContactPage = ({ isActive }) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Basic validation check (can be improved)
    const form = e.target.form;
    if (form) {
        setIsFormValid(form.checkValidity());
    }
  };

  if (!isActive) return null;

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form 
            action="https://formsubmit.io/send/6a1f17ab-d964-4df8-bfa1-e51aea404556" // Replace with your formsubmit.io ID or other endpoint
            method="POST" 
            className="form"
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="form-btn" type="submit" disabled={!isFormValid}>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default ContactPage;