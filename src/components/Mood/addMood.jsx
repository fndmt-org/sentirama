import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { FormattedMessage } from 'react-intl';

import { withFirebase } from '../Firebase';
import MoodGrid from './moodGrid';
import EmojiItem from './emojis';
import UseAutocomplete from './autocomplete';
import { getMoodsColor } from './moodsProps';

import Button from '../Styles/simple.buttons.styles';
import {
    AddMoodStyles,
    AddMoodWrapper,
    EmojiSet,
} from './addMood.styles';

import { ReactComponent as Arrow } from '../Styles/icons/arrow.svg';
import { InputStyleBase } from '../Styles/form.styles';

const MOODS = getMoodsColor();

const INITIAL_STATE = {
    name: '',
    message: '',
    emoji: '',
    category: '',
    set: '',
    error: null,
    style: {},
    moods: MOODS,
    filteredMoods: MOODS,
};

class AddMoodBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.onSelect = this.onSelect.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onSubmit = event => {
        const { name, message, emoji, category, set } = this.state;
        const date = Date.now();
        this.props.firebase
            .doAddMood(name, message, emoji, date, category, set)
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

    onSelect = (selectedMood) => {
        this.setState({
            'message': selectedMood?.name,
            'category': selectedMood?.category,
            'set': selectedMood?.set,
            'filteredMoods' : selectedMood?.category ? MOODS.filter(mood => mood.category === selectedMood.category) : MOODS,
        });
    };

    onReset = () => {
        this.setState({
            'category': '',
            'filteredMoods' : MOODS,
        });
    };

    render() {

        const {
            name,
            message,
            emoji,
            error,
            filteredMoods,
            category,
        } = this.state;
        const isInvalid = message === '' || name === '' || emoji === '';
        const emojis = [
            'bad',
            'neutral',
            'good'
        ];

        return (
            <Fragment>
                <AddMoodWrapper>
                <AddMoodStyles ref={this.props.innerRef} onSubmit={this.onSubmit}>
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
                                        options={MOODS}
                                        getOptionLabel={(mood) => mood.name}
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
                        <Button disabled={isInvalid} type="submit">
                            <Arrow />
                        </Button>
                        {error && <p>{error.message}</p>}
                    </AddMoodStyles>
                </AddMoodWrapper>
                    {category
                    ? <SuggestedMoodsMessage category={category} onReset={this.onReset}/>
                    : null}
                <MoodGrid onClickCallback={this.onSelect} moods={filteredMoods || MOODS} />
            </Fragment>
        );
    }
}

const SuggestedMoodsMessage = ({category, onReset}) =>(
    <Fragment>
        <h4>Suggested moods related to "{category}"</h4>
        <button onClick={() =>onReset()}>See all</button>
    </Fragment>
)

const AddMood = compose(
    withRouter,
    withFirebase,
)(AddMoodBase);


const AddModdRef = React.forwardRef((props, ref) =>
    <AddMood innerRef={ref} {...props}
/>);


export { AddMood, AddModdRef };


