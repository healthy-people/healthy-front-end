import React, { useState, useEffect } from 'react';
//import './main.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Run from "../../pages/Run/Run";
import Pubsub from '../../utilities/pubsub';
import LoginSignUpModal from '../LoginSignUpModal/LoginSignUpModal';
import Challenge from '../Challenge/Challenge';
import Auth from '../../utilities/authorizer';
import HomePage from "../../pages/HomePage/HomePage";
import Bike from '../../pages/Bike/Bike';
import Abstain from '../../pages/Abstaining/Abstaining';
import Water from '../../pages/Water/Water';
import ChallengePage from '../ChallengePage/ChallengePage';

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
        <Route exact path="/challengepage" component={ChallengePage} />
        <Route exact path="/pickrunchallenge" component={Run} />
        <Route exact path="/pickbikechallenge" component={Bike} />
        <Route exact path="/pickabstainchallenge" component={Abstain} />
        <Route exact path="/pickwaterchallenge" component={Water} />
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