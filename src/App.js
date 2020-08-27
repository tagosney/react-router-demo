import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar'

import "bulma/css/bulma.min.css";
import Home from './Home'
import About from './About'
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
