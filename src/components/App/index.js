import React, { useState } from 'react';
import WebFont from 'webfontloader';
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import LandingPage from '../Mood';
// import MoodCategorySelector from '../MoodCategorySelector';
import MoodCategorySelector from '../Mood/MoodCategorySelector';
import MoodUser from '../Mood/MoodUser';
import MoodResults from '../Mood/MoodResults';

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
        console.log(`load font/s ${theme.fontSourceFamilies} active`);
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
                        <Route exact path={ROUTES.LANDING} component={LandingPage} />
                        <Route path={ROUTES.MOOD_CATEGORY_SELECTOR} component={MoodCategorySelector} />
                        <Route path={ROUTES.MOOD_USER} component={MoodUser} />
                        <Route path={ROUTES.MOOD_RESULTS} component={MoodResults} />
                    </Router>
                </IntlProvider>
        </ThemeProvider>
    );
};

export default App;
