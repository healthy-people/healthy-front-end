import Navbar from "../../components/Navbar/Navbar";
import FloatingActionButton from "../../components/FloatingButton/FabOLD"
import ChallengePage from "../../components/ChallengePage/ChallengePage"
import React, { Component } from 'react';
import Challenge from "../../components/Challenge/Challenge"
import API from "../../utilities/API.js"
import M from "materialize-css";
import Auth, { user } from '../../utilities/authorizer'
import axios from 'axios';
import "./HomePage.css"
const baseUrl = process.env.REACT_APP_BASE_URL || '/'

class HomePage extends Component {

    
    componentDidMount(){
        axios.get(baseUrl+ "/api/group_challenge/1")
        .then(res => {
            console.log("Message board" + JSON.stringify(res.data))
            this.setState({ challenges: res.data })
            console.log("***********" + JSON.stringify(res.data))
        })
        .catch(err => console.log(err))
    }
    constructor(props) {
        super(props)
        this.state = {
            challenge_id: 1,
            challenges: [],
        }

    }


    render() {
        console.log(this.state.challenges)
        let challenges = this.state.challenges.map(challenge => (
            <Challenge
                handleClick={this.handleClick}
                key={challenge.id}
                index={challenge.id}
                challenge_name={challenge.challenge_name}
                createdAt={challenge.createdAt} />
        ))
        return (
            <div className="collection"> 
            <h1 className="collection-header">Welcome!</h1>             
                    {challenges}
            </div>
        );
    }
}


export default HomePage;