import React, { useState, createContext, useReducer } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { formReducer } from '../context/formReducer';
import { CREATE_USER, LOGIN_USER } from '../queries/authQueries';

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [userData, setUserData] = useState({
    token: '',
    userId: ''
  });
  const [loginErr, setLoginErr] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const INITIAL_STATE = {
    email: "email@email.com",
    username: "Your Name",
    password: "",
    password2: "",
    bio: "",
    github: "",
    linkedIn: "",
    skills: "",
  };
  const [form, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [createUser] = useMutation(CREATE_USER);
  const [loginUser] = useMutation(LOGIN_USER);

  const login = async (email, password) => {
    try {
        const user = await loginUser({
          variables: {
            email,
            password
          }
        });
        const { userId, token, expiresIn } = user.data.loginUser;

        setUserData({
          token: token,
          userId: userId,
          expiresIn: expiresIn
        });

        sessionStorage.setItem('interdevs-data', JSON.stringify({ 
          "token": token, 
          "userId": userId, 
          "expiresIn": expiresIn 
        }));

        setLoggedIn(true);
    } catch(err) {
      console.log(err);
    };
  };

  const logout = () => {
    console.log('logging out')
    sessionStorage.removeItem('interdevs-data');
    setLoggedIn(false);
  };

  return(
    <AuthContext.Provider value={{ form, dispatch, createUser, login, loggedIn, logout }}>
      { props.children }
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
