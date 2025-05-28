import React from 'react';

const ProjectItem = ({ title, description, isVisible }) => {
  if (!isVisible) return null;
  return (
    <div className="project-item" style={{ display: 'block' }}> {/* Original script sets display block */}
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectItem;