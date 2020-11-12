import React from 'react';
import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl';

import GlobalStyle from '../Styles/Global.styles';
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

import * as ROUTES from '../../constants/routes';
import theme from '../Styles/basicVariables.styles'

WebFont.load({
    google: {
        families: theme.fontSourceFamilies,
    },
    active: function() {
        console.log('load font');
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <IntlProvider locale="en">
            <Router>
                <Navigation />
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

export default withAuthentication(App);
