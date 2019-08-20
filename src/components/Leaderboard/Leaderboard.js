import React, { Component } from 'react';
import "./Leaderboard.css"

class Leaderboard extends Component {

    render() {
        return (<div>
            {/* <div>
                <h3>Leaderboard</h3>
            </div> */}
            <table class="striped centered">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>User</th>
                        <th>Distance(mi)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Carl</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Dave</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Greg</td>
                        <td>22</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }

}

export default Leaderboard;
