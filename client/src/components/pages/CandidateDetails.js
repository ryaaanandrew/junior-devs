import React from 'react';

const Details = props => {
  var headerStyle = {
    background: `url(${'https://i.imgur.com/ac0cL2E.jpg'})`
  };

  return(
    <div className="container">
      <div className="details">
        <div className="mini-nav">
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
            <div className="header-actions">
              <a href="/null" className="header-actions__link">email</a>
              <a href="/null" className="header-actions__link">github</a>
              <a href="/null" className="header-actions__link">linkedin</a>
            </div>
          </div>
        </div>

        <div className="details__main">
          <div className="details__bio">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquam fugit itaque, excepturi assumenda molestias praesentium ea pariatur quos est dolor quisquam ut facere reiciendis omnis accusantium voluptas iure harum?</h3>
          </div>

          <div className="details__skills">
            <ul className="skills__list">
              <li className="skills__item">javascript</li>
              <li className="skills__item">html</li>
              <li className="skills__item">css</li>
              <li className="skills__item">python</li>
              <li className="skills__item">react</li>
              <li className="skills__item">ruby on rails</li>
              <li className="skills__item">nodejs</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;
