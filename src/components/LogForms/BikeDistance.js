import React from 'react';

class BikeDistanceLog extends React.Component {
    state = {
        bikeDistance: ""
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
                            <h5>Hello Competitor! How far did you bike today?</h5>
                            <input
                                id="biking_distance"
                                value={this.state.bikeDistance}
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

export default BikeDistanceLog;