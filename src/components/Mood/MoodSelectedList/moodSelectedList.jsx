import React, { useState, useEffect } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import { compose } from 'recompose';

import { withFirebase } from '../../Firebase';
import {
    MoodWrapper,
    SentiramaLogoWrapper,
} from '../LayoutStyles/moodLayout.styles'
import {
    MoodListUser,
    MoodListWrapper,
} from './moodSelectedList.styles';
import { ToggleButton } from '../../Styles/buttons.styles';
import { ReactComponent as CheckIcon }  from '../../../assets/icons/44/check.svg';
import {MoodsListItem} from '../MoodsListItem/moodsListItem';


const MoodSelectedList = (props) => {
    const {
        mood,
        color,
        username,
        set,
    } = props;

    const [moodsList, setMoodsList] = useState([])

    useEffect(() => {
        props.firebase.fetchMoods(
            setMoodsList
        );
    }, []);

    const [averageChecked, setAverageChecked] = useState(false);

    return (
        <MoodWrapper>
            <SentiramaLogoWrapper/>
            <MoodListWrapper isModeAverage={averageChecked} color={color}>
                <MoodListUser>
                    <MoodsListItem
                        color={color}
                        mood={mood}
                        name={username}
                        set={set}
                        currentUser={true}
                        isModeAverage={averageChecked}
                    />
                    {moodsList.map(mood => {
                        return (
                            <MoodsListItem
                                key={mood.uuid}
                                {...mood}
                                currentUser={false}
                                isModeAverage={averageChecked}
                            />
                        )
                    })}
                </MoodListUser>
                <ToggleButton>
                    <input
                        type="checkbox"
                        name="switch"
                        id="switch"
                        onChange={() => setAverageChecked(!averageChecked)}
                    ></input>
                    <label htmlFor="switch"></label>
                    <CheckIcon></CheckIcon>
                    <span>
                        <FormattedMessage
                            id="yourMood.list.average"
                            description="Show mood average label"
                            defaultMessage="Promedio humor"/>
                    </span>
                </ToggleButton>
            </MoodListWrapper>
        </MoodWrapper>
    )
}

const MoodList = compose(
    withFirebase,
)(MoodSelectedList);

export default injectIntl(MoodList);
