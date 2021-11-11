import React, { Fragment, useRef } from 'react';
import { injectIntl } from 'react-intl';
import { useHistory } from "react-router";

import { TitleFormStylesLigth, MoodWrapper, SentiramaLogoWrapper } from '../LayoutStyles/moodLayout.styles'
import { MoodUserFormWrapper } from './moodUserForm.styles'

import { ReactComponent as Arrow }  from '../../../assets/icons/44/arrow.svg';
import * as ROUTES from '../../../constants/routes';

const MoodUserForm = (props) => {
    const usernameRef = useRef('')
    const history = useHistory()
    const {
        category,
        mood,
        color,
        uuid,
        intl
    } = props;
    const placeholder = intl.formatMessage({id: 'yourMood.form.placeholder.name'});

    const submitUser = (e) => {
        history.push({
            pathname:  ROUTES.MOOD_RESULTS,
            state: {
                category,
                mood,
                color,
                username: usernameRef.current.value,
                uuid,
            }
        });
        e.preventDefault();
    }

    return (
        <Fragment>
            <MoodWrapper top>
                <SentiramaLogoWrapper />
                <MoodUserFormWrapper
                    color={color}
                    onSubmit={(e) => submitUser(e)}
                >
                    <TitleFormStylesLigth>{mood}</TitleFormStylesLigth>
                    <div>
                        <input type="text" ref={usernameRef} placeholder={placeholder}></input>
                        <button>
                            <Arrow/>
                        </button>
                    </div>
                </MoodUserFormWrapper>
            </MoodWrapper>
        </Fragment>
    )
}

MoodUserForm.propTypes = {
    intl: Object.isRequired
}

export default injectIntl(MoodUserForm);
