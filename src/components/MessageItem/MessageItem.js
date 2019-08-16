import React, { Component } from 'react';
import M from "materialize-css";

class MessageItem extends Component {

    render() {
     
        return (
            <li className="collection-item avatar z-depth-2">
            <img src="https://chridd.nfshost.com/avatar/hd/black.png" alt="" className="circle"/>
            <p><span className="left">{this.props.message_author}:</span><br/>
            <span className="left">{this.props.message_body}</span><br/>
            <span className="right">{this.props.createdAt}</span><br/>
            </p>
          </li>
        
        );
    }
}

            
export default MessageItem;