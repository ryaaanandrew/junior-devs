import React from 'react';

const Details = props => {
  var headerStyle = {
    background: `url(${'https://i.imgur.com/ac0cL2E.jpg'})`
  };

  return(
    <div className="container">
      <div className="details">
        <div className="mini-nav">
          <span className="mini-nav-buttons">
          
          </span>
          <ul className="mini-nav__links">
            <li className="mini-nav__item mini-nav__item--red"></li>
            <li className="mini-nav__item mini-nav__item--grey"></li>
            <li className="mini-nav__item mini-nav__item--green"></li>
          </ul>
        </div>
        <div className="details__header" style={headerStyle}>
          <div className="details__header-content">
            <h1>Ryan Andrew</h1>
            <h3>Web Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
