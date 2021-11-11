import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router";
import { v4 as uuidv4 } from 'uuid';
import { compose } from 'recompose';
import { FormattedMessage } from 'react-intl';

import { withFirebase } from '../../Firebase';
import EmojiItem from '../emojis';

import {
    MoodWrapper,
    SentiramaLogoWrapper,
    TitleFormStyles
} from '../LayoutStyles/moodLayout.styles'
import {
    AddMoodStyles,
    EmojiSet,
} from './addMood.styles';

import * as ROUTES from '../../../constants/routes';

const AddMoodBase = (props) => {
    const history = useHistory();

    const onChange = event => {
        const category = event.target.value;
        // TODO move uuid to session storage
        const uuid = uuidv4();
        history.push({
            pathname: ROUTES.MOOD_CATEGORY_SELECTOR,
            state: {
                category,
                uuid,
            }
        })
    };
    const emojis = [
        'good',
        'bad'
    ];

    return (
        <MoodWrapper>
            <SentiramaLogoWrapper />
            <AddMoodStyles>
                <TitleFormStyles>
                    <FormattedMessage
                        id="yourMood.form.title"
                        description="Add Sentirama first question"
                        defaultMessage="¿Cómo te sientes hoy?"/>
                </TitleFormStyles>
                <EmojiSet>
                    {emojis.map(item =>
                        <EmojiItem
                            value={item}
                            key={item}
                            onChange={onChange}/>
                    )}
                </EmojiSet>
            </AddMoodStyles>
        </MoodWrapper>
    );
}

const AddMood = compose(
    withRouter,
    withFirebase,
)(AddMoodBase);


const AddMoodRef = React.forwardRef((props, ref) =>
    <AddMood innerRef={ref} {...props}/>);


export { AddMood, AddMoodRef };
