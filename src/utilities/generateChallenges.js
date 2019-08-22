import axios from 'axios';
import Pubsub from './pubsub';
import Auth, { user } from './authorizer';


var GenerateChallenges = {};

(function (obj) {

    obj.getAllChallenges = () => {
      if (user.id) {
        axios.get("/api/group_challenge/"+user.id).then(response => {
            GenerateChallenges = JSON.parse(JSON.stringify(response.data));
            Pubsub.publish('challenges_downloaded', GenerateChallenges);
        }).catch(error => {
            console.log(error);
        });
      }
    }

})(GenerateChallenges);

export default GenerateChallenges;