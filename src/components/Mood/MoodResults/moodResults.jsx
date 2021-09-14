import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import { FormattedMessage } from 'react-intl';
import { compose } from 'recompose';
import { withFirebase } from '../../Firebase';

import { MoodWrapper } from '../LayoutStyles/moodLayout.styles'
import { MoodResultsWrapper, CustomButton} from './moodResults.styles'
import { SentiramaLogo } from '../../Styles/common.styles';
import { ReactComponent as PencilIcon }  from '../../../assets/icons/arrow.svg';
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

        props.firebase
            .doAddMood(
                name,
                message,
                emoji,
                date,
                category,
                set,
                color,
                uuid,
            )
            .then((e) => {
                console.log('then doAddMood', e);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        sendNewMood()
    }, [mood, username]);

    return (
        <MoodWrapper>
            <SentiramaLogo/>
            <MoodResultsWrapper
                color={color}
            >
                <h1 className="results-user">
                    <span>{`${username.charAt(0).toUpperCase()}${username.slice(1)}`}</span>
                    <span className="results-user-message">
                        <FormattedMessage
                            id="yourMood.form.resultsMessage"
                            description=""
                            defaultMessage=""/>
                    </span>
                    <span>{mood.toLowerCase()}</span>
                    <CustomButton onClick={handleClick}>
                        <PencilIcon></PencilIcon>
                        <FormattedMessage
                            id="yourMood.form.edit"
                            description=""
                            defaultMessage=""/>
                    </CustomButton>
                </h1>
                <span className="results-average-message">
                    <FormattedMessage
                        id="yourMood.form.allAnswers"
                        description=""
                        defaultMessage=""/>
                </span>
                <div className="results-average">
                    <div className="good-average">55%</div>
                    <div className="bad-average">45%</div>
                </div>
            </MoodResultsWrapper>
        </MoodWrapper>
    )
}

const MoodResults = compose(
    withFirebase,
)(MoodResultsBase);

export default MoodResults;
