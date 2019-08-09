import React, { Component } from 'react';
import "./Fab.css"
import M from "materialize-css";


class FloatingActionButton extends Component {
    componentDidMount() {
        M.AutoInit()
    }


    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
        handleChange(event) {
            const type = event.target.value;
            this.props.onChange(type);
        }

        render() {
            return (
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="fab large material-icons" tabIndex="1">add</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating green" value="run" onClick={this.handleChange}><i className="material-icons">directions_run</i></a></li>
                        <li><a className="btn-floating yellow darken-1" value="bike" onClick={this.handleChange}><i className="material-icons">directions_bike</i></a></li>
                        <li><a className="btn-floating blue" value="water" onClick={this.handleChange}><i className="material-icons">local_drink</i></a></li>
                        <li><a className="btn-floating red" value="abstain" onClick={this.handleChange}><i className="material-icons">smoke_free</i></a></li>
                    </ul>
                </div>
            );
        }

    }




    export default FloatingActionButton;