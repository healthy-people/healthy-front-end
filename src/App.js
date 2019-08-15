import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login_SignUp from "./pages/LoginPage/LoginPage"
import HomePage from "./pages/HomePage/HomePage";
import PickChallenge from "./pages/ChallengePickPage/ChallengePickPage"
import './App.css';

import Pubsub from './utilities/pubsub';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Navbar/Main';

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