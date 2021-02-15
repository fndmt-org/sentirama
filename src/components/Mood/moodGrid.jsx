import React, { useState } from 'react';
import { getMoodCategories } from './helpers';
import { getMoodsColor } from './moodsProps';

import {
    ModButtonStyles,
    ModGridColorStyles,
    MoodGridLine,
} from './moodGrid.styles'


const MoodGridItems = ({color, moods, onClickCallback, category}) => (
    moods.filter(mood => mood.category === category).map((mood, index) =>
        <ModGridColorStyles index={index} color={color}>
            <ModButtonStyles key={index} onClick={() => onClickCallback(mood)}>{mood.name}</ModButtonStyles>
        </ModGridColorStyles>
    )
);

const CategoryMoodGridItem = ({index, item, onClickCallback, moods}) => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <ModGridColorStyles index={index} color={item.color}>
            <ModButtonStyles onClick={() => setShowCategories(!showCategories)}>{item.category}</ModButtonStyles>
            {showCategories &&
                <MoodGridItems category={item.category} onClickCallback={onClickCallback} moods={moods}/>
            }
        </ModGridColorStyles>
    )
}

const MoodGrid = ({moods, onClickCallback}) => {
    const moodCategories = getMoodCategories(moods);
    const CATEGORIES = getMoodsColor(moodCategories);

    return (
        <MoodGridLine>
            <h4>Categorías de Necesidades Satisfechas</h4>
            {CATEGORIES.filter(category => category.set === 'met').map((item, index) => (
                <CategoryMoodGridItem key={index} onClickCallback={onClickCallback} item={item} moods={moods}/>
            ))}
            <h4>Categorías de Necesidades No Satisfechas</h4>
            {CATEGORIES.filter(category => category.set === 'unmet').map((item, index) => (
                <CategoryMoodGridItem key={index} onClickCallback={onClickCallback} item={item} moods={moods} />
            ))}
        </MoodGridLine>
    )
};


export default MoodGrid;
