import React from 'react';
import WhatLength from "../../components/WhatLength/WhatLength"

class Water extends React.Component {

    waterChallenge = () => {
        alert("Water challenge created! Whoever runs the furthest wins. Good Luck!");
    }


    render() {
        return(
        <div>
            <WhatLength/>
            <div>
                <a class="waves-effect waves-light btn" onClick={this.waterChallenge}>Submit</a>
            </div>
        </div>
        )
    }
}

export default Water;
