import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { FormattedMessage } from 'react-intl';


import moods from './moods.grid';


import { withFirebase } from '../Firebase';
import MoodGrid from './moodGrid';
import { getMoodsColor } from './moodsProps';

import Button, { Send } from '../Styles/buttons.styles';
import {
    AddMoodStyles,
    AddMoodWrapper,
    TitleFormStyles,
    SuggestedMoodsStyles,
} from './addMood.styles';

import { ReactComponent as Arrow } from '../Styles/icons/arrow.svg';
import { InputStyleBase } from '../Styles/form.styles';

const MOODS = getMoodsColor(moods);

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
            'indexSelected': selectedMood?.index,
            'message': selectedMood?.name,
            'category': selectedMood?.category,
            'set': selectedMood?.set,
        });
    };

    onReset = () => {
    };

    render() {

        const {
            name,
            message,
            error,
        } = this.state;
        const isInvalid = message === '' || name === '';


        return (
            <Fragment>
                <AddMoodWrapper>
                <AddMoodStyles ref={this.props.innerRef} onSubmit={this.onSubmit}>
                        <TitleFormStyles>
                        <FormattedMessage
                            id="yourMood.form.title"
                            description="Add your mood form title"
                            defaultMessage="Your mood today:"/>
                        </TitleFormStyles>
                        <FormattedMessage
                            id="yourMood.form.placeholder.name"
                            defaultMessage="Your name/nikname">
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
                        <Send disabled={isInvalid} type="submit">
                            <Arrow />
                        </Send>
                        {error && <p>{error.message}</p>}
                    </AddMoodStyles>
                </AddMoodWrapper>
                <MoodGrid onClickCallback={this.onSelect} moods={MOODS} />
            </Fragment>
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


