import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { getMoodCategories } from './helpers';
import { getMoodsColor } from './moodsProps';

import {
    CategoryButtonSc,
    CategoryButtonActiveSc,
    MoodButtonSc,
    MoodCategorySc,
    MoodGridSc,
    MoodItemSc,
} from './moodGrid.styles'

import {
    TitleFormStyles,
} from './addMood.styles';


const MoodGridItems = ({color, moods, onClickCallback, category}) => (
    <ul>
        {moods.filter(mood => mood.category === category).map((mood, index) =>
            <MoodItemSc key={index} color={color}>
                <MoodButtonSc index={index} onClick={() => onClickCallback(mood)}>{mood.name}</MoodButtonSc>
            </MoodItemSc>
        )}
    </ul>
);

const CategoryMoodGridItem = ({index, item, onClickCallback, moods}) => {
    const [showCategories, setShowCategories] = useState(false);

    const CompoenntButtonSc = showCategories ? CategoryButtonActiveSc : CategoryButtonSc;
    return (
        <MoodCategorySc index={index} color={item.color}>
            <CompoenntButtonSc onClick={() => setShowCategories(!showCategories)}>{item.category}</CompoenntButtonSc>
            {showCategories &&
                <MoodGridItems category={item.category} onClickCallback={onClickCallback} moods={moods}/>
            }
        </MoodCategorySc>
    )
}

const MoodGrid = ({moods, onClickCallback}) => {
    const moodCategories = getMoodCategories(moods);
    const CATEGORIES = getMoodsColor(moodCategories);

    return (
        <MoodGridSc>
            <TitleFormStyles>
                <FormattedMessage
                    id="yourMood.met.title"
                    description="met title"
                    defaultMessage="when your needs are satisfied"/>
            </TitleFormStyles>
            {CATEGORIES.filter(category => category.set === 'met').map((item, index) => (
                <CategoryMoodGridItem key={index} onClickCallback={onClickCallback} item={item} moods={moods}/>
            ))}
            <TitleFormStyles>
                <FormattedMessage
                    id="yourMood.unmet.title"
                    description="unmet title"
                    defaultMessage="when your needs are not satisfied"/>
            </TitleFormStyles>
            {CATEGORIES.filter(category => category.set === 'unmet').map((item, index) => (
                <CategoryMoodGridItem key={index} onClickCallback={onClickCallback} item={item} moods={moods} />
            ))}
        </MoodGridSc>
    )
};


export default MoodGrid;
