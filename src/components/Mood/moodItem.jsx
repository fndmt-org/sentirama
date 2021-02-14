import React from 'react';
import moment from 'moment';
import { MoodItemStyles, Balloon } from './moodItem.styles';
import { EMOJIS } from './emojis';

const MoodItem = ({name, message, emoji, date}) => {
    const Emoji = EMOJIS[emoji];
    const dateTime = moment(date).format();
    const dateString = moment(date).fromNow();
    return (
        <MoodItemStyles name={date}>
            <span>{name}</span>
            <Balloon kind={emoji}>
                <Emoji className="emoji" />
                {message}
            </Balloon>
            <time dateTime={dateTime}>{dateString}</time>
        </MoodItemStyles>
    )
}

export {
    MoodItem
}
