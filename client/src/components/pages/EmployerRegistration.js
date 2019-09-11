import React from 'react';
import UserRegistrationForm from '../layout/UserRegistrationForm';
import MiniNav from '../layout/MiniNav';

const EmployerRegistration = props => {

  return(
    <div className="container">
      <div className="user-register__controls">
        <MiniNav />
        <form className="form">
          <h1>Create an account</h1>
          <div className="form__section--column">
            <label htmlFor="email">email</label>
            <input type="text" name="email"/>
            <label htmlFor="email">password</label>
            <input type="text" name="email"/>
          </div>
          <div className="form__actions">
            <button className="form__button"><i className="fas fa-angle-double-right fa-3x"></i></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegistration;
