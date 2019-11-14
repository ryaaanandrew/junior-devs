import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_CANDIDATE } from '../../queries/queries';
import MiniNav from '../layout/MiniNav';

const Details = props => {
  const { loading, data } = useQuery(GET_CANDIDATE, {
    variables: {
      userId: props.match.params.id
    }
  });

  let headerStyle = {
    background: `url(${'https://i.imgur.com/hXU3x28.png'})`
  };
  
  if(loading) return <h1>loading...</h1>;

  const { email, username, bio, skills, id } = data.getUser;
  return(
    <div className="container">
      <div className="details">
        <MiniNav />
        <div className="details__header" style={headerStyle}>
          <div className="details__header-content">
            <h1>{ username }</h1>
            <h3>Web Developer</h3>

            <div className="header-actions">
              <Link to='/messages/send' className="header-actions__link">Message</Link>
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
              { skills.map((skill, i )=> <li className="skills__item" key={i}><span><span>+</span>  { skill }</span></li>) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
