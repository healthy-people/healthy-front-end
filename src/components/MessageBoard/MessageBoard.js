import React, { Component } from 'react';
import MessageItem from "../MessageItem/MessageItem"
import "./MessageBoard.css"

class MessageBoard extends Component {
    state = {
        showItemIndex: null,
        challenge_id: "7",
        messages: [
            {
                "id": 1,
                "message_body": "Hi, this is a message and I'm going on and on and on and on and on and on and on and on and on and on and on and on and on on and on and on and on and on and on and on and on and on and on and on and on and on",
                "message_author": "Nick",
                "group_challenge_id": 7,
                "user_id": 1,
                "createdAt": "2019-08-10T14:40:37.000Z"
            },
            {
                "id": 2,
                "message_body": "Hi, this is also a message",
                "message_author": "Rick",
                "group_challenge_id": 7,
                "user_id": 2,
                "createdAt": "2019-08-10T14:40:54.000Z"
            },
            {
                "id": 3,
                "message_body": "Hi, this is a message and I'm going on and on and on and on",
                "message_author": "Nick",
                "group_challenge_id": 7,
                "user_id": 1,
                "createdAt": "2019-08-10T14:40:37.000Z"
            },
            {
                "id": 4,
                "message_body": "Hi, this is also a message",
                "message_author": "Rick",
                "group_challenge_id": 7,
                "user_id": 2,
                "createdAt": "2019-08-10T14:40:54.000Z"
            },

            {
                "id": 5,
                "message_body": "Hi, this is a message and I'm going on and on and on and on",
                "message_author": "Nick",
                "group_challenge_id": 7,
                "user_id": 1,
                "createdAt": "2019-08-10T14:40:37.000Z"
            },
            {
                "id": 6,
                "message_body": "Hi, this is also a message",
                "message_author": "Rick",
                "group_challenge_id": 7,
                "user_id": 2,
                "createdAt": "2019-08-10T14:40:54.000Z"
            }
        ]
    };

    handleClick = (index) => {
        if (this.state.showItemIndex == index) {
            this.setState({ showItemIndex: null });
        } else {
            this.setState({ showItemIndex: index });
        }

    }


    render() {
        return (
            <div className="container">
                <ul className="col s12 collapsible">
                    {this.state.messages.map(messages => (
                        <MessageItem
                            handleClick={this.handleClick}
                            showMe={this.state.showItemIndex == messages.id}
                            key={messages.id}
                            index={messages.id}
                            message_author={messages.message_author}
                            message_body={messages.message_body}
                            createdAt={messages.createdAt} />
                    ))}
                </ul>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mode_edit</i>
                                <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
                                <label htmlFor="icon_prefix2">message</label>
                            </div>
                        </div>
                        <div className="row">
                            <a className="waves-effect waves-light btn-small" id="message_button">Send</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default MessageBoard;
