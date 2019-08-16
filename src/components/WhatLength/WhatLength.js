import React from 'react';
import DatePicker from 'react-date-picker'

class WhatLength extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          endDate: new Date()
        };
        this.handleStart = this.handleStart.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
      }

    handleStart(date) {
        this.setState({ startDate: date })
        console.log(this.state.startDate)
    }

    handleEnd(date) {
        this.setState({ endDate: date })
    }

    // handleAlert() {
    // }

    render() {
        return (
            <div>
                <h5>What date would you like to start the challenge?</h5>
                <div className="calendar">
                    <DatePicker
                        onChange={this.handleStart}
                        value={this.state.startDate}
                    />
                <h5>What date would you like to start the challenge?</h5>
                    <DatePicker
                        onChange={this.handleEnd}
                        value={this.state.endDate}
                    />
                </div>
                <div>
                    <a class="waves-effect waves-light btn" onClick={this.handleAlert}>button</a>
                </div>
            </div>
        );
    }
}


export default WhatLength;