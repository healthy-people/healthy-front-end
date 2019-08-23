import axios from 'axios';
import Pubsub from './pubsub';
import Auth, { user } from './authorizer';

var GenerateChallenges = {};

(function (obj) {

    obj.getAllChallenges = () => {
      if (user.id) {
        axios.get("/api/group_challenge/"+user_id).then(response => {
          AllChallenges = JSON.parse(JSON.stringify(response.data));
          Pubsub.publish('challenges_downloaded', AllChallenges);
        }).catch(error => {
          console.log(error);
        });
      }
    }

})(GenerateChallenges);

// export default GenerateChallenges;