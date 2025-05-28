import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

// Data can be moved to separate JSON files and imported
const personalInfo = {
  name: "SRIRAM BADISA",
  title: "JAVA FULL STACK DEVELOPER",
  avatar: "/assets/images/my-avatar.png", // Path relative to public folder
  email: "srirambadisa1938@gmail.com",
  phone: "+91 9553736290",
  birthday: "September 17, 2002",
  location: "Ameerpet, hyderabad -india",
  socials: [
    { name: "logo-facebook", href: "https://www.facebook.com/srirambadisa1938" },
    { name: "logo-twitter", href: "#" }, // Add your Twitter link
    { name: "logo-instagram", href: "https://www.instagram.com/__.mr.__.unique.___/" },
    { name: "logo-linkedin", href: "https://www.linkedin.com/in/badisa-sriram-50811a361/" },
    { name: "logo-github", href: "https://github.com/srirambadisa" },
  ]
};

const servicesData = [
  { icon: "/assets/images/ReactJs.png", title: "React JS", text: "The most modern and high-quality design made at a professional level." },
  { icon: "/assets/images/RestApi.png", title: "RESTful APIs", text: "High-quality development of sites at the professional level." },
  { icon: "/assets/images/MicroServices.png", title: "Micro Services", text: "Professional development of applications for iOS and Android." },
  { icon: "/assets/images/SpringMVC.png", title: "Spring MVC", text: "I can make pc building in budget and most efficient working performs." }
];

const educationData = [
  { title: "KRISHNA UNIVERSITY College Of Engineering", period: "2020-2024", description: "Completed my <strong>B.Tech</strong> degree with <strong>74 %</strong>" },
  { title: "SRI SRINIVASA Jr college", period: "2018-2020", description: "I had completed my <strong>intermediate</strong> with <strong>CGPA-9.3</strong>" },
  { title: "M.J.P.A.P.B.C.W.RESIDENTIAL SCHOOL", period: "2017-2018", description: "I had my <strong>SSC</strong> With <strong> CGPA-9.0</strong>" }
];

const technicalSkillsList = [
  "Good understanding of Java 8 features like lambda expressions, streams, and functional interfaces to write cleaner and more efficient code.",
  "Familiar with Object-Oriented Programming (OOP) concepts such as inheritance, encapsulation, polymorphism, and abstraction.",
  "Basic knowledge of Exception Handling using try-catch blocks, custom exceptions, and exception delegation.",
  "Understanding of Java Collections Framework to store and manipulate data using List, Set, and Map interfaces.",
  "Knowledge of Spring IoC container for managing beans, setting dependencies, and controlling their lifecycle.",
  "Able to create RESTful APIs using Spring Boot, working with HTTP methods and JSON data.",
  "Experience in using Spring MVC to build web applications based on the Model-View-Controller architecture.",
  "Worked with Spring Data JPA for CRUD operations and using ORM concepts with embedded and external databases.",
  "Basic hands-on practice with microservices architecture, including service registry, discovery, and inter-service communication.",
  "Familiar with Resilience4j for implementing circuit breakers and handling failures gracefully in microservices.",
  "Able to design responsive web pages using HTML, CSS, and Bootstrap for a consistent user experience across devices.",
  "Hands-on experience with ReactJS for building user interfaces using components, hooks, and managing state.",
  "Familiar with React Router for building Single Page Applications (SPAs) with client-side routing.",
  "Used Axios for making HTTP requests and handling API responses in React applications.",
  "Worked with React Redux for efficient application-wide state management using actions, reducers, and store.",
  "Knowledge of Git for version control and collaborative project management."
];

// Experience data (if you uncomment it)
// const experienceData = [
//   { title: "System Admin", period: "May-2023 - Jun-2024", description: "I had worked as a <strong>System Admin</strong> in R k college of Engineering-vijayawada" }
// ];

const projectsData = [
  { category: "Micro Services", title: "Currency Conversion Microservices Project", description: "Designed and developed a scalable microservices architecture using Spring Boot, facilitating inter-service communication via RESTful APIs and Spring Cloud OpenFeign. The system leveraged Netflix Eureka for service discovery, Spring Cloud Gateway for routing and cross-cutting concerns, and Spring Cloud Config Server for centralized configuration. Resilience4j patterns enhanced system reliability, while JWT-based authentication and Spring Security ensured robust API protection." },
  { category: "Spring Boot MVC", title: "Spring Boot MVC – Product Management Project", description: "Developed a Spring Boot MVC web application for comprehensive product management, enabling users to add, view, update, and delete product details. The application featured a well-organized layered architecture (Controller, Service, Repository), utilized Spring Data JPA for database operations, and employed distinct Product Models for forms and Product Entities for persistence. User-friendly interfaces were crafted with Thymeleaf and custom CSS, incorporating form validation, while H2 in-memory database, Spring Boot Dev Tools, and Lombok accelerated development and testing." },
  { category: "RESTful APIs", title: "Spring Boot RESTful APIs – Employee CRUD Operations", description: "Developed a RESTful API using Spring Boot to perform full CRUD operations on employee records, strictly adhering to REST principles with correct HTTP methods. The system integrated MySQL for data storage and utilized Spring Data JPA for efficient database access through entity classes and repositories, all structured within a clean Controller-Service-Repository architecture. APIs were thoroughly tested using Postman and interactively documented with Swagger." },
  { category: "RESTful APIs", title: "Online Grocery Shopping Web Application using ReactJS", description: "This online grocery shopping website, built with React and Redux, enables users to browse categorized products (Veg, Non-Veg, etc.), manage their cart, and place orders. It incorporates a login/signup system leveraging Redux for user session persistence, and uses Redux with local storage to retain cart and order details across sessions. The platform boasts a mobile-friendly, stylish UI featuring a side menu, animated cart icon, QR payment, and smooth navigation for an enhanced user experience." }
];


function App() {
  const [activePage, setActivePage] = useState('about'); // Default page
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Effect to handle initial page load active state (if needed for CSS transitions)
  // For simplicity, we directly set activePage state.
  // The original JS for page navigation also handles scrolling to top,
  // which can be done with window.scrollTo(0,0) in a useEffect when activePage changes.

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <main>
      <Sidebar
        info={personalInfo}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <MainContent
        activePage={activePage}
        setActivePage={setActivePage}
        servicesData={servicesData}
        educationData={educationData}
        projectsData={projectsData}
        technicalSkillsData={technicalSkillsList}
        // experienceData={experienceData}
      />
    </main>
  );
}

export default App;