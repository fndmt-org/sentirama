import React, { useState } from 'react';
import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Mood';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import { withAuthentication } from '../Session';

import English from '../../lang/en';
import Spanish from '../../lang/es';

import * as ROUTES from '../../constants/routes';
import GlobalStyle from '../Styles/global.styles';
import theme from '../Styles/basicVariables.styles'

WebFont.load({
    google: {
        families: theme.fontSourceFamilies,
    },
    active: function() {
        console.log('load font active');
    },
});

const local = navigator.language;
let lang;
if (local==="es") {
    lang = Spanish;
    } else {
    lang = English;
}


const App = () => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'es') {
            setMessages(Spanish);
        } else {
            setMessages(English);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
                <IntlProvider messages={messages} locale={locale}>
                    <Router>
                        <select value = {locale} onChange={selectLanguage}>
                            <option value='en'>English</option>
                            <option value='es'>Español</option>
                        </select>
                        {/* <Navigation /> */}
                        <Route exact path={ROUTES.LANDING} component={LandingPage} />
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
                        <Route path={ROUTES.HOME} component={HomePage} />
                        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                        <Route path={ROUTES.ADMIN} component={AdminPage} />
                    </Router>
                </IntlProvider>
        </ThemeProvider>
    );
};

export default withAuthentication(App);
