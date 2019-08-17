import React from 'react';
import WhatLength from "../../components/WhatLength/WhatLength"
import "./Bike.css"

class Bike extends React.Component {

    state = {
        miles: ""
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

    handleSubmitDistance() {
        alert("Distance challenge created! Whoever bikes the furthest wins. Good Luck!");
    };

    handleSubmitSpeed = event => {
        event.preventDefault();
        alert(`Speed challenge created! Whoever can clock the fastest time in ${this.state.miles} miles wins!`);
    };

    render() {
        return (
            <div>
                <WhatLength />
                <div className="container">
                    <div className="row">
                        <h5>Would you like this to be a distance or speed challenge?</h5>
                        <form action="#">
                            <p>
                                <label>
                                    <input name="distance" type="radio" onClick={this.handleSubmitDistance} />
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
                                    <input id="bikeMiles" name="miles" type="number" value={this.state.miles} onChange={this.handleInputChange} />
                                    <label htmlFor="bikeMiles">miles</label>
                                </div>
                            </div>
                            <div className="row center">
                                <a className="waves-effect waves-light btn" onClick={this.handleSubmitSpeed}>Finish</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Bike;