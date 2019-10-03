import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  const context = useContext(AuthContext);
  const store = JSON.parse(sessionStorage.getItem('interdevs-data'));
  const token = store ? true : false;

  const handleLogout = () => {
    context.logout();
  };

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
        { token ? <li className="navBar__linkItem"><NavLink to='/messages'>Messages</NavLink></li> : null } 
        { !token ? <li className="navBar__linkItem"><NavLink to='/register'>Register</NavLink></li> : null }
        { !token ? <li><NavLink to='/login'>Login</NavLink></li> : null }
        { token ? <li className="navBar__linkItem" onClick={context.logout}>Logout</li> : null }

      </ul>
    </nav>
  );
};

export default NavBar;
