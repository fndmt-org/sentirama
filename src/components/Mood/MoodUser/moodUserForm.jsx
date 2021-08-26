import React, { Fragment, useRef } from 'react';
import { injectIntl } from 'react-intl';
import { useHistory } from "react-router";

import {MoodWrapper, SentiramaLogoWrapper} from '../LayoutStyles/moodLayout.styles'
import {MoodUserFormWrapper} from './moodUserForm.styles'

import { ReactComponent as Arrow }  from '../../../assets/icons/arrow.svg';
import * as ROUTES from '../../../constants/routes';

const MoodUserForm = ({selectedMood, intl}) => {
    const usernameRef = useRef('')
    const history = useHistory()
    const {mood, color} = selectedMood;
    const placeholder = intl.formatMessage({id: 'yourMood.form.placeholder.name'});

    const submitUser = (e) => {
        e.preventDefault();
        history.push({
            pathname:  ROUTES.MOOD_RESULTS,
            state: {
                mood: mood,
                color: color,
                username: usernameRef.current.value
            }
        });
    }

    return (
        <Fragment>
            <MoodWrapper>
                <SentiramaLogoWrapper>
                    {/* <SentiramaLogo /> */}
                </SentiramaLogoWrapper>
                <MoodUserFormWrapper
                    color={color}
                    onSubmit={(e) => submitUser(e)}
                >
                    <h1>{mood}</h1>
                    <input type="text" ref={usernameRef} placeholder={placeholder}></input>
                    <button>
                        <Arrow></Arrow>
                    </button>
                </MoodUserFormWrapper>
            </MoodWrapper>
        </Fragment>
    )
}

MoodUserForm.propTypes = {
    intl: Object.isRequired
}

export default injectIntl(MoodUserForm);
