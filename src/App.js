import { BrowserRouter as Router, Route } from "react-router-dom";
import Run from "./pages/Run/Run";
import './App.css';
import Bike from './pages/Bike/Bike';
import Abstain from './pages/Abstaining/Abstaining';
import Water from './pages/Water/Water';

import React, { useEffect }  from 'react';

// @TODO is pubsub necessary to show the login modal?
import Pubsub from './utilities/pubsub';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

import ChallengePage from './components/ChallengePage/ChallengePage';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;

    {/*
    <Router>
      <div>
        <Route exact path="/" component={Login_SignUp} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/challengepage" component={ChallengePage} />
        <Route exact path="/pickrunchallenge" component={Run} />
        <Route exact path="/pickbikechallenge" component={Bike} />
        <Route exact path="/pickabstainchallenge" component={Abstain} />
        <Route exact path="/pickwaterchallenge" component={Water} />
      </div>
    </Router>
  */}