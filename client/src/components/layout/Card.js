import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = props => {
  const { user } = props;

  return(
    <div className="card">
      <NavLink to={`/user/${user.id}`}>
        <div className="card__photo"><i className="fas fa-user fa-5x"></i></div>
        <h1 className="card__header">{user.username}</h1>
      </NavLink>
        <div className="card__actions">
          <a href={`http://${ user.linkedIn }`}>
            <div className="card__button">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </div>
          </a>
          <a href={`https://${ user.github }`}>
            <div className="card__button">
              <i className="fab fa-github fa-2x"></i>
            </div>
          </a>
        </div>
    </div>
  );
};

export default Card;
