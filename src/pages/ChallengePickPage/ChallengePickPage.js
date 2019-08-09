import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import WhatLength from "../../components/WhatLength/WhatLength";
import FloatingActionButton from "../../components/FloatingButton/Fab"



class PickChallenge extends React.Component{
    constructor(props) {
        super(props);
        this.state = {type: ''};
        this.pickType = this.pickType.bind(this)
    }

    pickType(type) {
        this.setState({
            type: type
        });
    }

    render() {
        return(
            <div>
                <Navbar/>
                <FloatingActionButton onChange={this.pickType}/>
                <div>   
                    <WhatLength/>
                </div>
            </div>
        )
    }
}

export default PickChallenge;