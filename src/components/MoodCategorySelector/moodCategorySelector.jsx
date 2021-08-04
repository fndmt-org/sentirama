import React, { Fragment } from 'react';
import EmojiItem from './../Mood/emojis';
import {useBasicMoods} from './../../customHooks/useBasicMoods'
import {MoodSelectorWrapper, MoodSelector, MoodSelectorItem, EmojiSelected} from './moodCategorySelector.styles'
import { ReactComponent as SentiramaLogo }  from '../Styles/icons/sentirama-logo.svg';

const MoodCategorySelector = ({need}) => {
    const filteredMoods = useBasicMoods(need)

    return (
        <Fragment>
            <MoodSelectorWrapper>
                <div>
                    <SentiramaLogo></SentiramaLogo>
                    <EmojiSelected>
                        <EmojiItem
                            active="true"
                            value={need}
                            key={need}/>
                    </EmojiSelected>
                </div>
                <MoodSelector>
                    {filteredMoods.map(mood => <MoodSelectorItem color={mood.color} key={mood.mood}>{mood.mood}</MoodSelectorItem>)}
                </MoodSelector>
            </MoodSelectorWrapper>
        </Fragment>
    )
}

export {MoodCategorySelector};