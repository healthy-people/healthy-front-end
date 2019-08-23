import React, { Component } from 'react';
import "./UserData.css"

class UserData extends Component {

    render() {
        return (<div>
            <div>
                <h3>User Data</h3>
                <a class="waves-effect waves-light btn">Create new log!</a>
            </div>
            <table className="striped centered">
                <thead>
                    <tr>
                        <th>Date Logged</th>
                        <th>Item Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }

}

export default UserData;
