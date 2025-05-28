import React from 'react';

const navItems = ['About', 'Resume', 'Projects', 'Contact']; // 'Blog' was in the original code but not in HTML

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map(item => (
          <li className="navbar-item" key={item}>
            <button
              className={`navbar-link ${activePage === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => setActivePage(item.toLowerCase())}
              data-nav-link
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;