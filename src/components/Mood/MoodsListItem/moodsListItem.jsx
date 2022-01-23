import React from 'react';

import { FormattedMessage } from 'react-intl';

import { useHistory } from "react-router";
import * as ROUTES from '../../../constants/routes';

import {
    EditButton,
    PencilIconStyles,
    MoodsListItemWrapper
} from './moodsListItem.styles';

import { ReactComponent as SmileIcon }  from './../../../assets/icons/44/smile.svg';
import { ReactComponent as FrownIcon }  from './../../../assets/icons/44/frown.svg';

export function MoodsListItem(props) {
    const {
        mood,
        color,
        name,
        set,
        role,
        modeAverage
    } = props;
    const history = useHistory()

    const handleClick = () => {
        history.push({
            pathname:  ROUTES.LANDING,
        });
    }

    return (
        <MoodsListItemWrapper className={modeAverage ? 'mode-average': ''} color={color}>
            <div className="username">
                <span>{name}</span>
                {role &&
                    <span className="role">(
                        <FormattedMessage
                            id="yourMood.list.role"
                            description="Show user role"
                            defaultMessage="You"/>
                    )</span>
                }
            </div>
            <div className="mood">
                {set === 'met' ? <SmileIcon></SmileIcon> : <FrownIcon></FrownIcon>}
                <span>{mood}</span>
            </div>
            {role ? 
                (
                    <EditButton onClick={() => handleClick()}>
                        <PencilIconStyles />
                        <FormattedMessage
                            id="yourMood.form.edit"
                            description="edit button"
                            defaultMessage="edit"/>
                    </EditButton>
                )
                :
                (
                    <span className="time-ago">
                        <FormattedMessage
                            id="yourMood.list.moment-ago"
                            description="show mood timestamp"
                            defaultMessage="a moment ago"/>
                    </span>
                )
            }
        </MoodsListItemWrapper>
    )
}