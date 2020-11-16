import React from 'react';
import moodsGrid from './moods.grid';
import moodsList from './moods.data';
import {
    MoodGridCellStyles,
    MoodGridItemStyles,
    MoodGridLine,
    MoodGridWrapper,
} from './moodGrid.styles'


const MoodGridItem = ({index, name}) => (
    <MoodGridItemStyles index={index}>
        {name}
    </MoodGridItemStyles>
)

const MoodGridCell = ({name}) => (
    <MoodGridCellStyles>
        {name}
    </MoodGridCellStyles>
)

const MoodSheet = () => (
    <MoodGridWrapper>
        {
            moodsGrid.map((line, index) => (
                <MoodGridLine index={index}>
                    {line.map((item, index) => (
                        <MoodGridCell index={index} name={item} />
                    ))}
                </MoodGridLine>
            ))
        }
    </MoodGridWrapper>
)

const MoodGrid = () => (
    <MoodGridLine>
        {moodsList.map((item, index) => (
            <MoodGridItem index={index} name={item} />
        ))}
    </MoodGridLine>
)

export default MoodGrid;
 