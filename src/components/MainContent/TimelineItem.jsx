import React from 'react';

const TimelineItem = ({ title, period, description }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{period}</span>
      <p className="timeline-text" dangerouslySetInnerHTML={{ __html: description }}></p>
    </li>
  );
};

export default TimelineItem;