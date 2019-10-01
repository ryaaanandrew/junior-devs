import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(AuthContext);
  const { login } = context;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  }

  return(
    <div className="container">
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">password</label>
        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
        <button>submit</button>
      </form>
    </div>
  )
};

export default Login;