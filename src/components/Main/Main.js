import React, { useState, useEffect } from 'react';
import './main.css';

import Pubsub from '../../utilities/pubsub';


function Main() {

  const [authenticated, setAuthenticated] = useState(false);
  const [selectedChallengeId, setSelectedChallengeId] = useState('');

  // @TODO use pubsub to subscribe to group changes and pass down as appropriate
  useEffect(() => {
    Pubsub.subscribe('login', this, handleSignin);
    Pubsub.subscribe('logout', this, handleSignout);

    return(() => {
      Pubsub.unsubscribe('login', this);
      Pubsub.unsubscribe('logout', this);
    });
  }, []);

  //useEffect(() => {
   // if (selectedGroupId) {
     // Data.changeSocketRoom(selectedGroupId);
   // }
 // }, [selectedGroupId]);

  const handleSignout = () => {
    setAuthenticated(false);
    setSelectedGroupId('');
  }

  const handleSignin = () => {
    setAuthenticated(true);
  }

  const handleChallenges = (newChallenge) => {
    console.log(newChallenge);
    setSelectedChapllengeId(newChallenge);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Challenge selectedChallengeId={selectedChallengeId} />
      </div>
    </div>
  );
}

export default Main;