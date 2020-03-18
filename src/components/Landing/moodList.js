import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

import EMOJIS from './emojis';

const MoodItem = ({name, message, emoji}) => (
    <div>
        <span>{name}</span>
        <br/>
        <strong>{message}</strong>
        <br/>
        <span>{EMOJIS[emoji]}</span>
    </div>
)

const MoodsList = ({ messages }) => (
    <ul>
        {messages.map(item => (
            <li key={item.uid}>
                <MoodItem {...item}/>
            </li>
        ))}
    </ul>
);

class MoodPage extends Component {
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
                {messages && <MoodsList messages={messages} />}
            </div>
        );
    }
}

export default withFirebase(MoodPage);
