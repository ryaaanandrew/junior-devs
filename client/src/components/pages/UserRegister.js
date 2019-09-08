import React, { useContext } from 'react';
import RegistrationForm from '../layout/RegistrationForm';
import MiniNav from '../layout/MiniNav';
import { AuthContext } from '../../context/authContext';
import { GET_CANDIDATES } from '../../queries/queries';

const Register = props => {
  const context = useContext(AuthContext);
  const { email, username, linkedIn, github } = context.form;
  const { form, createUser } = context;

  const handleSubmit = e => {
    e.preventDefault();
    createUser({ 
      variables: {
        email: form.email,
        username: form.username,
        password: form.password,
        bio: form.bio,
        github: form.github,
        linkedIn: form.linkedIn,
        skills: ["JavaScript", "Ruby on Rails", "Python", "React-Native", "Swift", "Django"]
      }, refetchQueries: [{ query: GET_CANDIDATES}]
    });
    props.history.push('/candidates');
  };

  return(
    <div className="container">
      <div className="user-register">
        <div className="busCard">
          <div className="busCard__header">
            <h3>{ username }</h3>
            <h4>Web Developer Extordinaire</h4>
          </div>
          <div className="busCard__contact">
            <span><i className="fab fa-linkedin-in"></i> + { linkedIn }</span>
            <span><i className="fab fa-github"></i> + { github }</span>
            <span><i className="fas fa-envelope"></i> + { email }</span>
          </div>
        </div>
        <div className="user-register__controls">
          <MiniNav />
          <RegistrationForm handleSubmit={handleSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default Register;
