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
    MetIcon,
    UnMetIcon,
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
    const history = useHistory()

    const handleClick = () => {
        history.push({
            pathname:  ROUTES.LANDING,
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

    const extractNumberMoods = (moods) =>{
        debugger
        const positive = moods ? Object.values(moods).filter(mood => mood.set === 'met') : null;
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
