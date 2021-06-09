import React from 'react';
import moment from 'moment';
import { MoodItemStyles, Balloon } from './moodItem.styles';

const MoodItem = ({name, message, date}) => {
    const dateTime = moment(date).format();
    const dateString = moment(date).fromNow();
    return (
        <MoodItemStyles name={date}>
            <span>{name}</span>
            <Balloon>
                {message}
            </Balloon>
            <time dateTime={dateTime}>{dateString}</time>
        </MoodItemStyles>
    )
}

export {
    MoodItem
}
