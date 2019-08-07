import React, { Component } from 'react';
import "./Fab.css"
import M from "materialize-css";


class FloatingActionButton extends Component {
    componentDidMount() {
        M.AutoInit()
    }

    constructor(props) {
        super(props);
        this.state = {
            type: ""
        };
        this.handleRun = this.handleRun.bind(this);
        this.handleBike = this.handleBike.bind(this);
        this.handleWater = this.handleWater.bind(this);
        this.handleAbstain = this.handleAbstain.bind(this);
    }

        handleRun() {
            this.setState({ type: "run" })
        }

        handleBike() {
            this.setState({ type: "bike" })
        }

        handleWater() {
            this.setState({ type: "water" })
        }

        handleAbstain() {
            this.setState({ type: "abstain" })
        }

        render() {
            return (
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                        <i className="fab large material-icons" tabIndex="1">add</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating green" onClick={this.handleRun}><i className="material-icons">directions_run</i></a></li>
                        <li><a className="btn-floating yellow darken-1" onClick={this.handleBike}><i className="material-icons">directions_bike</i></a></li>
                        <li><a className="btn-floating blue" onClick={this.handleWater}><i className="material-icons">local_drink</i></a></li>
                        <li><a className="btn-floating red" onClick={this.handleAbstain}><i className="material-icons">smoke_free</i></a></li>
                    </ul>
                </div>
            );
        }
    }




    export default FloatingActionButton;