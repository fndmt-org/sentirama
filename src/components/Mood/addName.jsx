import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { Send } from '../Styles/buttons.styles';

import { ReactComponent as Arrow } from '../Styles/icons/arrow.svg';
import { ReactComponent as Logo } from '../Styles/brand/header-logo.svg';

import { InputStyleBase } from '../Styles/form.styles';


const AddName = (onPushNext, name, onChange) => {

    return (
        <Fragment>
            <Logo />
            <FormattedMessage
                id="yourMood.form.placeholder.name"
                defaultMessage="Your name/nikname">
                    { msg =>
                        <InputStyleBase
                            name="name"
                            value={name}
                            onChange={onChange}
                            type="text"
                            placeholder={msg}
                        />
                    }
            </FormattedMessage>
            {/* <Send disabled={isInvalid} type="submit">
                <Arrow />
            </Send>
            {error && <p>{error.message}</p>} */}

        </Fragment>
    );
}

export {  AddName };


