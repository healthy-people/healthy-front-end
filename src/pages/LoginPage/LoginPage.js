import React, { useState, useEffect } from 'react';
import "./LoginPage.css";
import M from "materialize-css";


function Login_SignUp() {
    const [loginType, setLoginType] = useState(LOGIN_TYPE.signin);

    const [emailVal, setEmailVal] = useState('');

    //**THIS SHOLldnt be needed */
    //const handleLoginToggle = (type) => {
    //if (type === LOGIN_TYPE.signin) {
    //setModalType(AUTH_MODAL_TYPES.signin);
    //setChangeTypeBtnText(changeTypeBtnTextValues.signin);
    //} else if (type === LOGIN_TYPE.signup) {
    // setModalType(AUTH_MODAL_TYPES.signup);
    //setChangeTypeBtnText(changeTypeBtnTextValues.signup);
    //}

    //setErrorMessage('');
    //setModalIsOpen(!modalIsOpen);
    //}

    const handleEmailChange = (event) => {
        // @TODO implement live validation
        setEmailVal(event.target.value);
    }


    //class Login_SignUp extends Component {
    //  componentDidMount() {
    //    M.AutoInit();
    //}

    //state = {
    //   username: "",
    //  password: ""
    //}

    //handleInputChange = event => {
    // const { name, value } = event.target

    // this.setState({
    //      [name]: value
    // })
    //};

    const authSubmit = (event) => {
        event.preventDefault();
    
        if (modalType === AUTH_MODAL_TYPES.signin) {
          let signinObj = {
            email_address: emailVal,
            password: passwordVal
          };
    
          Auth.sendSigninRequest(signinObj);
        } else if (modalType === AUTH_MODAL_TYPES.signup) {
          let signupObj = {
            first_name: firstNameVal,
            last_name: lastNameVal,
            alias: usernameVal,
            email: emailVal,
            password: passwordVal,
            password_confirm: confirmPasswordVal 
          };
    
          Auth.sendSignupRequest(signupObj);
        }
      }



    const generateFormContents = () => {
        if (loginType === LOGIN_TYPE.signin) {
            return (
                //<h4>Login</h4>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loginUsername" type="text" className="validate" />
                            <label htmlFor="loginUsername">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="loginPassword" type="password" className="validate" />
                            <label htmlFor="loginPassword">Password</label>
                        </div>
                    </div>
                    <div className="row center">
                        <button className="btn waves-effect waves-light" type="submit" name="action" id="loginBtn">Login
                                    <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            );
        } else {
            return (
                //<h4>Sign Up</h4>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" value={emailVal} onChange={handleEmailChange} />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="signUpUsername" type="text" className="validate" />
                            <label htmlFor="signUpUsername">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="signUpPassword" type="password" className="validate" />
                            <label htmlFor="signUpPassword">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="confirmPassword" type="password" className="validate" />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                    </div>
                    <div className="row center">
                        <button className="btn waves-effect waves-light" type="submit" name="action" id="signUpBtn">Sign Up
                                    <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            )
        }
    }

    return (
        <div>
            <div className="center white-text">
                <h4>HealthMate</h4>
            </div>
            <div className="loginContainer container ">
                {generateFormContents()}
                {/*
                <div className="loginDiv row center ">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Login</a>
                    <button type='button' className='btn btn-primary mx-2' onClick={() => toggleModal(AUTH_MODAL_TYPES.signin)}>Log In</button>
                </div>
                <div className="signUpDiv row center">
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal2">Sign Up</a>
                </div>
*/}
                <button type='submit' className='btn btn-primary' onClick={authSubmit}>Submit</button>
            </div>
        </div>
    )
}



export default Login_SignUp;


