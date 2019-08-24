import React, { Component } from 'react';

class Challenge extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


  

    render() {
        return (
                <a href="/challengepage" className="collection-item">{this.props.challenge_name}</a>

        );
    }
}


export default Challenge;