import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class WhatLength extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    componentDidMount() {
        this.setState({
            startDate: "",
            endDate: ""
        })
    }

    handleChangeStart(date) {
        this.setState({ startDate: date })
        alert(this.state.startDate)
    }

    handleChangeEnd(date) {
        this.setState({ endDate: date })
        alert(this.state.startDate)
    }

    handleAlert() {
        console.log(this.state.startDate)
    }

    render() {
        return (
            <div className="center-align">
                {/* <h5>What date would you like to start the challenge?</h5>
                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                    dateFormat="MM/dd/yyyy"
                />
                <h5>What date would you like to end the challenge?</h5>
                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    minDate={this.state.startDate}
                    dateFormat="MM/dd/yyyy"
                />
                <div>
                    <h5>Your start date is now {this.state.startDate} and end date is {this.state.endDate}</h5>
                </div> */}
                <div>
                    <a className="waves-effect waves-light btn" onClick={this.handleAlert}>button</a>
                </div>
            </div>
        );
    }
}


export default WhatLength;