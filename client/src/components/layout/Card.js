import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = props => {
  const { user } = props;

  const backgroundStyle = {
    backgroundImage: `url(${user.photourl})`
  };

  return(
    <NavLink to={`/user/${user.id}`}>
      <div className="card">
        <div className="card__left" style={backgroundStyle}><div className="card__overlay"></div></div>
        <div className="card__right">
          <h3>{user.username}</h3>
          <div className="card__actions">
            <a href={`http://${ user.linkedIn }`}>
              <div className="card__button card__button--linkedin">
                <i className="fab fa-linkedin-in fa-3x"></i>
              </div>
            </a>
            <a href={`https://${ user.github }`}>
              <div className="card__button card__button--github">
                <i className="fab fa-github fa-3x"></i>
              </div>
            </a>
            <a href={`https://${ user.github }`}>
              <div className="card__button card__button--email">
              <i class="fas fa-envelope fa-3x"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
