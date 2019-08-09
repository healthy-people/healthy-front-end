import React from 'react';

class WhatLength extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: "1",
            length: ""
        };
        this.handleDay = this.handleDay.bind(this);
        this.handleWeek = this.handleWeek.bind(this);
        this.handleMonth = this.handleMonth.bind(this);
    }

    handleDay() {
        this.setState({ length: "day" });
    }

    handleWeek() {
        this.setState({ length: "week" });
    }

    handleMonth() {
        this.setState({ length: "month" });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>How long do you want this challenge to last?</h3>
                    <form action="#">
                        <p>
                            <label>
                                <input name="1day" type="radio" onClick={this.handleDay} />
                                <span>1 day</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="1week" type="radio" onClick={this.handleWeek} />
                                <span>1 week</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="1month" type="radio" onClick={this.handleMonth} />
                                <span>1 month</span>
                            </label>
                        </p>
                        <div className="row">
                            <p>
                                <div className='input-field col s6'>
                                    <input placeholder="#" id="customNumber" type='number' />
                                    <label htmlFor="customNumber">Custom length</label>
                                </div>
                                <div className="col s6">
                                    <select>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="day">Day(s)</option>
                                        <option value="week">Weeks(s)</option>
                                        <option value="month">Months(s)</option>
                                    </select>
                                </div>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default WhatLength;