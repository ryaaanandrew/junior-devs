import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CANDIDATE } from '../../queries/queries';

const Details = props => {
  const { loading, data } = useQuery(GET_CANDIDATE, {
    variables: {
      userId: props.match.params.id
    }
  });

  let headerStyle = {
    background: `url(${'https://i.imgur.com/ac0cL2E.jpg'})`
  };
  
  if(loading) {
    return <h1>loading...</h1>
  }

  const { email, username, bio, skills } = data.getUser;
  console.log(skills)

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
            <h1>{ username }</h1>
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
            <h3>{ bio }</h3>
          </div>

          <div className="details__skills">
            <ul className="skills__list">
              { skills.map(skill => <li className="skills__item"><span>{ skill }</span></li>) }
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;
