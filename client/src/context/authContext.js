import React, { createContext, useReducer } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { formReducer } from '../context/formReducer';
import { CREATE_USER, LOGIN_USER } from '../queries/authQueries';

export const AuthContext = createContext();

const AuthContextProvider = props => {
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
        const data = await loginUser({
          variables: {
            email,
            password
          }
        });
        console.log(data);
    } catch(err) {
      console.log(err)
    }
  }

  return(
    <AuthContext.Provider value={{ form, dispatch, createUser, login }}>
      { props.children }
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
