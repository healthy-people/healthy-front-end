import React from 'react';

class BikeSpeedLog extends React.Component {
    state = {
        bikePace: ""
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
                            <h5>Hello Competitor! What pace did you bike today?</h5>
                            <input
                                id="biking_pace"
                                value={this.state.bikePace}
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

export default BikeSpeedLog;