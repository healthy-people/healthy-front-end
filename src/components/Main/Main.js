import React, { useState, useEffect } from 'react';
//import './main.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Pubsub from '../../utilities/pubsub';
import LoginSignUpModal from '../LoginSignUpModal/LoginSignUpModal';
import Challenge from '../Challenge/Challenge';
import Auth from '../../utilities/authorizer';
import HomePage from "../../pages/HomePage/HomePage";

function Main() {

  const [authenticated, setAuthenticated] = useState(false);
  const [selectedChallengeId, setSelectedChallengeId] = useState('');

  useEffect(() => {
    Pubsub.subscribe('login', this, handleSignin);
    Pubsub.subscribe('logout', this, handleSignout);

    return (() => {
      Pubsub.unsubscribe('login', this);
      Pubsub.unsubscribe('logout', this);
    });
  }, []);

  const handleSignout = () => {
    setAuthenticated(false);
    //setSelectedGroupId('');
  }

  const handleSignin = () => {
    setAuthenticated(true);
    console.log('authenticated');
  }

  const handleChallenges = (newChallenge) => {
    console.log(newChallenge);
    //setSelectedChapllengeId(newChallenge);
  }

  return (
    <Router>
      <>
        <Route exact path="/homepage" component={HomePage} />
        <div className='container-fluid'>
          <LoginSignUpModal />
          <div className='row'>
            <Challenge selectedChallengeId={selectedChallengeId} />
          </div>
        </div>
      </>
    </Router>
  );
}

export default Main;