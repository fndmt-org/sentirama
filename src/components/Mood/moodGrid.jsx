import React from 'react';
import {
    ModGridColorStyles,
    MoodGridLine,
} from './moodGrid.styles'
import { generateColorSteps } from '../Styles/colorSteps'


const MoodGridItem = ({index, name, color}) => (
    <ModGridColorStyles index={index} color={color}>
        {name}
    </ModGridColorStyles>
)

const MoodGrid = ({moods}) => {
    const colors = generateColorSteps({
        colorStart: 'hsla(145, 75%, 40%, 1)',
        colorEnd: 'hsla(312, 75%, 50%, 1)',
        steps: moods.length
    });

    return (
        <MoodGridLine>
            {moods.map((item, index) => (
                <MoodGridItem key={index} color={colors[index]} name={item.name} />
            ))}
        </MoodGridLine>
    )
}

export default MoodGrid;
 