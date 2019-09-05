import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav className="navBar">
      <div className="navBar__logo">
        <h1>Interdev</h1>
        <span>Adopt a dev today!</span>
      </div>
      <ul className="navBar__links">
        <li className="navBar__linkItem"><NavLink to='/'>Home</NavLink></li>
        <li className="navBar__linkItem"><NavLink to='/Candidates'>Candidates</NavLink></li>
        <li className="navBar__linkItem"><NavLink to='/About'>About</NavLink></li>
        <li className="navBar__linkItem"><NavLink to='/Register'>Register</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
