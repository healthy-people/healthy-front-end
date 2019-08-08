import React, { useState, useEffect } from 'react';
import "./LoginPage.css";
import Modal from 'react-modal';
import Auth from '../../utilities/auth';

const changeTypeBtnTextValues = {
    signin: 'Don\'t have an account?',
    signup: 'Already have an account?'
  };

//tasks
//check if session exists
//if not
//show login first and then let them switch to sign up
//repopulates modal with different information

function Login_SignUp() {

    const [modalType, setModalType] = useState(login);
    const [modalIsOpen, setModalIsOpen] = useState(true);

    useEffect(() => {
        Auth.checkForExistingSession();
    }, []);
    //for now assume no session

    const toggleModalType = () => {
        let newModalType = modalType === signin ? signup : signin;
        let newChangeBtnText = modalType === signin ? changeTypeBtnTextValues.signup : changeTypeBtnTextValues.signin;
        setModalType(newModalType);
        setChangeTypeBtnText(newChangeBtnText);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const authSubmit = (event) => {
        event.preventDefault();
        if (modalType === login) {
            let signinObj = {
                email_address: emailVal,
                password: passwordVal
            };
            Auth.sendSigninRequest(signinObj);
        } else if (modalType === signup) {
            let signupObj = {
                first_name: firstNameVal
            };
            Auth.sendSignupRequest(signupObj);
        }
    }

    const generateFormContents = () => {
        if (modalType === login) {
            return (
                <div className='modal-body'>
                </div>
            );
        } else if (modalType === signup) {
            return (
                <div className='modal-body'>
                </div>
            );
        } else {
            console.log('error in authModal type: ' + modalType);
        }
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Login Modal'>
            <form>
                <h5 className='modal-title'>{modalType}</h5>
                {generateFormContents()}
                <button type='button' className='btn btn-link' onClick={toggleModalType}>{changeTypeBtnText}</button>
                <div className='modal-footer'>
                    <button type='submit' className='btn btn-primary' onClick={authSubmit}>Submit</button>
                </div>
            </form>
        </Modal>
    )
}

export default Login_SignUp;