import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { FormattedMessage } from 'react-intl';


import moods from './moods.grid';
import AddName from './addName.jsx'

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
    category: '',
    set: '',
    error: null,
    style: {},
    moods: MOODS,
};

class AddMoodBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.onReset = this.onReset.bind(this);
    }

    onPressFeeling = (selectedFeeling) => {
        const { name } = this.state;
        const message = selectedFeeling.name;
        const { category, set, color } = selectedFeeling;
        const date = Date.now();
        const emoji = 'neutral';
        this.props.firebase
            .doAddMood(message,
                name,
                date,
                emoji,
                category,
                set,
                color)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                // redirect to messages view
            })
            .catch(error => {
                this.setState({ error });
            });
    };


    onReset = () => {
    };

    onNextStep = name => {
        this.setState({
            'name' : name,
        });
    };

    render() {

        const {
            name,
            error,
        } = this.state;


        return (
            <Fragment>
                <TitleFormStyles>
                    <FormattedMessage
                        id="yourMood.form.title"
                        description="Add your mood form title"
                        defaultMessage="How Do You Feel?"/>
                </TitleFormStyles>
                { name
                    ? <MoodGrid onClickCallback={this.onPressFeeling} moods={MOODS} />
                    : <AddName onNextStep={this.onNextStep}/>
                }
                {error && <p>{error.message}</p>}
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


