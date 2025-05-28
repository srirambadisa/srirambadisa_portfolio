import React from 'react';

const SocialLinks = ({ socials }) => {
  return (
    <ul className="social-list">
      {socials.map(social => (
        <li className="social-item" key={social.name}>
          <a href={social.href} className="social-link" target={social.href === '#' ? '_self' : '_blank'} rel="noopener noreferrer">
            <ion-icon class="socials-icons" name={social.name}></ion-icon>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;