import React from 'react';
import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import LandingPage from '../Mood';
import MoodCategorySelector from '../Mood/MoodCategorySelector';
import MoodUser from '../Mood/MoodUser';
import MoodResults from '../Mood/MoodResults';
import MoodSelectedList from '../Mood/MoodSelectedList';

import Spanish from '../../lang/es';

import * as ROUTES from '../../constants/routes';
import GlobalStyle from '../Styles/global.styles';
import theme from '../Styles/basicVariables.styles'

WebFont.load({
    google: {
        families: theme.fontSourceFamilies,
    },
    active: function() {
        console.log(`load font/s ${theme.fontSourceFamilies} active`);
    },
});


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <IntlProvider messages={Spanish} locale={"es"}>
                <Router>
                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.MOOD_CATEGORY_SELECTOR} component={MoodCategorySelector} />
                    <Route path={ROUTES.MOOD_USER} component={MoodUser} />
                    <Route path={ROUTES.MOOD_RESULTS} component={MoodResults} />
                    <Route path={ROUTES.MOOD_SELECTED_LIST} component={MoodSelectedList} />
                </Router>
            </IntlProvider>
        </ThemeProvider>
    );
};

export default App;
