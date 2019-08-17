import React from 'react';

class RunDistanceLog extends React.Component {
    state = {
        runDistance: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        alert("Good job! You rock!")
    }

    render() {
        return (
            <div>
                <div className="row">
                    <form className="col s6">
                        <div>
                            <h5>Hello Competitor! How far did you run today?</h5>
                            <input
                                id="running_distance"
                                value={this.state.runDistance}
                                onChange={this.handleInputChange}
                                type="text"
                            />
                        </div>
                        <div>
                            <a class="waves-effect waves-light btn" onClick={this.handleFormSubmit}>Submit</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default RunDistanceLog;