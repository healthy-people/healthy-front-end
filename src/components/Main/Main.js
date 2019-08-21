import React, { useState, useEffect } from 'react';
//import './main.css';
//import { BrowserRouter as Router, Route } from "react-router-dom";
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
import ChallengeContainer from '../ChallengeContainer/ChallengeContainer';
import FAB from '../FloatingButton/Fab';

function Main() {

  const [authenticated, setAuthenticated] = useState(false);
  const [challengeType, setChallengeType] = useState('');

  useEffect(() => {
    Pubsub.subscribe('login', this, handleSignin);
    Pubsub.subscribe('logout', this, handleSignout);
    Pubsub.subscribe('challengeType', this, handleChallengeType);
    return (() => {
      Pubsub.unsubscribe('login', this);
      Pubsub.unsubscribe('logout', this);
      Pubsub.unsubscribe('challengeType', this);
    });
  }, []);

  const handleSignout = () => {
    setAuthenticated(false);
  }

  const handleSignin = () => {
    setAuthenticated(true);
    console.log('authenticated');
  }

  const handleChallengeType = (challenge) => {
    setChallengeType(challenge);
    console.log(challenge);
  }

  function pageDirector() {
    if(authenticated){
      if(challengeType == 'run'){
        return <Run />;
      } else if (challengeType == 'bike'){
        return <Bike />;
      } else if (challengeType == 'water'){
        return <Water />;
      } else if (challengeType == 'abstain'){
        return <Abstain />;
      } else if (challengeType == ''){
        return <ChallengeContainer />;
      }
    }
  }

  return (
      <div>
        <LoginSignUpModal />
        <FAB />
        {pageDirector()}
      </div>
  );
}

export default Main;