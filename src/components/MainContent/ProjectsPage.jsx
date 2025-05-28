import React, { useState, useEffect, useMemo } from 'react';
import ProjectItem from './ProjectItem';

const filterCategories = ['All', 'Micro Services', 'RESTful APIs', 'Spring Boot MVC'];

const ProjectsPage = ({ projectsData, isActive }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(null); // To show details for one project
  const [isSelectOpen, setIsSelectOpen] = useState(false);


  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
    return projectsData.filter(p => p.category === activeFilter);
  }, [projectsData, activeFilter]);

  // Reset selected project when filter changes
  useEffect(() => {
    setSelectedProjectTitle(null);
  }, [activeFilter]);


  if (!isActive) return null;

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setIsSelectOpen(false); // Close select if open
  };
  
  const handleProjectTitleClick = (title) => {
    setSelectedProjectTitle(current => current === title ? null : title);
  }

  return (
    <article className="projects active" data-page="projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      <section className="projects">
        <ul className="filter-list">
          {filterCategories.map(category => (
            <li className="filter-item" key={category}>
              <button
                className={activeFilter === category ? 'active' : ''}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className={`filter-select ${isSelectOpen ? 'active' : ''}`} onClick={() => setIsSelectOpen(!isSelectOpen)} data-select>
            <div className="select-value" data-select-value>{activeFilter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          {isSelectOpen && (
            <ul className="select-list">
              {filterCategories.map(category => (
                <li className="select-item" key={category}>
                  <button onClick={() => handleFilterClick(category)} data-select-item>{category}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Project Title List for 'All' filter */}
        {activeFilter === 'All' && (
            <div className="project-title-list" style={{ display: 'block', marginBottom: '20px' }}>
            {projectsData.map((project, index) => (
                <div 
                    key={project.title} 
                    onClick={() => handleProjectTitleClick(project.title)}
                    style={{ cursor: 'pointer', padding: '5px', color: selectedProjectTitle === project.title ? '#FFDB70' : 'white', fontWeight: selectedProjectTitle === project.title ? 'bold' : 'normal' }}
                >
                {index + 1}. {project.title}
                </div>
            ))}
            </div>
        )}


        <div className="project-list">
          { (activeFilter === 'All' && selectedProjectTitle) ? (
            projectsData
                .filter(project => project.title === selectedProjectTitle)
                .map(project => (
                    <ProjectItem 
                        key={project.title} 
                        title={project.title} 
                        description={project.description} 
                        isVisible={true}
                    />
                ))
          ) : activeFilter !== 'All' ? (
             filteredProjects.map(project => (
                <ProjectItem 
                    key={project.title} 
                    title={project.title} 
                    description={project.description} 
                    isVisible={true} // Always visible if not 'All' filter
                />
            ))
          ) : null // If 'All' is selected but no specific project title is clicked, show nothing here.
        }
        </div>
      </section>
    </article>
  );
};

export default ProjectsPage;