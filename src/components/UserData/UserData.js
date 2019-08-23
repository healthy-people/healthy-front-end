import React, { Component } from 'react';
import "./UserData.css"
import API from "../../utilities/API"

class UserData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            logs: [],
            group_challenge_id: 1,
        }
    }

    componentDidMount() {
        // API.getUserRunningDistLogs(1)
        //     .then(res => {
        //         console.log("This is the response" + JSON.stringify(res))
        //         this.setState({logs:res.data})
        //         console.log("***********" + JSON.stringify(res))
        //     })
        //     .catch(err => console.log(err))
    }

    render() {
        console.log(this.props.user_id)
        return (<div>
            <div>
                <h3>User Data</h3>
                <a className="waves-effect waves-light btn">Create new log!</a>
            </div>
            <table className="striped centered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>ACTIVITY</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.logs.map(log =>
                    <tr key={log.id}>
                        <td>{log.createdAt}</td>
                        <td>{log.running_distance}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        )
    }

}

export default UserData;
