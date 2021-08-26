import React, { Fragment } from 'react';
import { useHistory } from "react-router";

import {useBasicMoods} from '../../../customHooks/useBasicMoods'
import {MoodWrapper, SentiramaLogoWrapper} from '../LayoutStyles/moodLayout.styles'
import {MoodSelector, MoodSelectorItem} from './moodCategorySelector.styles'
import { ReactComponent as SentiramaLogo }  from '../../Styles/icons/sentirama-logo.svg';
import * as ROUTES from '../../../constants/routes';

const MoodCategorySelector = ({need}) => {
    const filteredMoods = useBasicMoods(need)
    const history = useHistory()

    const handleClick = (mood) => {
        history.push({
            pathname:  ROUTES.MOOD_USER,
            state: {
              mood: mood.mood,
              color: mood.color
            } 
         });
    }

    return (
        <Fragment>
            <MoodWrapper>
                <SentiramaLogoWrapper>
                    <SentiramaLogo></SentiramaLogo>
                </SentiramaLogoWrapper>
                <MoodSelector>
                    {filteredMoods.map(mood => {
                        return (
                            <MoodSelectorItem
                                color={mood.color}
                                key={mood.mood}
                                onClick={() => handleClick(mood)}
                            >
                                {mood.mood}
                            </MoodSelectorItem>
                        )}
                    )}
                </MoodSelector>
            </MoodWrapper>
        </Fragment>
    )
}

export {MoodCategorySelector};