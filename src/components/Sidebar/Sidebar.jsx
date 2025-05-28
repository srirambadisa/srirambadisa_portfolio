import React from 'react';
import SidebarInfo from './SidebarInfo';
import SidebarContacts from './SidebarContacts';
import SocialLinks from './SocialLinks';

const Sidebar = ({ info, isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`} data-sidebar>
      <SidebarInfo avatar={info.avatar} name={info.name} title={info.title} />
      <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
        <span>{isOpen ? 'Hide Contacts' : 'Show Contacts'}</span>
        <ion-icon name={isOpen ? 'chevron-up' : 'chevron-down'}></ion-icon>
      </button>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <SidebarContacts
          email={info.email}
          phone={info.phone}
          birthday={info.birthday}
          location={info.location}
        />
        <div className="separator"></div>
        <SocialLinks socials={info.socials} />
      </div>
    </aside>
  );
};

export default Sidebar;