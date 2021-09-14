import React from 'react';
import { useHistory } from "react-router";

import { useBasicMoods } from '../../../customHooks/useBasicMoods'
import { MoodWrapper } from '../LayoutStyles/moodLayout.styles'
import { MoodSelector, MoodSelectorItem } from './moodCategorySelector.styles'
import { SentiramaLogo }  from '../../Styles/common.styles';
import * as ROUTES from '../../../constants/routes';

const MoodCategorySelector = ({ uuid, category }) => {
    const history = useHistory();
    const filteredMoods = useBasicMoods(category);

    const handleClickMood = (mood) => {
        history.push({
            pathname: ROUTES.MOOD_USER,
            state: {
                category,
                color: mood.color,
                mood: mood.mood,
                uuid,
            }
        });
    }

    return (
        <MoodWrapper>
            <SentiramaLogo />
            <MoodSelector>
                {filteredMoods.map(mood => {
                    return (
                        <MoodSelectorItem
                            color={mood.color}
                            key={mood.mood}
                            onClick={() => handleClickMood(mood)}
                        >
                            {mood.mood}
                        </MoodSelectorItem>
                    )}
                )}
            </MoodSelector>
        </MoodWrapper>
    )
}

export {MoodCategorySelector};
