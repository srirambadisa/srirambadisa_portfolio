import React from 'react';
import ServiceItem from './ServiceItem';

const AboutPage = ({ servicesData, isActive }) => {
  if (!isActive) return null;

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I'm Badisa Sriram, Full Stack Developer. skilled in Java, Spring Boot, and web technologies.
          Passionate about building web applications and solving complex technical problems with clean and scalable
          solutions.
        </p>
        <p>
          Passionate about building web applications and solving complex technical problems with clean and scalable
          solutions.
        </p>
      </section>
      <section className="service">
        <h3 className="h3 service-title">What I'm done</h3>
        <ul className="service-list">
          {servicesData.map(service => (
            <ServiceItem key={service.title} {...service} />
          ))}
        </ul>
      </section>
      {/* Testimonials Modal - can be implemented as a separate component if needed */}
      {/* <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div className="modal-img-wrapper">
             modal image here
          </div>
          <div className="modal-content">
             modal content here
          </div>
        </section>
      </div> */}
    </article>
  );
};

export default AboutPage;