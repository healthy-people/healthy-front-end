import React, { Component } from 'react';
import "./UserData.css"

class UserData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logs: []
        }
    }

    render() {
        return (<div>
            <div>
                <h3>User Data</h3>
                <a class="waves-effect waves-light btn">Create new log!</a>
            </div>
            <table class="striped centered">
                <thead>
                    <tr>
                        <th>Date Logged</th>
                        <th>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>08/10/19</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>07/28/19</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>07/30/19</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }

}

export default UserData;
