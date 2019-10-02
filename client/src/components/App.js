import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks'

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

// import ApolloClient from 'apollo-boost';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import About from './pages/About';
import UserRegistration from './pages/UserRegistration';
import CandidateDetails from './pages/CandidateDetails';
import AuthContextProvider from '../context/authContext';
import RegisterSelection from './pages/RegisterSelection';
import EmployerRegistration from './pages/EmployerRegistration';
import Login from './pages/Login';

// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql'
// });

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
})

const authLink = setContext((_, { headers }) => {
  const store = JSON.parse(sessionStorage.getItem('interdevs-data'));
  const token = store.token;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => {
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthContextProvider>
          <NavBar />  
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/candidates' component={Candidates} />
            <Route path='/about' component={About} />
            <Route path='/register' exact component={RegisterSelection} />
            <Route path='/register/employer/' component={EmployerRegistration} />
            <Route path='/register/user' component={UserRegistration} />
            <Route path='/user/:id' component={CandidateDetails} />
            <Route path='/login' component={Login}/>
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
