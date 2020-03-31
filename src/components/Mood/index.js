import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { FormattedMessage } from 'react-intl';
import { withFirebase } from '../Firebase';
import MoodList from './moodList';
import EMOJIS from './emojis';
import { Button, SendCard, Input, EmojiSet, EmojiSelect } from './mood.styles';
import { ReactComponent as Arrow } from '../Styles/icons/arrow.svg';

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

    render() {

        const { name, message, emoji, error } = this.state;
        const isInvalid = message === '' || name === '' || emoji === '';
        const emojis = ['bad','neutral', 'good'];

        return (
            <SendCard ref={this.props.innerRef}>
                <form onSubmit={this.onSubmit}>
                    <h4>
                    <FormattedMessage
                        id="yourMood.form.title"
                        defaultMessage={'Your mood today:'}/>
                    </h4>
                    <FormattedMessage
                        id="yourMood.form.placeholder.name"
                        defaultMessage={'Your name/nikname'}>
                            { msg =>
                                <Input
                                    name="name"
                                    value={name}
                                    onChange={this.onChange}
                                    type="text"
                                    placeholder={msg}
                                />
                            }
                    </FormattedMessage>
                    <FormattedMessage
                        id="yourMood.form.placeholder.mood"
                        defaultMessage={'Your mood in one word'}>
                            { msg =>
                                <Input
                                    name="message"
                                    value={message}
                                    onChange={this.onChange}
                                    type="text"
                                    placeholder={msg}
                                />
                            }
                    </FormattedMessage>
                    <label>
                        <FormattedMessage
                            id="yourMood.form.emoji"
                            defaultMessage={'Select a face:'}/>
                    </label>
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

const AddMood = compose(
    withRouter,
    withFirebase,
)(AddMessaageBase);


const AddModdRef = React.forwardRef((props, ref) =>
    <AddMood innerRef={ref} {...props}
/>);

class MoodPage extends Component {

    constructor(props) {
        super(props);
        this.addMoodRef = React.createRef();
        this.state = { height: 0 };
    }

    componentDidMount() {
        this.setState(
            {
                height: `${this.addMoodRef.current.offsetHeight}px`,
            }
        );
    }


    render() {
        return (
            <Fragment>
                <MoodList
                    addHeight={this.state.height}
                />
                <AddModdRef
                    ref={this.addMoodRef}
                />
            </Fragment>
        )
    }

};


export default MoodPage;
export { AddMood };


