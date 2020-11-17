import React from 'react';
import moodsGrid from './moods.grid';
import moodsList from './moods.data';
import {
    MoodGridCellStyles,
    MoodGridItemStyles,
    MoodGridLine,
    MoodGridWrapper,
} from './moodGrid.styles'
import { generateColorSteps } from '../Styles/colorSteps'


const MoodGridItem = ({index, name, color}) => (
    <MoodGridItemStyles index={index} color={color}>
        {name}
    </MoodGridItemStyles>
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
    console.log(colors)
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

const MoodGrid = () => {
    const colors = generateColorSteps({
        colorStart: 'hsla(145, 100%, 40%, 1)',
        colorEnd: 'hsla(312, 100%, 50%, 1)',
        steps: moodsList.length
    });

    return (
        <MoodGridLine>
            {moodsList.map((item, index) => (
                <MoodGridItem key={index} color={colors[index]} name={item} />
            ))}
        </MoodGridLine>
    )
}

export default MoodGrid;
 