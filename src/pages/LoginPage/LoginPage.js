import React, { Component } from 'react';
import "./LoginPage.css";
import M from "materialize-css";

class Login_SignUp extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    state = {
        username: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    };


    render() {
        return (

            <div>
                <div className="center white-text">
                    <h4>HealthMate</h4>
                </div>
                <div className="loginContainer container ">
                    <div className="loginDiv row center ">
                        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Login</a>
                    </div>
                    <div className="signUpDiv row center">
                        <a className="waves-effect waves-light btn modal-trigger" href="#modal2">Sign Up</a>
                    </div>
                </div>
                {/* Login Modal */}

                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Login</h4>
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
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">X</a>
                    </div>
                </div>

                {/* Sign Up Modal */}

                <div id="modal2" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>Sign Up</h4>
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
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
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">X</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login_SignUp;

