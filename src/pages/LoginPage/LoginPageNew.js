import React, { useState, useEffect } from 'react';
import "./LoginPage.css";
import Modal from 'react-modal';
import Auth from '../../utilities/auth';

//tasks
//check if session exisits
//if not
//show modal with login or signup
//press either button
//repopulates modal with different information

function Login_SignUp() {

    useEffect(() => {
        Auth.checkForExistingSession();
    }, []);

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
                first_name: firstNameVal
            };
            Auth.sendSignupRequest(signupObj);
        }
    }

    const generateFormContents = () => {
        if (modalType === AUTH_MODAL_TYPES.signin) {
            return (
                <div className='modal-body'>
                </div>
            );
        } else if (modalType === AUTH_MODAL_TYPES.signup) {
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
                {generateFormContents()}
            </form>
        </Modal>
    )
}

export default Login_SignUp;