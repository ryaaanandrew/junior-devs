import React from 'react';
import UserRegistrationForm from '../layout/UserRegistrationForm';
import MiniNav from '../layout/MiniNav';

const EmployerRegistration = props => {

  return(
    <div className="container">
      <div className="user-register">
        <div className="busCard">
          <div className="busCard__header">
            <h3></h3>
            <h4>Web Developer Extordinaire</h4>
          </div>
          <div className="busCard__contact">
            <span><i className="fab fa-linkedin-in"></i> </span>
            <span><i className="fab fa-github"></i></span>
            <span><i className="fas fa-envelope"></i> </span>
          </div>
        </div>
        <div className="user-register__controls">
          <MiniNav />
          <UserRegistrationForm handleSubmit={null}/>
        </div>
      </div>
    </div>
  );
};

export default EmployerRegistration;
