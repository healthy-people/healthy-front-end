import React, { Component } from 'react';

class MessageItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            class: 'truncate',
            show: false
        }
    }


    


    render() {
        // collection-item avatar z-depth-2
        return (

            <li onClick={() => {this.props.handleClick(this.props.index)}} >
                <div className="collapsible-header">
                    <img src="https://chridd.nfshost.com/avatar/hd/black.png" alt="" className="circle" style={{ height: "50px" }} />
                    <p style={{ marginLeft: "10px" }}><span className="left">{this.props.username}:</span></p>
                    <p id="truncateBody" className={this.props.showMe ? "truncate hide": "truncate"} style={{ marginLeft: "20px" }}>{this.props.message_body}</p>
                </div>
                <div className="collapsible-body"><span className="">{this.props.message_body}</span><br />
                    <span className="right">{this.props.createdAt}</span><br />
                </div>
            </li>

        );
    }
}


export default MessageItem;