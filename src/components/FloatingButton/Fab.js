import React, { Component } from 'react';
import "./Fab.css"
import M from "materialize-css";

class FloatingActionButton extends Component {
    componentDidMount() {
        M.AutoInit()
    }
    render() {
        return (
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="fab large material-icons" tabIndex="1">add</i>
                </a>
                <ul>
                    <li><a className="btn-floating green" href="#!"><i className="material-icons">directions_run</i></a></li>
                    <li><a className="btn-floating yellow darken-1" href="#!"><i className="material-icons">directions_bike</i></a></li>
                    <li><a className="btn-floating blue" href="#!"><i className="material-icons">local_drink</i></a></li>
                    <li><a className="btn-floating red" href="#!"><i className="material-icons">smoke_free</i></a></li>
                </ul>
            </div>
        );
    }
}




export default FloatingActionButton;