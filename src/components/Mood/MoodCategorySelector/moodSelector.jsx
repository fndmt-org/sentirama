import React from 'react';
import { useHistory } from "react-router";

import { useBasicMoods } from '../../../customHooks/useBasicMoods'
import { MoodWrapper, SentiramaLogoWrapper } from '../LayoutStyles/moodLayout.styles'
import { MoodSelectorList, MoodSelectorItem, MoodSelectorButton } from './moodSelector.styles'
import * as ROUTES from '../../../constants/routes';

const MoodSelector = ({ uuid, set }) => {
    const history = useHistory();
    const filteredMoods = useBasicMoods(set);

    const handleClickMood = (mood) => {
        history.push({
            pathname: ROUTES.MOOD_USER,
            state: {
                set,
                color: mood.color,
                mood: mood.mood,
                uuid,
            }
        });
    }

    return (
        <MoodWrapper>
            <SentiramaLogoWrapper />
            <MoodSelectorList>
                {filteredMoods.map(mood => (
                    <MoodSelectorItem
                        key={mood.mood}>
                        <MoodSelectorButton
                            color={mood.color}
                            onClick={() => handleClickMood(mood)}>
                            {mood.mood}
                        </MoodSelectorButton>
                    </MoodSelectorItem>
                )
                )}
            </MoodSelectorList>
        </MoodWrapper>
    )
}

export { MoodSelector };
