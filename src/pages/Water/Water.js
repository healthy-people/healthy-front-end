import React from 'react';
import WhatLength from "..WhatLength/WhatLength"

class Water extends React.Component {

    waterChallenge() {
        alert("Water challenge created! Whoever runs the furthest wins. Good Luck!");
    }


    render() {
        <WhatLength />
        return <div>
            <a class="waves-effect waves-light btn" onClick={this.waterChallenge}>Submit</a>
        </div>

    }
}

export default Water;
