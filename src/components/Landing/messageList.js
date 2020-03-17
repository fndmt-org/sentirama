import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const MessageItem = ({name, message}) => (
    <div>
        <label>{name}</label>
        <span>{message}</span>
    </div>
)

const MessagesList = ({ messages }) => (
    <ul>
        {messages.map(item => (
            <li key={item.uid}>
                <MessageItem {...item}/>
            </li>
        ))}
    </ul>
);

class MessagesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            messages: [],
        };
    }

    componentWillUnmount() {
        this.props.firebase.messages().off();
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.messages().on('value', snapshot => {
            const messagesObject = snapshot.val();
            let messagesList;
            if (messagesObject){
                messagesList = Object.keys(messagesObject).map(key => ({
                    ...messagesObject[key],
                    uid: key,
                }));
            }
            this.setState({
                messages: messagesList,
                loading: false,
            });
        });
    }

    render() {
        const { messages, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}
                {messages && <MessagesList messages={messages} />}
            </div>
        );
    }
}

export default withFirebase(MessagesPage);
