import React, { Component, Fragment } from 'react';
import { withFirebase } from '../Firebase';
import { MoodListStyles } from './moodList.styles';
import { MoodItem } from './moodItem'

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
        this.messagesEndRef.current.scrollIntoView({});
    }

    componentDidUpdate() {
        // this.scrollToBottom();
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
            // this.scrollToBottom();
        });
    }

    render() {
        const { messages, loading } = this.state;
        return (
            <Fragment>
                {loading && <div>Loading ...</div>}
                {messages &&
                    <MoodListStyles>
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
