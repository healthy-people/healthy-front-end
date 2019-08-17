import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login_SignUp from "./pages/LoginPage/LoginPage"
import HomePage from "./pages/HomePage/HomePage";
import Run from "./pages/Run/Run";
import './App.css';
import Bike from './pages/Bike/Bike';
import Abstain from './pages/Abstaining/Abstaining';
import Water from './pages/Water/Water';
import ChallengePage from './components/ChallengePage/ChallengePage';

function App() {
  return (
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
  );
}

export default App;
