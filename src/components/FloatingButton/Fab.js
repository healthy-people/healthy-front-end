import React, { useState, useEffect } from '../../../node_modules/react';
import Pubsub from '../../utilities/pubsub';
import "./Fab.css"
import M from "materialize-css";
// import PickChallenge from "../../pages/ChallengePickPage/ChallengePickPage"

function FloatingActionButton(){

    const [challengeType, setChallengeType] = useState('');

    useEffect(() => {
        Pubsub.subscribe('challengeType', this, handleChallengeType);
    }, []);

    const runSubmit = (event) => {
        event.preventDefault();
        console.log('run');
    }

    const handleChallengeType = () => {
    }

        return (
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="fab large material-icons" tabIndex="1">add</i>
                </a>
                <ul>
                    <li><button className="btn-floating green" type="submit" value="run" onClick={runSubmit}><i className="material-icons">directions_run</i></button></li>
                    <li><button className="btn-floating yellow darken-1" value="bike" ><i className="material-icons">directions_bike</i></button></li>
                    <li><button className="btn-floating blue" value="water" ><i className="material-icons">local_drink</i></button></li>
                    <li><button className="btn-floating red" value="abstain" ><i className="material-icons">smoke_free</i></button></li>
                </ul>
            </div>
        );
}

export default FloatingActionButton;