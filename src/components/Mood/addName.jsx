import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import { Send } from '../Styles/buttons.styles';
import {
    AddMoodStyles,
} from './addMood.styles';

import { ReactComponent as Arrow } from '../Styles/icons/arrow.svg';
import { ReactComponent as Logo } from '../Styles/brand/header-logo.svg';

import { InputStyleBase } from '../Styles/form.styles';



const AddName = ({ onNextStep, name }) => {

    const [localName, onChangeName] = useState('');
    const isInvalid = localName === '';

    useEffect(() => {
        onChangeName(name)
    }, [name]);

    const handleChange = (event) => {
        onChangeName(event.target.value);
    }

    const handleSubmit = (event) => {
        onNextStep(localName);
        event.preventDefault();
    }

    return (
        <AddMoodStyles onSubmit={handleSubmit}>
            <Logo />
            <FormattedMessage
                id="yourMood.form.placeholder.name"
                defaultMessage="Your name/nikname">
                    { msg =>
                        <InputStyleBase
                            name="name"
                            value={localName}
                            onChange={handleChange}
                            type="text"
                            placeholder={msg}
                        />
                    }
            </FormattedMessage>
            <Send disabled={isInvalid} type="submit">
                <Arrow />
            </Send>
        </AddMoodStyles>
    );
}

export default AddName;


