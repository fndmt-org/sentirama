import React, { Fragment } from 'react';
import { useBasicMoods } from './../../customHooks/useBasicMoods'
import { MoodSelectorWrapper, MoodSelector, MoodSelectorItem } from './moodCategorySelector.styles'
import { SentiramaLogo }  from '../Styles/common.styles';

const MoodCategorySelector = ({need}) => {
    const filteredMoods = useBasicMoods(need)

    return (
        <Fragment>
            <MoodSelectorWrapper>
            <SentiramaLogo />
                <MoodSelector>
                    {filteredMoods.map(mood => <MoodSelectorItem color={mood.color} key={mood.mood}>{mood.mood}</MoodSelectorItem>)}
                </MoodSelector>
            </MoodSelectorWrapper>
        </Fragment>
    )
}

export { MoodCategorySelector };
