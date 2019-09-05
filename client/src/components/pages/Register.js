import React from 'react';
import RegistrationForm from '../layout/RegistrationForm';

const Register = () => {
  return(
    <div className="container">
      <div className="register">
        <div className="register__card">
          <h3>card</h3>
        </div>
        <div className="register__controls">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
