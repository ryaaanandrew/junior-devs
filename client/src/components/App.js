import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import About from './pages/About';
import Register from './pages/Register';
import CandidateDetails from './pages/CandidateDetails';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
});

const App = () => {
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
          <NavBar />  
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Candidates' component={Candidates} />
            <Route path='/About' component={About} />
            <Route path='/Register' component={Register} />
            <Route path='/user/:id' component={CandidateDetails} />
          </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
