import React from 'react';
import Navbar from './Navbar';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

const MainContent = ({ activePage, setActivePage, servicesData, educationData, projectsData, experienceData, technicalSkillsData }) => {
  return (
    <div className="main-content">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <AboutPage servicesData={servicesData} isActive={activePage === 'about'} />
      <ResumePage 
        educationData={educationData} 
        experienceData={experienceData}
        technicalSkillsData={technicalSkillsData} 
        isActive={activePage === 'resume'} 
      />
      <ProjectsPage projectsData={projectsData} isActive={activePage === 'projects'} />
      <ContactPage isActive={activePage === 'contact'} />
    </div>
  );
};

export default MainContent;