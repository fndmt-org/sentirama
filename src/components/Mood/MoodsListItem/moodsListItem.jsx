import React from 'react';

import { FormattedMessage } from 'react-intl';

import { useHistory } from "react-router";
import * as ROUTES from '../../../constants/routes';

import {
    DateTimeWrapper,
    EditButton,
    Mood,
    MoodsListItemWrapper,
    PencilIconStyles,
    UserName,
} from './moodsListItem.styles';

import { ReactComponent as SmileIcon }  from './../../../assets/icons/44/smile.svg';
import { ReactComponent as FrownIcon }  from './../../../assets/icons/44/frown.svg';

export function MoodsListItem({
    color,
    date,
    isModeAverage,
    mood,
    name,
    currentUser,
    set,
}) {

    const history = useHistory()

    const handleEdit = () => {
        history.push({
            pathname:  ROUTES.LANDING,
        });
    }

    return (
        <MoodsListItemWrapper isModeAverage={isModeAverage}>
            <Mood isModeAverage={isModeAverage} color={color}>
                {set === 'met' ? <SmileIcon /> : <FrownIcon />}
                {mood}
            </Mood>
            <UserName isModeAverage={isModeAverage}>
                {name}
                {currentUser &&
                    <> (
                        <FormattedMessage
                            id="yourMood.list.role"
                            description="Show user role"
                            defaultMessage="You"/>
                    )</>
                }
                {currentUser ? (
                    <EditButton isModeAverage={isModeAverage} onClick={() => handleEdit()}>
                        <PencilIconStyles />
                        <FormattedMessage
                            id="yourMood.form.edit"
                            description="edit button"
                            defaultMessage="edit"/>
                    </EditButton>
                ):(
                    <DateTimeWrapper isModeAverage={isModeAverage}>
                        {new Date(date).toLocaleString()}
                    </DateTimeWrapper>
                )
                }
            </UserName>
        </MoodsListItemWrapper>
    )
}
