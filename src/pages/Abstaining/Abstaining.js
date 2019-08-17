import React from 'react';
import WhatLength from "../../components/WhatLength/WhatLength";
// import { ParserOptions } from '@babel/core';

class Abstain extends React.Component {

    handleSubmitDrinking() {
        alert("Drinking challenge created! Whoever doesn't drink in the allowed time wins!");
    };

    handleSubmitSmoking() {
        alert("Smoking challenge created! Whoever doesn't drink in the allowed time wins!");
    };

    render() {
        return (
            <div>
                <WhatLength/>
    
                    <div className="container">
                        <div className="row">
                            <h3>Would you like to create a no drinking or no smoking challenge?</h3>
                            <form action="#">
                                <p>
                                    <label>
                                        <input name="distance" type="radio" onClick={this.handleSubmitDrinking} />
                                        <span>No Drinking</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="speed" type="radio" onClick={this.handleSubmitSmoking} />
                                        <span>No Smoking</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                    </div>
            </div>
         
        )
    }
}

export default Abstain;