import React from 'react';

const SidebarContacts = ({ email, phone, birthday, location }) => {
  return (
    <ul className="contacts-list">
      <li className="contact-item">
        <div className="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
        </div>
        <div className="contact-info">
          <p className="contact-title">Email</p>
          <a href={`mailto:${email}`} className="contact-link">{email}</a>
        </div>
      </li>
      <li className="contact-item">
        <div className="icon-box">
          <ion-icon name="phone-portrait-outline"></ion-icon>
        </div>
        <div className="contact-info">
          <p className="contact-title">Phone</p>
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-link">{phone}</a>
        </div>
      </li>
      <li className="contact-item">
        <div className="icon-box">
          <ion-icon name="calendar-outline"></ion-icon>
        </div>
        <div className="contact-info">
          <p className="contact-title">Birthday</p>
          <time dateTime={new Date(birthday).toISOString().split('T')[0]}>{birthday}</time>
        </div>
      </li>
      <li className="contact-item">
        <div className="icon-box">
          <ion-icon name="location-outline"></ion-icon>
        </div>
        <div className="contact-info">
          <p className="contact-title">Location</p>
          <address>{location}</address>
        </div>
      </li>
    </ul>
  );
};

export default SidebarContacts;