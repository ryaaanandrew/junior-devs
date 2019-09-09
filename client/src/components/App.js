import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import About from './pages/About';
import UserRegistration from './pages/UserRegistration';
import CandidateDetails from './pages/CandidateDetails';
import AuthContextProvider from '../context/authContext';
import RegisterSelection from './pages/RegisterSelection';
import EmployerRegistration from './pages/EmployerRegistration';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
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
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
