import React from 'react';

class WaterLog extends React.Component {
    state = {
        ounces: ""
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
                            <h5>Hello Competitor! How many ounces of water have you had today?</h5>
                            <input
                                id="ounces"
                                value={this.state.ounces}
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

export default WaterLog;