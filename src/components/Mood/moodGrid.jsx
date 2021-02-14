import React from 'react';
import {
    ModButtonStyles,
    ModGridColorStyles,
    MoodGridLine,
} from './moodGrid.styles'


const MoodGridItem = ({index, item, onClickCallback}) => (
    <ModGridColorStyles index={index} color={item.color}>
        <ModButtonStyles onClick={() => onClickCallback(item)}>{item.name}</ModButtonStyles>
    </ModGridColorStyles>
)

const MoodGrid = ({moods, onClickCallback}) => (
    <MoodGridLine>
        {moods.map((item, index) => (
            <MoodGridItem key={index} onClickCallback={onClickCallback} item={item} />
        ))}
    </MoodGridLine>
);


export default MoodGrid;
 