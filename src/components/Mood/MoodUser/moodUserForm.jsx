import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

import { useHistory } from "react-router";

import {
    TitleFormStylesOverColors,
    MoodWrapper,
    SentiramaLogoWrapper,
} from '../LayoutStyles/moodLayout.styles'
import {
    FieldLabel,
    FieldWrapper,
    UserFormWrapper,
    IconButtonNext,
} from './moodUserForm.styles'

import { InputStyleBase } from '../../Styles/form.styles';

import { ReactComponent as Arrow }  from '../../../assets/icons/44/arrow.svg';
import * as ROUTES from '../../../constants/routes';

const MoodUserForm = (props) => {
    const usernameRef = useRef('')
    const history = useHistory()
    const {
        set,
        mood,
        color,
        uuid,
        intl,
    } = props;
    const placeholder = intl.formatMessage({id: 'yourMood.userForm.placeholder.name'});
    const [showLabel, setShowLabel] = useState(false);
    const submitUser = (e) => {
        history.push({
            pathname:  ROUTES.MOOD_RESULTS,
            state: {
                set,
                mood,
                color,
                username: usernameRef.current.value,
                uuid,
            }
        });
        e.preventDefault();
    }

    const handleBlur = ({target}) => {
        setShowLabel(target.value ? true : false);
    }

    return (
        <MoodWrapper>
            <SentiramaLogoWrapper />
            <UserFormWrapper
                color={color}
                onSubmit={(e) => submitUser(e)}
            >
                <TitleFormStylesOverColors>
                    <FormattedMessage
                        id="yourMood.userForm.youFeel"
                        description="Show the feeling to user"
                        defaultMessage="Sientes {feeling}"
                        values={
                            {
                                feeling: mood.toLowerCase(),
                            }
                        }/>
                </TitleFormStylesOverColors>
                <FieldWrapper>
                    <FieldLabel showLabel={showLabel} htmlFor="name">{placeholder}</FieldLabel>
                    <InputStyleBase
                        minlength="3"
                        type="text"
                        name="name"
                        onChange={() => setShowLabel(true)}
                        onBlur={(e) => handleBlur(e)}
                        ref={usernameRef}
                        placeholder={placeholder}
                    />
                </FieldWrapper>
                <IconButtonNext>
                    <Arrow/>
                </IconButtonNext>
            </UserFormWrapper>
        </MoodWrapper>
    )
}

MoodUserForm.propTypes = {
    intl: PropTypes.object.isRequired,
    set: PropTypes.string.isRequired,
    mood: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
}

export default injectIntl(MoodUserForm);
