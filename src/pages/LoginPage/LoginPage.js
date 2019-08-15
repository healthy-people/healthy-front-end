import React, { useState, useEffect } from 'react';
import "./LoginPage.css";
import Modal from 'react-modal';
import Auth from '../../utilities/authorizer';
import Pubsub from '../../utilities/pubsub';
//import { NOTIF, AUTH_MODAL_TYPES } from '../../utilities/constants';

const changeTypeBtnTextValues = {
    login: 'Don\'t have an account?',
    signup: 'Already have an account?'
};

const loginType = {
    login: 'Log In',
    signup: 'Sign Up'
};

function Login_SignUp() {

    const [modalType, setModalType] = useState(loginType.login);
    const [changeTypeBtnText, setChangeTypeBtnText] = useState(changeTypeBtnTextValues.login);
    const [modalIsOpen, setModalIsOpen] = useState(true);

    const [usernameVal, setUsernameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [confirmPasswordVal, setConfirmPasswordVal] = useState('');

    useEffect(() => {
        Pubsub.subscribe('login', this, closeModal);
        //Auth.checkForExistingSession();
        //setModalIsOpen(true);
        return(() => {
            Pubsub.unsubscribe('login', this);
        });
    }, []);

    const toggleModalType = () => {
        let newModalType = modalType === loginType.login ? loginType.signup : loginType.login;
        let newChangeBtnText = modalType === loginType.login ? changeTypeBtnTextValues.signup : changeTypeBtnTextValues.login;
        setModalType(newModalType);
        setChangeTypeBtnText(newChangeBtnText);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }
    const handleUsernameChange = (event) => {
        setUsernameVal(event.target.value);
    }
    const handleEmailChange = (event) => {
        // @TODO implement live validation
        setEmailVal(event.target.value);
    }
    const handlePasswordChange = (event) => {
        // @TODO implement live validation
        setPasswordVal(event.target.value);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPasswordVal(event.target.value);
    }

    const authSubmit = (event) => {
        event.preventDefault();
        if (modalType === loginType.login) {
            let signinObj = {
                username: usernameVal,
                password: passwordVal
            };
            console.log('sign in obj: ');
            console.log(signinObj);
            Auth.sendSigninRequest(signinObj);
        } else if (modalType === loginType.signup) {
            let signupObj = {
                email: emailVal,
                username: usernameVal,
                password: passwordVal,
                password_confirm: confirmPasswordVal
            };
            console.log('sign up obj: ');
            console.log(signupObj);
            Auth.sendSignupRequest(signupObj);
        }
        //setModalIsOpen(false);
    }

    const generateFormContents = () => {
        if (modalType === loginType.login) {
            return (
                <div className='modal-content'>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="loginUsername" type="text" className="validate" value={usernameVal} onChange={handleUsernameChange} />
                                <label htmlFor="loginUsername">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="loginPassword" type="password" className="validate" value={passwordVal} onChange={handlePasswordChange} />
                                <label htmlFor="loginPassword">Password</label>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else if (modalType === loginType.signup) {
            return (
                <div className='modal-content'>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="signUpEmail" type="email" className="validate" value={emailVal} onChange={handleEmailChange} />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="signUpUsername" type="text" className="validate" value={usernameVal} onChange={handleUsernameChange} />
                                <label htmlFor="signUpUsername">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="signUpPassword" type="password" className="validate" value={passwordVal} onChange={handlePasswordChange} />
                                <label htmlFor="signUpPassword">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="confirmPassword" type="password" className="validate" value={confirmPasswordVal} onChange={handleConfirmPasswordChange} />
                                <label htmlFor="confirmPassword">Confirm Password</label>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else {
            console.log('error in authModal type: ' + modalType);
        }
    }

    const generateErrorInfo = () => {
        return (
          <span className='text-danger'>{errorMessage}</span>
        );
      }

    return (
        <Modal
            isOpen={modalIsOpen}
            contentLabel='Login Modal'
            ariaHideApp={false}
        >
            <h5 className='modal-title'>{modalType}</h5>
            <div className='error-info'>
                {generateErrorInfo()}
            </div>
            <form>
                {generateFormContents()}
                <button type='button' className='btn btn-link' onClick={toggleModalType}>{changeTypeBtnText}</button>
                <div className='modal-footer row center'>
                    <button className="btn waves-effect waves-light" type="submit" name="action" id="signUpBtn" onClick={authSubmit}>Submit<i className="material-icons right">send</i></button>
                </div>
                {/* <div className="modal-footer">
                    <a className="modal-close waves-effect waves-green btn-flat" onClick={closeModal}>X</a>
                </div> */}
            </form>
        </Modal>
    )
}

export default Login_SignUp;