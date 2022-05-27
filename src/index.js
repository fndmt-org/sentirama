import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

import * as serviceWorker from './serviceWorker';

const $DOM_ELEMENT = document.getElementById('sentirama-app');

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App client={$DOM_ELEMENT.dataset.client} />
    </FirebaseContext.Provider>,
    $DOM_ELEMENT);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
