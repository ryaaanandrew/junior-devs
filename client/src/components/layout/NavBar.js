import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav className="navBar">
      <h1 className="navBar__logo">Interdevs</h1>
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
