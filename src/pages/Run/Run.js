import React from 'react';
import WhatLength from "../../components/WhatLength/WhatLength"
import "./Run.css"

class Run extends React.Component {
    state = {
        miles: ""
    }

    showSpeed() {
        document.getElementById('speed').style.display = 'block'
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmitDistance() {
        alert("Distance challenge created! Whoever runs the furthest wins. Good Luck!");
    };

    handleSubmitSpeed = event => {
        event.preventDefault();
        alert(`Speed challenge created! Whoever can clock the fastest time in ${this.state.miles} wins!`);
    };

    render() {
        <WhatLength />
        return <div className="container">
            <div className="row">
                <h3>Would you like this to be a distance or speed challenge?</h3>
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
                <h3>How many miles would you like to set for the speed challenge?</h3>
                <form action="#">
                    <p>
                        <div className='input-field col s3'>
                            <input placeholder="#" name="miles" value={this.state.miles} onChange={this.handleInputChange} />
                            <label for="miles"></label>
                            {/* <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="miles">Mile(s)</option>
                                <option value="kilometers">Kilometers(s)</option>
                            </select> */}
                        </div>
                    </p>
                </form>
                <a class="waves-effect waves-light btn" onClick={this.handleSubmitSpeed}>Finish</a>
            </div>
        </div>
    }
}

export default Run;
