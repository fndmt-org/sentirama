import React from 'react';
import moodsGrid from './moods.grid';
import {
    MoodGridCellStyles,
    ModGridColorStyles,
    MoodGridLine,
    MoodGridWrapper,
} from './moodGrid.styles'
import { generateColorSteps } from '../Styles/colorSteps'


const MoodGridItem = ({index, name, color}) => (
    <ModGridColorStyles index={index} color={color}>
        {name}
    </ModGridColorStyles>
)

const MoodGridCell = ({name}) => (
    <MoodGridCellStyles>
        {name}
    </MoodGridCellStyles>
)

const MoodSheet = () => {
    const colors = generateColorSteps({
        colorStart: 'hsla(145, 100%, 40%, 1)',
        colorEnd: 'hsla(312, 100%, 50%, 1)',
        steps: moodsGrid.length
    });
    return (
        <MoodGridWrapper>
            {
                moodsGrid.map((line, index) => (
                    <MoodGridLine key={index}>
                        {line.map((item, index) => (
                            <MoodGridCell key={index} color={colors[index]} name={item} />
                        ))}
                    </MoodGridLine>
                ))
            }
        </MoodGridWrapper>
    )
}

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
 