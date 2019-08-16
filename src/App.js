import React, { useEffect }  from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import HomePage from "./pages/HomePage/HomePage";
//import PickChallenge from "./pages/ChallengePickPage/ChallengePickPage"
import './App.css';

// @TODO is pubsub necessary to show the login modal?
import Pubsub from './utilities/pubsub';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
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
        <Route exact path="/pickchallenge" component={PickChallenge} />
      </div>
    </Router>
  */}