import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <nav className="navBar">
      <div className="navBar__logo">
        <NavLink to='/'><h1>Interdev</h1></NavLink>   
        <span>Adopt a dev today!</span>
      </div>
      <ul className="navBar__links">
        <li className="navBar__linkItem"><NavLink to='/'>Home</NavLink></li>
        <li className="navBar__linkItem"><NavLink to='/candidates'>Candidates</NavLink></li>
        <li className="navBar__linkItem"><NavLink to='/about'>About</NavLink></li>
        <li className="navBar__linkItem"><NavLink to='/register'>Register</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
