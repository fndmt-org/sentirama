import React from 'react';
import { useHistory } from "react-router";

import { useBasicMoods } from '../../../customHooks/useBasicMoods'
import { MoodWrapper, SentiramaLogoWrapper } from '../LayoutStyles/moodLayout.styles'
import { MoodSelector, MoodSelectorItem, MoodSelectorButton } from './moodCategorySelector.styles'
import * as ROUTES from '../../../constants/routes';

const MoodCategorySelector = ({ uuid, set }) => {
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
            <MoodSelector>
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
            </MoodSelector>
        </MoodWrapper>
    )
}

export { MoodCategorySelector };
