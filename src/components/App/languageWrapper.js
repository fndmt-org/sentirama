import React, {useState}  from 'react';
import { IntlProvider } from 'react-intl';
import English from '../../lang/en';
import Spanish from '../../lang/es';

export const Context = React.createContext();

const local = navigator.language;
let lang;
if (local==="es") {
    lang = Spanish;
    } else {
    lang = English;
}

const LanguageWrapper = (props) =>{
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
    <Context.Provider value={{locale, selectLanguage}}>
        <IntlProvider messages={messages} locale={locale}>
            {props.children}
        </IntlProvider>
    </Context.Provider>
}

export default LanguageWrapper;
