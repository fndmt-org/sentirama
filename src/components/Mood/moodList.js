import React, { Component, Fragment } from 'react';
import { withFirebase } from '../Firebase';
import { CardItem, MoodListStyles } from './mood.styles';
import moment from 'moment';

import EMOJIS from './emojis';

const MoodItem = ({name, message, emoji, date}) => {
    const Emoji = EMOJIS[emoji];
    const dateTime = moment(date).format();
    const dateString = moment(date).fromNow();
    return (
        <CardItem as="li" kind={emoji} name={date}>
            <time dateTime={dateTime}>{dateString}</time>
            <Emoji className="emoji" />
            <span>{name}</span>
            <strong>{message}</strong>
        </CardItem>
    )
}

class MoodListController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            messages: [],
        };
        this.messagesEndRef = React.createRef();
    }

    componentWillUnmount() {
        this.props.firebase.messages().off();
    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.messages().orderByChild('date').on('value', snapshot => {
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
            this.scrollToBottom();
        });
    }

    render() {
        const { messages, loading } = this.state;
        return (
            <Fragment>
                {loading && <div>Loading ...</div>}
                {messages &&
                    <MoodListStyles addHeight={this.props.addHeight}>
                        {messages.map(item => (
                            <MoodItem {...item} key={item.uid}/>
                        ))}
                        <li ref={this.messagesEndRef} />
                    </MoodListStyles>
                }
            </Fragment>
        );
    }
}

export default withFirebase(MoodListController);
