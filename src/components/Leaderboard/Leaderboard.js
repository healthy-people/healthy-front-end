import React, { Component } from 'react';
import "./Leaderboard.css"
import API from "../../utilities/API.js"
import moment from "moment";
import Auth, { user } from '../../utilities/authorizer';

class Leaderboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            logs: [],
        }
    }
    

    componentDidMount() {
        API.getRunningDistLogs(1)
            .then(res => {
                console.log("This is the response" + JSON.stringify(res))
                this.setState({logs:res.data})
                console.log("***********" + JSON.stringify(res))
            })
            .catch(err => console.log(err))
    }

    render() {
        return (<div>
            {/* <div>
                <h3>Leaderboard</h3>
            </div> */}
            <table class="striped centered">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Distance(mi)</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {this.state.logs.map(log =>
                    <tr key={log.id}>
                        <td>{log.user_id}</td>
                        <td>{moment(log.createdAt).format('MM/DD/YY')}</td>
                        <td>{moment(log.createdAt).format('hh:mm a')}</td>
                        <td>{log.running_distance}</td>
                    </tr>
                    )}
                </tbody> */}
            </table>
        </div>
        )
    }

}

export default Leaderboard;
