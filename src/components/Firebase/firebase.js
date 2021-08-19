import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBz9WIj8SHoc9F2l9Uz2BipbTbM_iGRY4w",
    authDomain: "corona-mood.firebaseapp.com",
    databaseURL: "https://corona-mood.firebaseio.com",
    projectId: "corona-mood",
    storageBucket: "corona-mood.appspot.com",
    messagingSenderId: "915912794570",
    appId: "1:915912794570:web:ba18ea9f96b8ea0981af33",
    measurementId: "G-PKF0ZEL622"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    // *** API ***
    doAddMood = (name, message, emoji, date, category, set) => {
        return this.messages().push().set({
            message,
            name,
            date,
            emoji,
            category,
            set,
        });
    };

    // *** Message API ***
    message = uid => this.db.ref(`message/${uid}`);
    messages = () => this.db.ref('messages');
}
export default Firebase;
