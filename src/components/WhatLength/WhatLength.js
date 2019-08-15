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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>How long do you want this challenge to last?</h3>
                    <form action="#">
                        <p>
                            <label>
                                <input name="day" type="radio" onClick={this.handleInputChange} />
                                <span>1 day</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="week" type="radio" onClick={this.handleInputChange} />
                                <span>1 week</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="month" type="radio" onClick={this.handleInputChange} />
                                <span>1 month</span>
                            </label>
                        </p>
                        {/* <div className="row">
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
                        </div> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default WhatLength;