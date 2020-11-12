import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { FormattedMessage } from 'react-intl';

import { withFirebase } from '../Firebase';
import EmojiItem from './emojis';
import UseAutocomplete from './autocomplete';
import moodsList from './moods.data';
import Button from '../Styles/buttons.styles';
import {
    AddMoodCard,
    AddMoodWrapper,
    EmojiSet,
} from './addMood.styles';
import { InputStyleBase } from '../Styles/form.styles';

import { ReactComponent as Arrow } from '../Styles/icons/arrow.svg';

const INITIAL_STATE = {
    name: '',
    message: '',
    emoji: '',
    error: null,
    style: {},
};


class AddMoodBase extends Component {

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

    onSelect = selectedMood => {
        this.setState({ 'message': selectedMood });
    };

    render() {

        const { name, message, emoji, error } = this.state;
        const isInvalid = message === '' || name === '' || emoji === '';
        const emojis = ['bad','neutral', 'good'];
        return (
            <AddMoodWrapper>
                <AddMoodCard ref={this.props.innerRef}>
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
                                <InputStyleBase
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
                            <Fragment>
                                <UseAutocomplete
                                    name="message"
                                    id="select-mood"
                                    label={msg}
                                    options={moodsList}
                                    getOptionLabel={(mood) => mood}
                                    onChange={(event, newValue) => {
                                        this.onSelect(newValue);
                                    }}
                                />
                            </Fragment>
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
                </AddMoodCard>
            </AddMoodWrapper>

        );
    }
}

const AddMood = compose(
    withRouter,
    withFirebase,
)(AddMoodBase);


const AddModdRef = React.forwardRef((props, ref) =>
    <AddMood innerRef={ref} {...props}
/>);


export { AddMood, AddModdRef };


