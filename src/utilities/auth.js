import axios from 'axios';
import Pubsub from './pubsub';
//import { API, NOTIF } from './constants';
import { NOTIF } from './constants';
//import { shallowCopyObj, deepCopyObj } from './helper';
import { deepCopyObj } from './helper';
import Data from './data';

var Auth = {};

var user = {};

(function (obj) {
  // @TODO 

  obj.checkForExistingSession = () => {
    let session_token = localStorage.getItem('x-session-token');
    if (session_token) {
      axios.get('/api/user', { headers: { 'x-session-token': session_token } }).then(response => {
        console.log(response);
        if (validateUserData(response.data)) {
          user = deepCopyObj(response.data);
          console.log('user is validated');
          if (user == {}){
            console.log('no existing session');
          } else {
            console.log('existing session');
          }
        }
        console.log('user user');
        console.log(user);
        Pubsub.publish(NOTIF.SIGN_IN, null);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  obj.sendSigninRequest = (params) => {
    // API require email OR alias
    // forcing email at the moment - may implement more elegant logic later
    if (validateSigninRequest(params)) {
      let signinObj = {
        username: params.username,
        //email: params.email,
        password: params.password
      };
      console.log('valid signin request');
      console.log(signinObj);
      // this extra call is not ideal, but we need to hack our way to getting the correct info on signin.  In the future, the API will need to be refactored to send back all the necessary info
      axios.post('/api/user/login', signinObj).then(response => {
        let session_token = response.headers['x-session-token'];
        localStorage.setItem('x-session-token', session_token);
        axios.get('/api/user', { headers: { 'x-session-token': session_token } }).then(response => {
          user = deepCopyObj(response.data);
          console.log(user);
          Pubsub.publish(NOTIF.SIGN_IN, null);
        }).catch(error => {
          console.log(error);
          let errorObj = {
            message: 'Error signing in, please try again'
          };
          Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
        });
      }).catch(error => {
        // @TODO return error codes and display helpful messages to the user, i.e. incorrect password, etc.
        // Potentially make more DRY
        let errorObj = {
          message: 'Error signing in, please try again'
        };
        Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
      });
    } else {
      let errorObj = {
        message: 'Please fill in the required fields'
      };
      Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
    }
  }

  obj.sendSignupRequest = (params) => {
    // **THIS IS HIT console.log('signup request hit');
    if (validateSignupRequest(params)) {
      console.log('sent signup request');
      axios.post('/api/user', {
        // first_name: params.first_name,
        // last_name: params.last_name,
        email: params.email,
        username: params.username,
        password: params.password,
        password_confirm: params.password_confirm
      }).then(response => {
        let signinObj = {
          username: params.username,
          //email: params.email,
          password: params.password
        };
        console.log('(sign up requst) sigin obj is: ')
        console.log(signinObj);
        // these TWO extra calls are not ideal, but we need to hack our way to getting the correct info on signup.  In the future, the API will need to be refactored to send back all the necessary info
        axios.post('/api/user/login', signinObj).then(signinResp => {
          let session_token = signinResp.headers['x-session-token'];
          localStorage.setItem('x-session-token', session_token);
          axios.get('/api/user/', { headers: { 'x-session-token': session_token } }).then(getResponse => {
            user = deepCopyObj(getResponse.data);
            console.log('post ot login:')
            console.log(user);
            Pubsub.publish(NOTIF.SIGN_IN, null);
          }).catch(error => {
            console.log(error);
            let errorObj = {
              message: 'Error signing up, please try again'
            };
            Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
          });
        }).catch(error => {
          console.log(error);
          let errorObj = {
            message: 'Error signing up, please try again'
          };
          Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
        });
      }).catch(error => {
        // @TODO return error codes and display helpful messages to the user, i.e. incorrect password, etc.
        // Potentially make more DRY
        let errorObj = {
          message: 'Error signing up, please try again'
        };
        Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
      });
    } else {
      let errorObj = {
        message: 'Please fill out all fields'
      };
      Pubsub.publish(NOTIF.AUTH_ERROR, errorObj);
    }

  }

  obj.sendSignoutRequest = () => {
    // @TODO need to verify what direction we're taking with the session token business
    let session_token = localStorage.getItem('x-session-token');

    axios({
      url: '/api/user/login',
      //user or user?
      method: 'delete',
      headers: {
        'x-session-token': session_token
      }
    }).then(response => {
      if (response.status === 200) {
        user = {};
        localStorage.setItem('x-session-token', '');
        Pubsub.publish(NOTIF.SIGN_OUT, null);
        Data.handleSignout();
        console.log('signout success');
      } else {
        // @TODO not sure what to do in a .then handler here
        console.log('signout resolved, but not status 200');
      }
    }).catch(error => {
      console.log(error);
      // @TODO send an error back to the user
    });
  }

})(Auth);

const validateSigninRequest = (params) => {
  // API requires either email or alias, and password
  // checks if the correct values are in the params
  if ((params.username || params.email) && params.password) {
    console.log('user is validated');
    //if (params.username && params.password) {
    return true;
  }
  console.log('user is not validated');
  return false;
}

const validateSignupRequest = (params) => {
  /* API requires all of:
    first_name
    last_name
    email
    alias
    password
  */
  console.log(params);
  console.log('this is where the params are logged')
  if (
      //params.first_name &&
    //params.last_name &&
    params.username &&
    params.email &&
    //params.email_address &&
    //params.alias &&
    params.password &&
    params.password_confirm) {
      console.log('trueE returned');
    return true;
  }
  console.log('falseE returned');
  return false;
}

const validateUserData = (data) => {
  if (
      //data.alias &&
    //data.created &&
    data.username 
    //data.email &&
    //params.email_address &&
    //data.first_name &&
    //data.last_name &&
    //data.updated &&
    //data.user_id
    ) {
      console.log("validate user data true");
    return true
  }
  console.log("validate user data false");
  return false;
}

export default Auth;

export {
  user
};