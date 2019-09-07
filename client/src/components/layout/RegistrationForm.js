import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const RegistrationForm = props => {
  const context = useContext(AuthContext);
  const { form, dispatch } = context;

  return(
    <form className="form" onSubmit={e => props.handleSubmit(e)}>
      <h1>Create an account</h1> 
      <div className="form__section--row">
        <div className="form__section--column">
          <label htmlFor="name">Email</label>
          <input 
            type="email" 
            name="email"
            onChange={e => dispatch({ type: 'EMAIL', payload: e.target.value })}
          />
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username"
            onChange={e => dispatch({ type: 'USERNAME', payload: e.target.value })}
          />
        </div>
        <div className="form__section--column">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password"
            value={form.password}
            onChange={e => dispatch({ type: 'PASSWORD', payload: e.target.value })}
          />
          <label htmlFor="password2">Password</label>
          <input 
            type="password" 
            name="password2"
            value={form.password2}
            onChange={e => dispatch({ type: 'PASSWORD2', payload: e.target.value })}
          />
        </div>
      </div>
      <h1>Tell us about yourself</h1> 
      <div className="form__section--row">
        <div className="form__section--column">
          <label htmlFor="bio">Bio</label>
          <textarea 
            type="text" 
            name="bio"
            value={form.bio}
            onChange={e => dispatch({ type: 'BIO', payload: e.target.value })}
          />
        </div>
        <div className="form__section--column">
          <label htmlFor="github">Github</label>
          <input 
            type="text" 
            name="github"
            value={form.github}
            onChange={e => dispatch({ type: 'GITHUB', payload: e.target.value })}
          />
          <label htmlFor="linkedIn">LinkedIn</label>
          <input 
            type="text" 
            name="linkedIn"
            value={form.linkedIn}
            onChange={e => dispatch({ type: 'LINKEDIN', payload: e.target.value })}
          />
          <label htmlFor="skills">Skills</label>
          <input 
            type="text" 
            name="skills"
            value={form.skills}
            onChange={e => dispatch({ type: 'SKILLS', payload: e.target.value })}
            />
        </div>
      </div>
      <div className="form__actions">
        <button className="form__button"></button>
      </div>
    </form>
  );  
};

export default RegistrationForm;
