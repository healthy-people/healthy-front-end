import React, { useState, useEffect } from '../../../node_modules/react';
import Pubsub from '../../utilities/pubsub';
import "./Fab.css"
import M from "materialize-css";

function FloatingActionButton() {

    const [challengeType, setChallengeType] = useState('');

    const handleChallengeType = (challengeType) => {
        setChallengeType(challengeType);
        Pubsub.publish('challengeType', challengeType);
    }

    function renderFAB() {
        if (challengeType == ('')){
            return (
            <div className="fixed-action-btn">
                <div className="btn-floating btn-large red">
                    <i className="fab large material-icons" tabIndex="1">add</i>
                </div>
                <ul>
                    <li><button className="btn-floating green" type="submit" value="run" onClick={() => handleChallengeType('run')}><i className="material-icons">directions_run</i></button></li>
                    <li><button className="btn-floating yellow darken-1" value="bike" onClick={() => handleChallengeType('bike')}><i className="material-icons">directions_bike</i></button></li>
                    <li><button className="btn-floating blue" value="water" onClick={() => handleChallengeType('water')}><i className="material-icons">local_drink</i></button></li>
                    <li><button className="btn-floating red" value="abstain" onClick={() => handleChallengeType('abstain')}><i className="material-icons">smoke_free</i></button></li>
                </ul>
            </div>
            )
        }
    }

    return (
        <div>
            {renderFAB()}
        </div>
    );
}

export default FloatingActionButton;
