import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import About from './pages/About';
import Register from './pages/Register';

const App = () => {
  return(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Candidates' component={Candidates} />
        <Route path='/About' component={About} />
        <Route path='/Register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
