import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = props => {
  const { user } = props;
  console.log('props: ', props)
  return(
    <NavLink to='/'>
      <div className="card">
        <div className="card__photo"><i className="fas fa-user fa-5x"></i></div>
        <h1 className="card__header">{user.username}</h1>
          <div className="card__actions">
            <div className="card__button"><i className="fab fa-linkedin-in fa-2x"></i></div>
            <div className="card__button"><i className="fab fa-github fa-2x"></i></div>
          </div>
      </div>
    </NavLink>
  );
};

export default Card;
