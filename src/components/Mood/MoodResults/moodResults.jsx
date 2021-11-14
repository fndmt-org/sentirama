import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { FormattedMessage } from 'react-intl';
import { compose } from 'recompose';
import { withFirebase } from '../../Firebase';

import {
    MoodWrapper,
    SentiramaLogoWrapper,
    TitleFormStylesLigth,
} from '../LayoutStyles/moodLayout.styles'
import {
    CustomButton,
    MoodResultAverageTitle,
    MoodResultAverageWrapper,
    MoodResultMet,
    MoodResultsUser,
    MoodResultsWrapper,
    MoodResultUnMet,
    PencilIconStyles,
} from './moodResults.styles'
import * as ROUTES from '../../../constants/routes';

const MoodResultsBase = (props) => {

    const {
        uuid,
        mood,
        color,
        username,
        category,
    } = props;
    const history = useHistory()

    const handleClick = () => {
        history.push({
            pathname:  ROUTES.LANDING,
        });
    }

    const sendNewMood = () => {
        const name = username;
        const message = mood;
        const set = '';
        const emoji = '';
        const date = Date.now();

        props.firebase.doAddMood(
            {
                name,
                message,
                emoji,
                date,
                category,
                set,
                color,
                uuid,
            }
        )
    };

    const [positiveNumberMoodsPercent, setPositiveNumberMoodsPercent] = useState(0);
    const [negativeNumberMoodsPercent, setNegativeNumberMoodsPercent] = useState(0);

    const extractNumberMoods = (moods) =>{
        const positive = moods ? Object.values(moods).filter(mood => mood.category === 'good') : null;
        const allMoods = Object.values(moods).length
        const positiveModsPercent = positive.length * 100 / allMoods;
        setPositiveNumberMoodsPercent(Math.round(positiveModsPercent));
        const negativeModPercent = (allMoods - positive.length) * 100 / allMoods;
        setNegativeNumberMoodsPercent(Math.round(negativeModPercent))
    }

    const getPercent = () => {
        props.firebase.getGlobalMood(
            extractNumberMoods
        );
    }


    useEffect(() => {
        props.firebase.singIn(sendNewMood())
        getPercent();
    }, [mood, username]);

    return (
        <MoodWrapper>
            <SentiramaLogoWrapper/>
            <MoodResultsWrapper>
                <MoodResultsUser color={color}>
                    <TitleFormStylesLigth>
                        <FormattedMessage
                            id="yourMood.form.resultsMessage"
                            description="User name"
                            defaultMessage="{name}, al {action} sientes {feeling}"
                            values={
                                {
                                    action: "leer este artículo",
                                    name: `${username.charAt(0).toUpperCase()}${username.slice(1)}`,
                                    feeling: mood.toLowerCase(),
                                }
                            }/>
                    </TitleFormStylesLigth>
                    <CustomButton onClick={handleClick}>
                        <PencilIconStyles />
                        <FormattedMessage
                            id="yourMood.form.edit"
                            description="edit button"
                            defaultMessage="edit"/>
                    </CustomButton>
                </MoodResultsUser>
                <MoodResultAverageTitle>
                    <FormattedMessage
                        id="yourMood.form.allAnswers"
                        description="all results title"
                        defaultMessage="All results"/>
                </MoodResultAverageTitle>
                <MoodResultAverageWrapper>
                    <MoodResultMet value={positiveNumberMoodsPercent}>
                        {positiveNumberMoodsPercent}%
                    </MoodResultMet>
                    <MoodResultUnMet value={negativeNumberMoodsPercent}>
                        {negativeNumberMoodsPercent}%
                    </MoodResultUnMet>
                </MoodResultAverageWrapper>
            </MoodResultsWrapper>
        </MoodWrapper>
    )
};

const MoodResults = compose(
    withFirebase,
)(MoodResultsBase);

export default MoodResults;
