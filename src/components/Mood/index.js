import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import MoodList from './moodList';
import EMOJIS from './emojis';
import { Button, SendCard, Input } from './mood.styles';
import { ReactComponent as Arrow } from '../Styles/icons/arrow.svg';

const MoodPage = () => (
    <div>
        <MoodList />
        <Mood />
    </div>
);

const INITIAL_STATE = {
    name: '',
    message: '',
    emoji: '',
    error: null,
};

const EmojiItem = ({value, emoji, onChange}) => (
    <label>
        <span role="img" aria-label={value}>{emoji}</span>
        <input type="radio" name="emoji" onChange={onChange} value={value} />
    </label>
)

class AddMessaageBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { name, message, emoji } = this.state;
        const date = Date.now();
        this.props.firebase
            .doAddMood(name, message, emoji, date)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {

        const { name, message, emoji, error } = this.state;
        const isInvalid = message === '' || name === '' || emoji === '';
        return (
            <SendCard>
                <form onSubmit={this.onSubmit}>
                    <h4>Your mood today:</h4>
                    <Input
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Your name/nikname"
                    />
                    <Input
                        name="message"
                        placeholder="Your mood in one word"
                        onChange={this.onChange}
                        value={message}
                    />
                    <EmojiItem value="bad" emoji={EMOJIS.bad} onChange={this.onChange}/>
                    <EmojiItem value="neutral" emoji={EMOJIS.neutral} onChange={this.onChange}/>
                    <EmojiItem value="good" emoji={EMOJIS.good} onChange={this.onChange}/>
                    <Button disabled={isInvalid} type="submit"><Arrow /></Button>
                    {error && <p>{error.message}</p>}
                </form>
            </SendCard>
        );
    }
}

const Mood = compose(
    withRouter,
    withFirebase,
)(AddMessaageBase);

export default MoodPage;
export { Mood };


