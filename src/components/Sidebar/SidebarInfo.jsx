import React from 'react';

const SidebarInfo = ({ avatar, name, title }) => {
  return (
    <div className="sidebar-info">
      <figure className="avatar-box">
        <img src={avatar} alt={name} width="80" />
      </figure>
      <div className="info-content">
        <h1 className="name" title={name}>{name}</h1>
        <p className="title">{title}</p>
      </div>
    </div>
  );
};

export default SidebarInfo;