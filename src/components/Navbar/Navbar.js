import React, { Component } from 'react';
import "./Navbar.css"
import M from "materialize-css";
import Auth from '../../utilities/authorizer';
import Pubsub from '../../utilities/pubsub';

class Navbar extends Component {
    componentDidMount() {
        M.AutoInit()
    }

    handleSignOut = (event) =>{
        event.preventDefault();
        Auth.sendSignoutRequest();
        Pubsub.publish('logout', true);
    }

     render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue-grey">
                        <a href="#!" className="brand-logo center">HealthMate</a>
                        <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="...">Settings</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <div className="row blue-grey">
                        <i className="account_pic material-icons">account_circle</i>
                        <div className="usernameText col s12"><li>Username</li></div>
                        <div className="daysChallengeText col s12"><li>___ Days on Challenge</li></div>
                    </div>
                    <li><a href="#!"><i className="settingsIcon material-icons">settings</i><p>Settings</p></a></li>
                    <div className="col s12" id="logoutBtn"><li><a className="waves-effect waves-light btn-large " onClick={this.handleSignOut}>Logout</a></li></div>
                </ul>
            </div>
        );
    }
}

export default Navbar;