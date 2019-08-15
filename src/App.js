import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login_SignUp from "./pages/LoginPage/LoginPage"
import HomePage from "./pages/HomePage/HomePage";
import PickChallenge from "./pages/ChallengePickPage/ChallengePickPage";
import Run from "./pages/Bike/Bike";
import './App.css';
import Bike from './pages/Bike/Bike';
import Abstain from './pages/Abstaining/Abstaining';
import Water from './pages/Water/Water';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login_SignUp} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/pickchallenge" component={PickChallenge} />
        <Route exact path="/pickrunchallenge" component={Run} />
        <Route exact path="/pickbikechallenge" component={Bike} />
        <Route exact path="/pickabstainchallenge" component={Abstain} />
        <Route exact path="/pickwaterchallenge" component={Water} />
      </div>
    </Router>
  );
}

export default App;
