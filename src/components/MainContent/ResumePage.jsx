import React from 'react';
import TimelineItem from './TimelineItem'; // Assuming this component can render with just a description

const ResumePage = ({ educationData, experienceData, technicalSkillsData, isActive }) => {
  if (!isActive) return null;

  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education Section */}
      {educationData && educationData.length > 0 && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Education</h3>
          </div>
          <ol className="timeline-list">
            {educationData.map(edu => (
              <TimelineItem key={edu.title || edu.id} {...edu} /> // Ensure key is unique, fallback if title isn't always there
            ))}
          </ol>
        </section>
      )}

      {/* Experience Section */}
      {experienceData && experienceData.length > 0 && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="briefcase-outline"></ion-icon>
            </div>
            <h3 className="h3">Experience</h3>
          </div>
          <ol className="timeline-list">
            {experienceData.map(exp => (
              <TimelineItem key={exp.title || exp.id} {...exp} /> // Ensure key is unique
            ))}
          </ol>
        </section>
      )}

      {/* Technical Skills Section */}
      {technicalSkillsData && technicalSkillsData.length > 0 && (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              {/* You can choose an icon for skills, e.g., code-slash, ribbon, construct */}
              <ion-icon name="code-slash-outline"></ion-icon>
            </div>
            <h3 className="h3">Technical Skills</h3>
          </div>
          <ol className="timeline-list">
            {technicalSkillsData.map((skill, index) => (
              // Assuming TimelineItem can render an item with only a description.
              // The skill string itself will be the description.
              // We provide a unique key for React's rendering.
              <TimelineItem key={`skill-${index}`} description={skill} />
            ))}
          </ol>
        </section>
      )}
    </article>
  );
};

export default ResumePage;