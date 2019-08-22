import React, { useState, useEffect } from '../../../node_modules/react';
import Pubsub from '../../utilities/pubsub';
import "./Fab.css"
import M from "materialize-css";

function FloatingActionButton() {

    const [authenticated, setAuthenticated] = useState(false);

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
    }

    const handleSignin = () => {
        setAuthenticated(true);
    }

    const handleChallengeType = (challengeType) => {
        Pubsub.publish('challengeType', challengeType);
    }

    function renderFAB() {
        if (!authenticated) {
            return console.log('FAB do not display if not authenticated');
        } else {
            return (
                <div>
                </div>
            )
        }
    }
    // @TODO if FAB can't be changed adjust what component it's included in
    //add it to each switch statement

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
    );
}

export default FloatingActionButton;



{/* <div className="btn-floating btn-large red">
<i className="fab large material-icons" tabIndex="1">add</i>
</div>
<ul>
<li><button className="btn-floating green" type="submit" value="run" onClick={() => handleChallengeType('run')}><i className="material-icons">directions_run</i></button></li>
<li><button className="btn-floating yellow darken-1" value="bike" onClick={() => handleChallengeType('bike')}><i className="material-icons">directions_bike</i></button></li>
<li><button className="btn-floating blue" value="water" onClick={() => handleChallengeType('water')}><i className="material-icons">local_drink</i></button></li>
<li><button className="btn-floating red" value="abstain" onClick={() => handleChallengeType('abstain')}><i className="material-icons">smoke_free</i></button></li>
</ul> */}


{/* <div className="fixed-action-btn">
<div className="btn-floating btn-large red">
    <i className="fab large material-icons" tabIndex="1">add</i>
</div>
{ authenticated ? (
    <div>
<ul>
    <li><button className="btn-floating green" type="submit" value="run" onClick={() => handleChallengeType('run')}><i className="material-icons">directions_run</i></button></li>
    <li><button className="btn-floating yellow darken-1" value="bike" onClick={() => handleChallengeType('bike')}><i className="material-icons">directions_bike</i></button></li>
    <li><button className="btn-floating blue" value="water" onClick={() => handleChallengeType('water')}><i className="material-icons">local_drink</i></button></li>
    <li><button className="btn-floating red" value="abstain" onClick={() => handleChallengeType('abstain')}><i className="material-icons">smoke_free</i></button></li>
</ul>
</div>
) : (
    <div>
    </div>
)}
</div> */}