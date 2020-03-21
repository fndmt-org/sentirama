import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import MoodList from './moodList';
import EMOJIS from './emojis';
import { Button, SendCard, Input, EmojiSet, EmojiSelect } from './mood.styles';
import { ReactComponent as Arrow } from '../Styles/icons/arrow.svg';

const MoodPage = () => (
    <Fragment>
        <MoodList />
        <Mood />
    </Fragment>
);

const EmojiItem = ({value, onChange, active}) => {
    const Emoji = EMOJIS[value];
    const classActive = active === value ? 'active' : '';
    return (
        <EmojiSelect className={classActive}>
            <span role="img" aria-label={value}>
                <Emoji />
            </span>
            <input className="emoji-radio" type="radio" name="emoji" onChange={onChange} value={value} />
        </EmojiSelect>
    )
}

const INITIAL_STATE = {
    name: '',
    message: '',
    emoji: '',
    error: null,
    style: {},
};
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

    componentDidMount() {
        this.setState(
            {
                height: ReactDOM.findDOMNode(this).offsetHeight,
            }
        );
    }

    render() {

        const { name, message, emoji, error } = this.state;
        const isInvalid = message === '' || name === '' || emoji === '';
        const emojis = ['bad','neutral', 'good']
        document.body.style.marginBottom = `${this.state.height}px`;

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
                    <label>Select a face:</label>
                    <EmojiSet>
                        {emojis.map(
                            item =>
                            <EmojiItem
                                active={this.state.emoji}
                                value={item}
                                key={item}
                                onChange={this.onChange}/>
                            )
                        }
                    </EmojiSet>
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


