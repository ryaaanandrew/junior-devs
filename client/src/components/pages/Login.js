import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const context = useContext(AuthContext);
  const { login } = context;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.length >= 5 && password.length >=5 ) {
      login(email, password);
      setLoginErr('');
      // props.history.push('/');
    } else {
      setLoginErr('Please confirm your login details');
    };    
  };

  return(
    <div className="container">
      <div className="login">
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
          { loginErr ? <div className="err">{ loginErr }</div> : null }
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
          <button className='login__btn'><i className="fas fa-angle-double-right fa-3x"></i></button>
        </form>
      </div>
    </div>
  )
};

export default Login;