/* eslint-disable max-statements */
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { FormattedMessage } from 'react-intl';
import { compose } from 'recompose';

import { withFirebase } from '../../Firebase';

import {
    MoodWrapper,
    SentiramaLogoWrapper,
    TitleFormStylesOverColors,
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
    MetIcon,
    UnMetIcon,
    InfoIconStyles
} from './moodResults.styles'
import * as ROUTES from '../../../constants/routes';


const MoodResultsAverge = ({ positiveNumberMoodsPercent, negativeNumberMoodsPercent }) => {
    return <>
        {positiveNumberMoodsPercent
            ? <MoodResultMet value={positiveNumberMoodsPercent}>
                <MetIcon /> {positiveNumberMoodsPercent}%
            </MoodResultMet>
            : null}
        {negativeNumberMoodsPercent
            ? <MoodResultUnMet value={negativeNumberMoodsPercent}>
                <UnMetIcon /> {negativeNumberMoodsPercent}%
            </MoodResultUnMet>
            : null}
    </>
}

const MoodResultsBase = (props) => {

    const {
        uuid,
        mood,
        color,
        username,
        set,
    } = props;
    const history = useHistory();

    const handleEdit = () => {
        history.push({
            pathname:  ROUTES.LANDING,
        });
    }

    const handleList = () => {
        history.push({
            pathname: ROUTES.MOOD_SELECTED_LIST,
            state: {
                username,
                uuid,
                mood,
                color,
                set,
            }
        });
    }

    const sendNewMood = () => {
        const name = username;
        const date = Date.now();

        props.firebase.doAddMood(
            {
                name,
                mood,
                date,
                set,
                color,
                uuid,
            }
        )
    };

    const [positiveNumberMoodsPercent, setPositiveNumberMoodsPercent] = useState(0);
    const [negativeNumberMoodsPercent, setNegativeNumberMoodsPercent] = useState(0);
    const [allMoods, setAllMoods] = useState(0);

    const extractNumberMoods = (moods) =>{
        const positive = moods ? Object.values(moods).filter(mood => mood.set === 'met') : null;
        const allMoods = Object.values(moods).length;
        setAllMoods(allMoods);
        setPositiveNumberMoodsPercent(
            Math.round(positive.length * 100 / allMoods)
        );
        setNegativeNumberMoodsPercent(
            Math.round((allMoods - positive.length) * 100 / allMoods)
        )
    }

    useEffect(() => {
        props.firebase.singIn(sendNewMood())
        props.firebase.getGlobalMood(
            extractNumberMoods
        );
    }, [mood, username]);

    return (
        <MoodWrapper>
            <SentiramaLogoWrapper/>
            <MoodResultsWrapper>
                <MoodResultsUser color={color}>
                    <TitleFormStylesOverColors>
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
                    </TitleFormStylesOverColors>
                    <CustomButton onClick={() => handleEdit()}>
                        <PencilIconStyles />
                        <FormattedMessage
                            id="yourMood.form.edit"
                            description="edit button"
                            defaultMessage="edit"/>
                    </CustomButton>
                    <CustomButton onClick={() => handleList()}>
                        <InfoIconStyles />
                        <FormattedMessage
                            id="yourMood.form.list"
                            description="list button"
                            defaultMessage="list"/>
                    </CustomButton>
                </MoodResultsUser>
                <MoodResultAverageTitle>
                    <FormattedMessage
                        id="yourMood.form.allAnswers"
                        description="all results title"
                        defaultMessage="{allMoods} results"
                        values={
                            {
                                allMoods: allMoods,
                            }
                        }/>
                </MoodResultAverageTitle>
                <MoodResultAverageWrapper>
                    <MoodResultsAverge
                        positiveNumberMoodsPercent={positiveNumberMoodsPercent}
                        negativeNumberMoodsPercent={negativeNumberMoodsPercent}
                    />
                </MoodResultAverageWrapper>
            </MoodResultsWrapper>
        </MoodWrapper>
    )
};

const MoodResults = compose(
    withFirebase,
)(MoodResultsBase);

export default MoodResults;
