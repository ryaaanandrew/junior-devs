import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = props => {
  const { user } = props;

  const backgroundStyle = {
    backgroundImage: `url(${user.photourl})`
  };

  return(
    <div className="card">
      <div className="card__left" style={backgroundStyle}><div className="card__overlay"></div></div>
      <div className="card__right">
        <NavLink to={`/user/${user.id}`}>
          <h3>{user.username}</h3>
        </NavLink>
        <ul className="card__skills">
            { user.skills && user.skills.slice(0,3).map((skill, i) => {
              return <li key={i}>{skill}</li>
            }) }
        </ul>
        <div className="card__actions">
          <div className="card__button card__button--linkedin">
            <a href={`http://${ user.linkedIn }`}>
              <i className="fab fa-linkedin-in fa-3x"></i>
            </a>
          </div>
          <div className="card__button card__button--github">
            <a href={`https://${ user.github }`}>
              <i className="fab fa-github fa-3x"></i>
            </a>
          </div>
          <div className="card__button card__button--email">
            <a href={`https://${ user.github }`}>
              <i className="fas fa-envelope fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
