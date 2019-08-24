import React, { useState, useEffect } from 'react';
import Auth, { user } from '../../utilities/authorizer';
import Pubsub from '../../utilities/pubsub';
import Challenge from '../Challenge/Challenge';
import API from '../../utilities/API';
import FAB from '../FloatingButton/Fab';
// import GenerateChallenges from '../../utilities/generateChallenges';

function ChallengeContainer() {
    console.log(user.id + "hiiiiii")
    const [challengeListFetched, setChallengeListFetched] = useState(false);
    const [challengeList, setChallengeList] = useState([]);


    // useEffect(() => {
    //     Pubsub.subscribe('login', this, handleLogin);
    //     Pubsub.subscribe('logout', this, handleLogout);
    //     //Pubsub.subscribe('challenge_joined',this,handleNewChallengeJoined);
    //     return (() => {
    //         Pubsub.unsubscribe('login', this);
    //         Pubsub.unsubscribe('logout', this);
    //         //Pubsub.unsubscribe('challenge_joined',this);
    //     });
    //}, []);

    const handleLogin = () => {
        //setAuthenticated(true);
        console.log('challenge container login');
        //this needs to set the state equal to the challenges such as user.challenges_member_of
        //setChallengeList(user.challenges);
        //setChallengeListFetched(true);
        //createChallenges();
    }

    //var challenges = {}

    // const createChallenges = () => {
    //     //var challenges = API.getUsersChallenges(user.id);
    //     console.log('create challenges called');
    //     API.getUsersChallenges(user.id).then(response => {
    //         challenges = (JSON.parse(JSON.stringify(response.data)));
    //         console.log(challenges);
    //         setChallengeListFetched(true);
    //         challengeList = challenges
    //         console.log(challengeList);
    //     }).catch(error => {
    //         challenges = (error);
    //     });
    //     //console.log('challenges are: ')
    //     //console.log(challenges);
    // }

    const handleLogout = () => {
        //setChallengeList([]);
        //setChallengeListFetched(false);
    }

    const handleNewChallengeJoined = () => {
        //Auth.checkForExistingSession();
    }

    const generateChallengeListItems = () => {
        //console.log(challengeList);
        // return (
        //     <div>
        //         <h5>Challenges are</h5>
        //         {challenges[0]}
        //     </div>
        // )

        // if (challengeListFetched) {
        //     //return null
        //     return 'No challenges collected yet';
        //   } else {
        //     //if (challengeList.length && challengeList[0].challenge_id === null) {
        //     if (challengeList.length) {
        //         console.log('challenge list included')
        //       return null;
        //     } else if (challengeList.length) {
        //         const items = challengeList.map(item => {
        //             return (
        //                 item
        //                 // <Challenge
        //                 //     name={item.challenge_name}
        //                 // />
        //             );
        //         });
        //         return (items);
        //     } else {
        //         return "You're not part of any challenges yet";
        //     }
        // }
    }

    return (
        <div>
            {/* {generateChallengeListItems()} */}
        </div>
    )
}

export default ChallengeContainer;