import React from 'react';
// import WhatLength from "../../components/WhatLength/WhatLength"
import "./Bike.css"
import API from "../../utilities/API";
import DatePicker from "react-datepicker";
import moment from "moment";

class Bike extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startDate: "",
            endDate: "",
            challenge_type: "biking challenge",
            challenge_name: "",
            challenge_length: ""
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(date) {
        this.setState({ startDate: date })
    }

    handleChangeEnd(date) {
        this.setState({ endDate: date })

    }

    showSpeed() {
        document.getElementById("speed").classList.remove('hide');
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmitDistance = event => {
        event.preventDefault();
        let { startDate, endDate, challenge_name, challenge_length, challenge_type } = this.state;
        let newChallengeObj = {
            start_date: moment(startDate).format("YYYY/MM/DD"),
            end_date: moment(endDate).format("YYYY/MM/DD"),
            challenge_length: challenge_length,
            challenge_name: challenge_name,
            challenge_type: challenge_type
        }
        API.createNewChallenge(newChallengeObj)
            .then((res => {
                console.log(res.data)
            }))
    };

    handleSubmitSpeed = event => {
        event.preventDefault();
        alert(`Speed challenge created! Whoever can clock the fastest time in ${this.state.biking_distance} miles wins!`);
    };

    render() {
        return (
            <div>
                {/* <WhatLength /> */}
                <div className="container">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="input_text" type="text" data-length="10" name="challenge_name" value={this.state.challenge_name} onChange={this.handleInputChange} />
                            <label htmlFor="input_text" >Input text</label>
                        </div>
                    </div>
                    <div className="row center">
                        <div className="input-field col s6">
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChangeStart}
                                name="startDate"
                                dateFormat="MM/dd/yyyy"
                            />
                        </div>
                    </div>
                    <div className="row center">
                        <div className=" input-field col s6">
                            <DatePicker
                                selected={this.state.endDate}
                                onChange={this.handleChangeEnd}
                                name="endDate"
                                dateFormat="MM/dd/yyyy"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <h5>Would you like this to be a distance or speed challenge?</h5>
                        <form action="#">
                            <p>
                                <label>
                                    <input name="distance" type="radio" />
                                    <span>Distance</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="speed" type="radio" onClick={this.showSpeed} />
                                    <span>Speed</span>
                                </label>
                            </p>
                        </form>
                    </div>
                    <div className="row hide" id="speed">
                        <h5>How many miles would you like to set for the speed challenge?</h5>
                        <form action="#">
                            <div className="row">
                                <div className='input-field col s3'>
                                    <input id="bikeMiles" name="challenge_length" type="number" value={this.state.challenge_length} onChange={this.handleInputChange} />
                                    <label htmlFor="bikeMiles">miles</label>
                                </div>
                            </div>
                            <div className="row center">
                                <a className="waves-effect waves-light btn" onClick={this.handleSubmitDistance}>Finish</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Bike;