import React, { Component, Fragment } from 'react';
import { withFirebase } from '../Firebase';
import { CardItem } from './mood.styles';
import moment from 'moment';

import EMOJIS from './emojis';

const MoodItem = ({name, message, emoji, date}) => {
    const Emoji = EMOJIS[emoji];
    const dateTime = moment(date).format();
    const dateString = moment(date).fromNow();
    return (
        <CardItem as="li" kind={emoji}>
            <time dateTime={dateTime}>{dateString}</time>
            <Emoji className="emoji" />
            <span>{name}</span>
            <strong>{message}</strong>
        </CardItem>
    )
}

const MoodsList = ({ messages }) => (
    <ul>
        {messages.map(item => (
            <MoodItem {...item} key={item.uid}/>
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
            <Fragment>
                {loading && <div>Loading ...</div>}
                {messages && <MoodsList messages={messages} />}
            </Fragment>
        );
    }
}

export default withFirebase(MoodPage);
